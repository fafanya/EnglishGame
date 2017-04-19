using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using EnglishGame.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using System.Runtime.Serialization;
using EnglishGame.Data;
using System.Security.Claims;
using EnglishGame.Hubs;
using Microsoft.AspNetCore.SignalR.Infrastructure;
using EnglishGame.Auth;
using System.IdentityModel.Tokens.Jwt;
using Newtonsoft.Json;
using System.Security.Principal;
using Microsoft.IdentityModel.Tokens;
using EnglishGame.Common;

namespace EnglishGame.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class GameController : ApiHubController<Broadcastert>
    {
        private readonly ApplicationDbContext m_Context;
        private readonly UserManager<UUser> m_UserManager;
        private readonly SignInManager<UUser> m_SignInManager;

        public GameController(ApplicationDbContext context, UserManager<UUser> userManager,
            SignInManager<UUser> signInManager, IConnectionManager signalRConnectionManager)
            : base(signalRConnectionManager)
        {
            m_Context = context;
            m_UserManager = userManager;
            m_SignInManager = signInManager;
        }

        [HttpGet("GetRounds")]
        public IEnumerable<URound> GetRounds()
        {
            UUser user = m_Context.UUsers.FirstOrDefault(x => x.UserName == User.Identity.Name);
            var rounds = m_Context.URounds;
            return rounds;
        }

        [HttpGet("GetDuels")]
        public IEnumerable<UDuel> GetDuels()
        {
            List<UDuel> duels = new List<UDuel>();
            try
            {
                UUser user = m_Context.UUsers.FirstOrDefault(x => x.UserName == User.Identity.Name);
                duels = m_Context.UDuels.Include(x => x.URounds)
                    .Where(x => x.PrimaryPlayerId == user.Id || x.SecondaryPlayerId == user.Id).ToList();
                foreach(UDuel d in duels)
                {
                    d.PrimaryPlayer = null;
                    d.SecondaryPlayer = null;
                }
            }
            catch(Exception e)
            {
                var error = e;
            }
            return duels;
        }

        [HttpGet("NewDuel")]
        public string NewDuel()
        {
            double[] weights = new double[] { 0.25, 0.25, 0.25, 0.25 };
            NeuralNetwork nn = new NeuralNetwork(weights);
            List<Operation> operations = nn.GetOperations();

            string result;
            UUser user = m_Context.UUsers.FirstOrDefault(x => x.UserName == User.Identity.Name);
            if (user != null)
            {
                UDuel duel = m_Context.UDuels.Include(x=>x.URounds)
                    .FirstOrDefault(x => x.SecondaryPlayerId == null && !String.Equals(x.PrimaryPlayerId, user.Id));
                if (duel == null)
                {
                    duel = GenerateSumDuel(user.Id);
                }
                else
                {
                    duel.Summary += " - " + User.Identity.Name;
                    duel.SecondaryPlayerId = user.Id;
                    m_Context.SaveChanges();
                }
                duel = m_Context.UDuels.FirstOrDefault(x => x.Id == duel.Id);
                duel.PrimaryPlayer = null;
                duel.SecondaryPlayer = null;

                result = JsonConvert.SerializeObject(new RequestResult
                {
                    State = RequestState.Success,
                    Data = duel
                });
                return result;
            }

            result = JsonConvert.SerializeObject(new RequestResult
            {
                State = RequestState.Success,
                Data = null
            });

            return result;
        }

        [Authorize("Bearer")]
        [HttpPost("PostAnswer")]
        public async Task<IActionResult> PostAnswer([FromBody] UDuel duel)
        {
            string msg = String.Empty;
            RequestState state = RequestState.Success;
            object data = null;

            var claimsIdentity = User.Identity as ClaimsIdentity;
            try
            {
                msg = CheckSumAnswers(duel);
                await Clients.Group(duel.Id.ToString()).MessageReceived(msg);
                data = duel;
                m_Context.UDuels.Update(duel);
                m_Context.SaveChanges();
            }
            catch(Exception e)
            {
                state = RequestState.Failed;
                msg = e.Message;
            }

            string result = JsonConvert.SerializeObject(new RequestResult
            {
                State = state,
                Data = data,
                Msg = msg
            });
            return Ok(result);
        }

        private UDuel GenerateSumDuel(string primaryPlayerId)
        {
            UDuel duel = new UDuel()
            {
                PrimaryPlayerId = primaryPlayerId,
                URounds = new List<URound>(),
                Summary = User.Identity.Name
            };

            Random random = new Random();
            int min = 1000;
            int max = 100000;
            for (int i = 0; i < 10; i++)
            {
                int firstSummand = random.Next(min, max);
                int secondSummand = random.Next(min, max);
                int sum = firstSummand + secondSummand;

                int fakeSum = random.Next(sum - 100, sum + 100);

                URound round = new URound();
                round.Question = firstSummand + "+" + secondSummand;
                if (firstSummand % 2 == 0)
                {
                    round.LeftVariant = sum.ToString();
                    round.RightVariant = fakeSum.ToString();
                }
                else
                {
                    round.RightVariant = sum.ToString();
                    round.LeftVariant = fakeSum.ToString();
                }
                round.Index = i;
                duel.URounds.Add(round);
            }
            m_Context.UDuels.Add(duel);
            m_Context.SaveChanges();
            return duel;
        }
        private string CheckSumAnswers(UDuel duel)
        {
            string message = String.Empty;
            int primaryAmount = 0;
            int secondaryAmount = 0;
            bool isPalyed = true;
            foreach(URound round in duel.URounds)
            {
                if (round.PrimaryAnswer == null || round.SecondaryAnswer == null)
                {
                    message = "Game not over...";
                    isPalyed = false;
                    break;
                }
                else
                {
                    string[] summands = round.Question.Split('+');
                    int firstSummand = Convert.ToInt32(summands[0]);
                    int secondSummand = Convert.ToInt32(summands[1]);

                    int leftVariant = Convert.ToInt32(round.LeftVariant);
                    int rightVariant = Convert.ToInt32(round.RightVariant);

                    int primaryAnswer = Convert.ToInt32(round.PrimaryAnswer);
                    int secondaryAnswer = Convert.ToInt32(round.SecondaryAnswer);

                    if (leftVariant == (firstSummand + secondSummand))
                    {
                        if(primaryAnswer == leftVariant)
                        {
                            primaryAmount++;
                        }
                        if (secondaryAnswer == leftVariant)
                        {
                            secondaryAmount++;
                        }
                    }
                    else if (rightVariant == (firstSummand + secondSummand))
                    {
                        if (primaryAnswer == rightVariant)
                        {
                            primaryAmount++;
                        }
                        if (secondaryAnswer == rightVariant)
                        {
                            secondaryAmount++;
                        }
                    }
                    else
                    {
                        message = "Error";
                        isPalyed = false;
                        break;
                    }
                }
            }
            if (isPalyed)
            {
                UUser primaryPlayer = m_Context.UUsers.
                    FirstOrDefault(x => x.Id == duel.PrimaryPlayerId);
                UUser secondaryPlayer = m_Context.UUsers.
                    FirstOrDefault(x => x.Id == duel.SecondaryPlayerId);

                message = primaryPlayer.UserName + "   " + primaryAmount + "  :  " + secondaryAmount +
                    "   " + secondaryPlayer.UserName;
                duel.Summary = message;

                double[] weights = new double[] { 0.25, 0.25, 0.25, 0.25 };
                double[] trainOutput = new double[4] { 0, 1, 0, 1 };
                NeuralNetwork nn = new NeuralNetwork(weights);
                nn.Train(trainOutput);
                weights = nn.Weights.ToArray();
            }
            return message;
        }
    }
}

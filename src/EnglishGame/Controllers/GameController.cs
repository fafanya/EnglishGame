using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using EnglishGame.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using EnglishGame.Data;
using System.Security.Claims;
using EnglishGame.Hubs;
using Microsoft.AspNetCore.SignalR;
using Newtonsoft.Json;
using EnglishGame.Common;

namespace EnglishGame.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class GameController : Controller
    {
        private readonly ApplicationDbContext m_Context;
        private readonly UserManager<UUser> m_UserManager;
        private readonly SignInManager<UUser> m_SignInManager;
        private readonly IHubContext<Broadcaster> m_HubContext;

        public GameController(
            ApplicationDbContext context,
            UserManager<UUser> userManager,
            SignInManager<UUser> signInManager,
            IHubContext<Broadcaster> hubContext)
        {
            m_Context = context;
            m_UserManager = userManager;
            m_SignInManager = signInManager;
            m_HubContext = hubContext;
        }

        [HttpGet("GetRounds")]
        public IEnumerable<URound> GetRounds()
        {
            UUser user = m_Context.UUsers.FirstOrDefault(x => x.UserName == User.Identity.Name);
            var rounds = m_Context.URounds;
            return rounds;
        }

        [HttpGet("GetDuels/{id}")]
        public List<UDuel> GetDuels([FromRoute] int id)
        {
            List<UDuel> duels = new List<UDuel>();
            try
            {
                UUser user = m_Context.UUsers.FirstOrDefault(x => x.UserName == User.Identity.Name);
                duels = m_Context.UDuels.Include(x => x.URounds)
                    .Where(x => (x.USubjectId == id) &&
                    (x.PrimaryPlayerId == user.Id || x.SecondaryPlayerId == user.Id)).ToList();
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

        [HttpGet("GetSubjects")]
        public IEnumerable<USubject> GetSubjects()
        {
            List<USubject> duels = new List<USubject>();
            try
            {
                duels = m_Context.USubjects.ToList();
            }
            catch (Exception e)
            {
                var error = e;
            }
            return duels;
        }

        [HttpGet("NewDuel/{id}")]
        public RequestResult NewDuel([FromRoute] int id)
        {
            RequestResult result = null;
            try
            {
                UUser user = m_Context.UUsers.FirstOrDefault(x => x.UserName == User.Identity.Name);
                if (user != null)
                {
                    UDuel duel = m_Context.UDuels.Include(x => x.URounds)
                        .FirstOrDefault(x => x.USubjectId == id &&
                        x.SecondaryPlayerId == null && !String.Equals(x.PrimaryPlayerId, user.Id));
                    if (duel == null)
                    {
                        duel = GenerateDuel(id);
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

                    result =  new RequestResult
                    {
                        State = RequestState.Success,
                        Data = duel
                    };
                    return result;
                }

                result = new RequestResult
                {
                    State = RequestState.Success,
                    Data = null
                };
            }
            catch(Exception e)
            {
                var ex = e;
            }
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
                msg = CheckAnswers(duel);
                await m_HubContext.Clients.Group(duel.Id.ToString()).SendAsync("MessageReceived", msg);
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

        private UDuel GenerateDuel(int subjectId)
        {
            UUser user = m_Context.UUsers.Include(x => x.UWeight).
                FirstOrDefault(x => x.UserName == User.Identity.Name);

            UDuel duel = new UDuel()
            {
                PrimaryPlayerId = user.Id,
                USubjectId = subjectId,
                URounds = new List<URound>(),
                Summary = User.Identity.Name
            };

            NeuralNetwork nn = new NeuralNetwork(user.UWeight.GetWeights());
            int[] output = nn.GetOutput();

            int forSum = output[0];
            int forSub = output[1];
            int forMult = output[2];
            int forDiv = output[3];

            Random random = new Random();
            int min = 10;
            int max = 100;
            for (int i=0;i< forSum; i++)
            {
                int firstSummand = random.Next(min, max);
                int secondSummand = random.Next(min, max);
                int sum = firstSummand + secondSummand;

                int fakeSum = random.Next(sum - 5, sum + 5);

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
            for (int i = 0; i < forSub; i++)
            {
                int firstSummand = random.Next(max-40, max);
                int secondSummand = random.Next(min, min+40);
                int sum = firstSummand - secondSummand;

                int fakeSum = random.Next(sum - 5, sum + 5);

                URound round = new URound();
                round.Question = firstSummand + "-" + secondSummand;
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
                round.Index = forSum+i;
                duel.URounds.Add(round);
            }
            for (int i = 0; i < forMult; i++)
            {
                int firstSummand = random.Next(min, max-40);
                int secondSummand = random.Next(min, max-40);
                int sum = firstSummand * secondSummand;

                int fakeSum = random.Next(sum - 5, sum + 5);

                URound round = new URound();
                round.Question = firstSummand + "*" + secondSummand;
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
                round.Index = forSum+forSub+i;
                duel.URounds.Add(round);
            }
            for (int i = 0; i < forDiv; i++)
            {
                int firstSummand = random.Next(max-40, max);
                int secondSummand = random.Next(min, min+40);

                int sum = firstSummand * secondSummand;
                int fakeSum = random.Next(firstSummand - 5, firstSummand + 5);

                URound round = new URound();
                round.Question = sum + "/" + secondSummand;
                if (firstSummand % 2 == 0)
                {
                    round.LeftVariant = firstSummand.ToString();
                    round.RightVariant = fakeSum.ToString();
                }
                else
                {
                    round.RightVariant = firstSummand.ToString();
                    round.LeftVariant = fakeSum.ToString();
                }
                round.Index = forSum + forSub + forMult + i;
                duel.URounds.Add(round);
            }

            m_Context.UDuels.Add(duel);
            m_Context.SaveChanges();
            return duel;
        }

        private UDuel GenerateSum1Duel(string primaryPlayerId)
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
        private string CheckAnswers(UDuel duel)
        {
            string message = String.Empty;
            int primaryAmount = 0;
            int secondaryAmount = 0;
            bool isPalyed = true;
            double[] pe = new double[4] { 0, 0, 0, 0 };
            double[] se = new double[4] { 0, 0, 0, 0 };
            foreach (URound round in duel.URounds)
            {
                if (round.PrimaryAnswer == null || round.SecondaryAnswer == null)
                {
                    message = "Game not over...";
                    isPalyed = false;
                    break;
                }
                else
                {
                    string[] summands = null;
                    char devider;
                    if (round.Question.Contains("+"))
                    {
                        devider = '+';
                    }
                    else if (round.Question.Contains("-"))
                    {
                        devider = '-';
                    }
                    else if (round.Question.Contains("*"))
                    {
                        devider = '*';
                    }
                    else if (round.Question.Contains("/"))
                    {
                        devider = '/';
                    }
                    else
                    {
                        isPalyed = false;
                        break;
                    }

                    summands = round.Question.Split(devider);

                    int firstSummand = Convert.ToInt32(summands[0]);
                    int secondSummand = Convert.ToInt32(summands[1]);

                    int leftVariant = Convert.ToInt32(round.LeftVariant);
                    int rightVariant = Convert.ToInt32(round.RightVariant);

                    int primaryAnswer = Convert.ToInt32(round.PrimaryAnswer);
                    int secondaryAnswer = Convert.ToInt32(round.SecondaryAnswer);

                    int output = -1;
                    if(devider == '+')
                    {
                        output = firstSummand + secondSummand;
                    }
                    else if(devider == '-')
                    {
                        output = firstSummand - secondSummand;
                    }
                    else if(devider == '*')
                    {
                        output = firstSummand * secondSummand;
                    }
                    else if(devider == '/')
                    {
                        output = firstSummand / secondSummand;
                    }

                    bool isPRight = false;
                    bool isSRight = false;
                    if (leftVariant == output)
                    {
                        if (primaryAnswer == leftVariant)
                        {
                            primaryAmount++;
                            isPRight = true;
                        }
                        if (secondaryAnswer == leftVariant)
                        {
                            secondaryAmount++;
                            isSRight = true;
                        }
                    }
                    else if (rightVariant == output)
                    {
                        if (primaryAnswer == rightVariant)
                        {
                            primaryAmount++;
                            isPRight = true;
                        }
                        if (secondaryAnswer == rightVariant)
                        {
                            secondaryAmount++;
                            isSRight = true;
                        }
                    }
                    else
                    {
                        message = "Error";
                        isPalyed = false;
                        break;
                    }
                    if (devider == '+')
                    {
                        if (!isPRight)
                        {
                            pe[0]++;
                        }
                        if (!isSRight)
                        {
                            se[0]++;
                        }
                    }
                    else if (devider == '-')
                    {
                        if (!isPRight)
                        {
                            pe[1]++;
                        }
                        if (!isSRight)
                        {
                            se[1]++;
                        }
                    }
                    else if (devider == '*')
                    {
                        if (!isPRight)
                        {
                            pe[2]++;
                        }
                        if (!isSRight)
                        {
                            se[2]++;
                        }
                    }
                    else if (devider == '/')
                    {
                        if (!isPRight)
                        {
                            pe[3]++;
                        }
                        if (!isSRight)
                        {
                            se[3]++;
                        }
                    }
                }
            }
            if (isPalyed)
            {
                UUser pp = m_Context.UUsers.Include(x => x.UWeight).
                    FirstOrDefault(x => x.Id == duel.PrimaryPlayerId);
                UUser sp = m_Context.UUsers.Include(x => x.UWeight).
                    FirstOrDefault(x => x.Id == duel.SecondaryPlayerId);

                message = pp.UserName + "   " + primaryAmount + "  :  " + secondaryAmount +
                    "   " + sp.UserName;
                duel.Summary = message;

                double[] weightsPP = new double[] { pp.UWeight.Sum,
                    pp.UWeight.Sub, pp.UWeight.Mult, pp.UWeight.Div };
                double[] weightsSP = new double[] { sp.UWeight.Sum,
                    sp.UWeight.Sub, sp.UWeight.Mult, sp.UWeight.Div };

                double peSum = pe.Sum();
                double[] ptOutput = new double[4] { 0.0, 0.0, 0.0, 0.0 };
                if (peSum != 0)
                {
                    for (int i = 0; i < 4; i++)
                    {
                        ptOutput[i] = pe[i] / peSum;
                    }
                }

                NeuralNetwork ppnn = new NeuralNetwork(weightsPP);
                ppnn.Train(ptOutput);
                double[] nwPP = ppnn.Weights.ToArray();
                pp.UWeight.Sum = nwPP[0];
                pp.UWeight.Sub = nwPP[1];
                pp.UWeight.Mult = nwPP[2];
                pp.UWeight.Div = nwPP[3];
                m_Context.Update(pp.UWeight);

                double seSum = se.Sum();
                double[] stOutput = new double[4] { 0.0, 0.0, 0.0, 0.0 };
                if (seSum != 0)
                {
                    for (int i = 0; i < 4; i++)
                    {
                        stOutput[i] = se[i] / seSum;
                    }
                }

                NeuralNetwork spnn = new NeuralNetwork(weightsSP);
                spnn.Train(stOutput);
                double[] nwSP = spnn.Weights.ToArray();
                sp.UWeight.Sum = nwSP[0];
                sp.UWeight.Sub = nwSP[1];
                sp.UWeight.Mult = nwSP[2];
                sp.UWeight.Div = nwSP[3];
                m_Context.Update(sp.UWeight);

                m_Context.SaveChanges();
            }
            return message;
        }
    }
}

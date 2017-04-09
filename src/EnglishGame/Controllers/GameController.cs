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
            List<URound> rounds = new List<URound>();
            URound round = new URound { Id = 1, Question = "2+2", LeftVariant = "7", RightVariant = "4" };
            rounds.Add(round);
            return rounds;
        }

        [HttpGet("GetDuels")]
        public IEnumerable<UDuel> GetDuels()
        {
            IEnumerable<UDuel> duels = m_Context.UDuels.Include(x=>x.URounds);
            return duels;
        }

        [Authorize("Bearer")]
        [HttpPost("PostAnswer")]
        public async Task<IActionResult> PostAnswer(/*[FromBody] object id*/)
        {
            var claimsIdentity = User.Identity as ClaimsIdentity;
            try
            {
                var t = await Clients.All.MessageReceived("Message received at: " + DateTime.Now.ToString());
            }
            catch(Exception e)
            {
                var ee = e;
            }
            var a = JsonConvert.SerializeObject(new RequestResult
            {
                State = RequestState.Success,
                Data = new
                {
                    lol = "lol"
                }
            });

            return Ok(a);
        }
    }
}

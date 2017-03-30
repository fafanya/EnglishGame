using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using EnglishGame.Models;

namespace EnglishGame.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class GameController : Controller
    {
        [HttpGet("GetRounds")]
        public IEnumerable<Round> GetRounds()
        {
            List<Round> rounds = new List<Round>();
            Round round = new Round { id = 1, question = "2+2", leftVariant = "7", rightVariant = "4" };
            rounds.Add(round);
            return rounds;
        }

        [HttpPost("PostAnswer")]
        public string PostAnswer(/*[FromBody] object id*/)
        {
            return "lol";
        }
    }
}

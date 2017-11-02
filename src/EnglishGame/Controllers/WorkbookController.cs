using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using EnglishGame.Models.Workbook;

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
    [Route("api/Workbook")]
    public class WorkbookController : Controller
    {
        private readonly ApplicationDbContext m_Context;
        private readonly UserManager<UUser> m_UserManager;
        private readonly SignInManager<UUser> m_SignInManager;
        private readonly IHubContext<Broadcastert> m_HubContext;

        public WorkbookController(
            ApplicationDbContext context,
            UserManager<UUser> userManager,
            SignInManager<UUser> signInManager,
            IHubContext<Broadcastert> hubContext)
        {
            m_Context = context;
            m_UserManager = userManager;
            m_SignInManager = signInManager;
            m_HubContext = hubContext;
        }

        //[Authorize("Bearer")]
        /*[HttpPost("PostExercise")]
        public async Task<IActionResult> PostExercise([FromBody] UExercise exercise)
        {
            string msg = String.Empty;
            RequestState state = RequestState.Success;
            object data = null;

            var claimsIdentity = User.Identity as ClaimsIdentity;
            try
            {
                await m_HubContext.Clients.Group(exercise.Id.ToString()).InvokeAsync("ExerciseAdded", msg);
                data = exercise;
                m_Context.UExercises.Update(exercise);
                m_Context.SaveChanges();
            }
            catch (Exception e)
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
        }*/
    }
}
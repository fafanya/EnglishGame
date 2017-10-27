using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using EnglishGame.Hubs;
using EnglishGame.Models;
using System;

namespace EnglishGame.Controllers
{
    [Route("api/[controller]")]
    public class MessagesController : Controller
    {
        IHubContext<Broadcastert> m_HubContext;
        public MessagesController(IHubContext<Broadcastert> hubContext)
        {
            m_HubContext = hubContext;
        }

        // POST api/messages
        [HttpPost]
        public void Post([FromBody]ChatMessage message)
        {
            m_HubContext.Clients.Group(message.MatchId.ToString()).InvokeAsync("AddChatMessage", message);
        }
    }
}

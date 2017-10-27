using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using System;

namespace EnglishGame.Controllers
{
    /*public abstract class ApiHubController<T> : Controller
        where T : Hub
    {
        //private readonly IHubContext _hub;
        public IHubClients Clients { get; private set; }
        public IGroupManager Groups { get; private set; }
        protected ApiHubController(IHubContext<T> hubContext)
        {
            var _hub = hubContext;
            Clients = _hub.Clients;
            Groups = _hub.Groups;
        }
    }*/
}
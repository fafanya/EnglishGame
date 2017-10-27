using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using EnglishGame.Hubs;
using EnglishGame.Data.Abstract;
using EnglishGame.Models;
using AutoMapper;
using System;

namespace EnglishGame.Controllers
{
    [Route("api/[controller]")]
    public class MatchesController : Controller
    {
        IMatchRepository _matchRepository;
        IHubContext<Broadcastert> m_HubContext;

        public MatchesController(
            IHubContext<Broadcastert> hubContext,
            IMatchRepository matchRepository)
        {
            _matchRepository = matchRepository;
            m_HubContext = hubContext;
        }

        // GET api/values
        [HttpGet]
        public IEnumerable<MatchViewModel> Get()
        {
            IEnumerable<Match> _matches = _matchRepository.AllIncluding(m => m.Feeds);
            IEnumerable<MatchViewModel> _matchesVM = Mapper.Map<IEnumerable<Match>, IEnumerable<MatchViewModel>>(_matches);

            return _matchesVM;
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public async void Put(int id, [FromBody]MatchScore score)
        {
            Match _match = _matchRepository.GetSingle(id);
            if (score.HostScore == 0 && score.GuestScore == 0)
            {
                _match.Feeds.Clear();
            }

            _match.HostScore = score.HostScore;
            _match.GuestScore = score.GuestScore;

            _matchRepository.Commit();

            MatchViewModel _matchVM = Mapper.Map<Match, MatchViewModel>(_match);
            await m_HubContext.Clients.All.InvokeAsync("UpdateMatch", _matchVM);
        }
    }
}

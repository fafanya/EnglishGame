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
    public class FeedsController : Controller
    {
        IFeedRepository _feedRepository;
        IMatchRepository _matchRepository;
        IHubContext<Broadcastert> m_HubContext;

        public FeedsController(
            IHubContext<Broadcastert> hubContext,
            IFeedRepository feedRepository,
            IMatchRepository matchRepository)
        {
            _feedRepository = feedRepository;
            _matchRepository = matchRepository;
            m_HubContext = hubContext;
        }

        // POST api/feeds
        [HttpPost]
        public async void Post([FromBody]FeedViewModel feed)
        {
            Match _match = _matchRepository.GetSingle(feed.MatchId);
            Feed _matchFeed = new Feed() 
            {
                Description = feed.Description,
                CreatedAt = feed.CreatedAt,
                MatchId = feed.MatchId
            };

            _match.Feeds.Add(_matchFeed);

            _matchRepository.Commit();

            FeedViewModel _feedVM = Mapper.Map<Feed, FeedViewModel>(_matchFeed);

            await m_HubContext.Clients.Group(feed.MatchId.ToString()).InvokeAsync("AddFeed", _feedVM);
        }

    }
}

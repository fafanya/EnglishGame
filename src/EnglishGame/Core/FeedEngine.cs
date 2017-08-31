using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using EnglishGame.Data.Abstract;
using EnglishGame.Models;
using Microsoft.Extensions.Logging;
using RecurrentTasks;
using Newtonsoft.Json;
using System.Text;

namespace EnglishGame.Core
{
    public class FeedEngine : IRunnable
    {
        private ILogger logger;
        IMatchRepository _matchRepository;
        public FeedEngine(IMatchRepository matchRepository,
                          ILogger<FeedEngine> logger)
        {
            this.logger = logger;
            this._matchRepository = matchRepository;
        }
        public void Run(ITask currentTask, CancellationToken cancellationToken)
        {
            var msg = string.Format("Run at: {0}", DateTimeOffset.Now);
            logger.LogDebug(msg);
            UpdateScore();
        }

        private async void UpdateScore()
        {
            IEnumerable<Match> _matches = _matchRepository.GetAll();
            return;

            foreach (var match in _matches)
            {
                Random r = new Random();
                bool updateHost = r.Next(0, 2) == 1;
                int points = r.Next(2, 4);
                bool _matchEnded = false;

                if (updateHost)
                    match.HostScore += points;
                else
                    match.GuestScore += points;

                MatchScore score = new MatchScore()
                {
                    HostScore = match.HostScore,
                    GuestScore = match.GuestScore
                };

                if (score.HostScore > 80 || score.GuestScore > 76)
                {
                    score.HostScore = 0;
                    score.GuestScore = 0;
                    _matchEnded = true;
                }

                // Update Score for all clients
                using (var client = new HttpClient())
                {
                    var json = JsonConvert.SerializeObject(score);
                    var stringContent = new StringContent(json, Encoding.UTF8 , "application/json");
                    await client.PutAsync(Startup.API_URL + "matches/" + match.Id, stringContent);
                }

                // Update Feed for subscribed only clients


                FeedViewModel _feed = new FeedViewModel()
                {
                    MatchId = match.Id,
                    Description = _matchEnded == false ? 
                    (points + " points for " + (updateHost == true ? match.Host : match.Guest) + "!") :
                    "Match started",
                    CreatedAt = DateTime.Now
                };
                using (var client = new HttpClient())
                {
                    var json = JsonConvert.SerializeObject(_feed);
                    var stringContent = new StringContent(json, Encoding.UTF8, "application/json");
                    await client.PostAsync(Startup.API_URL + "feeds", stringContent);
                }
            }
        }
    }
}
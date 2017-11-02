using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using EnglishGame.Models;
using System;

namespace EnglishGame.Hubs
{
    public class Broadcaster : Hub<IBroadcaster>
    {
        public override Task OnConnectedAsync()
        {
            // Set connection id for just connected client only
            return Clients.Client(Context.ConnectionId).SetConnectionId(Context.ConnectionId);
        }

        // Server side methods called from client
        public Task Subscribe(int matchId)
        {
            return Groups.AddAsync(Context.ConnectionId, matchId.ToString());
        }

        public Task Unsubscribe(int matchId)
        {
            return Groups.RemoveAsync(Context.ConnectionId, matchId.ToString());
        }
    }

    // Client side methods to be invoked by Broadcaster Hub
    public interface IBroadcaster
    {
        Task Send(string message);
        Task SetConnectionId(string connectionId);
        Task MessageReceived(string msg);
    }
}
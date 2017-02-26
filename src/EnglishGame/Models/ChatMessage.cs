using System;

namespace EnglishGame.Models
{
    public class ChatMessage
    {
        public int MatchId { get; set; }
        public string Text { get; set; }
        public DateTime CreatedAt {get; set;}
    }
}

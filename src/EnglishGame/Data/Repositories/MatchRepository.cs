using EnglishGame.Data.Abstract;
using EnglishGame.Models;

namespace EnglishGame.Data.Repositories
{
    public class MatchRepository : EntityBaseRepository<Match>, IMatchRepository
    {
        public MatchRepository(LiveGameContext context)
            : base(context)
        { }
    }
}

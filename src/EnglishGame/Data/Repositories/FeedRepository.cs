using EnglishGame.Data.Abstract;
using EnglishGame.Models;

namespace EnglishGame.Data.Repositories
{
    public class FeedRepository : EntityBaseRepository<Feed>, IFeedRepository
    {
        public FeedRepository(LiveGameContext context)
            : base(context)
        { }
    }
}

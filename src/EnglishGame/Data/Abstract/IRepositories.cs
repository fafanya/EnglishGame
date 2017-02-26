using EnglishGame.Models;

namespace EnglishGame.Data.Abstract
{
    public interface IMatchRepository : IEntityBaseRepository<Match> { }

    public interface IFeedRepository : IEntityBaseRepository<Feed> { }

}

using Movie_Tracker.Models;

namespace Movie_Tracker.Interfaces
{
    public interface IMovieRepository
    {
        List<Movie> GetAllMovies();
        List<Movie> GetFavorites();
    }
}

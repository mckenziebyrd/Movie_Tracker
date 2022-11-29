using Microsoft.Data.SqlClient;
using Movie_Tracker.Interfaces;
using Movie_Tracker.Models;

namespace Movie_Tracker.Repositories
{
    public class MovieRepository : IMovieRepository

    {
        private readonly IConfiguration _config;

        // The constructor accepts an IConfiguration object as a parameter. This class comes from the ASP.NET framework and is useful for retrieving things out of the appsettings.json file like connection strings.
        public MovieRepository(IConfiguration config)
        {
            _config = config;
        }
        public SqlConnection Connection
        {
            get
            {
                return new SqlConnection(_config.GetConnectionString("DefaultConnection"));
            }
        }

        public List<Movie> GetAllMovies()
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                SELECT *
                                FROM movie
                            ";
                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        List<Movie> movies = new List<Movie>();
                        while (reader.Read())
                        {
                            Movie movie = new Movie()
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("Id")),
                                UserId = reader.GetInt32(reader.GetOrdinal("userId")),
                                Title = reader.GetString(reader.GetOrdinal("title")),
                                Year = reader.GetInt32(reader.GetOrdinal("year")),
                                Watched = reader.GetBoolean(reader.GetOrdinal("watched")),
                                Favorite = reader.GetBoolean(reader.GetOrdinal("favorite")),
                                Comments = reader.GetString(reader.GetOrdinal("comments")),
                                Poster = reader.GetString(reader.GetOrdinal("poster"))

                            };
                            movies.Add(movie);
                        }
                        return movies;
                    }
                }
            }

        }
    }
}

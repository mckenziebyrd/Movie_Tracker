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

        public Movie GetMovieById(int Id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                SELECT *
                                FROM movie
                                WHERE Id = @Id
                            ";
                    cmd.Parameters.AddWithValue("@Id", Id);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                       if (reader.Read()) 
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

                            return movie;
                        }
                        else
                        {
                            return null;
                        }
                    }
                }
            }

        }

        public List<Movie> GetFavorites()
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                SELECT *
                                FROM movie
                                WHERE favorite=1
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
        public List<Movie> GetWatched()
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                SELECT *
                                FROM movie
                                WHERE watched=1
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
        public List<Movie> GetUnwatched()
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                SELECT *
                                FROM movie
                                WHERE watched=0
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

        public void AddMovie(Movie movie)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                               INSERT INTO movie (
                                    UserId,   
                                    Title,
                                    Year,
                                    Watched,
                                    Favorite,
                                    Comments,
                                    Poster)
                              OUTPUT INSERTED.ID
                              VALUES (
                                    @UserId,
                                    @Title,
                                    @Year,
                                    @Watched, 
                                    @Favorite,
                                    @Comments,
                                    @Poster)
                            ";
                    cmd.Parameters.AddWithValue("@UserId", movie.UserId);
                    cmd.Parameters.AddWithValue("@Title", movie.Title);
                    cmd.Parameters.AddWithValue("@Year", movie.Year);
                    cmd.Parameters.AddWithValue("@Watched", movie.Watched);
                    cmd.Parameters.AddWithValue("@Favorite", movie.Favorite);
                    cmd.Parameters.AddWithValue("@Comments", movie.Comments);
                    cmd.Parameters.AddWithValue("@Poster", movie.Poster);

                    int Id = (int)cmd.ExecuteScalar();
                    movie.Id = Id;

                }
            }
        }

        public int EditMovie(int Id, Movie movie)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                UPDATE [dbo].[movie]
                                SET
                                Title = @Title,
                                [Year] = @Year,
                                Watched = @Watched,
                                Favorite = @Favorite,
                                Comments = @Comments
                                WHERE Id = @Id
                            ";
                    cmd.Parameters.AddWithValue("@Id", Id);
                    cmd.Parameters.AddWithValue("@Title", movie.Title);
                    cmd.Parameters.AddWithValue("@Year", movie.Year);
                    cmd.Parameters.AddWithValue("@Watched", movie.Watched);
                    cmd.Parameters.AddWithValue("@Favorite", movie.Favorite);
                    cmd.Parameters.AddWithValue("@Comments", movie.Comments);

                    return cmd.ExecuteNonQuery();
                }
            }
        }

        public void DeleteMovie(int Id, int UserId)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                DELETE FROM [movie]
                                WHERE Id = @Id
                                AND UserId = @Userid
                            ";

                    cmd.Parameters.AddWithValue("@Id", Id);
                    cmd.Parameters.AddWithValue("@Userid", UserId);

                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}

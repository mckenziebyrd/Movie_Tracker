namespace Movie_Tracker
{
    public interface IMovieService
    {
        Task<string> GetExternalAPI(string movieTitle);
    }
    public class MovieService : IMovieService
    {
        private HttpClient _httpClient;
        public MovieService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<string> GetExternalAPI(string movieTitle)
        {
            string APIURL = $"http://www.omdbapi.com/?apikey=948376b8&t={movieTitle}";
            var response = await _httpClient.GetAsync(APIURL);
            return await response.Content.ReadAsStringAsync();
        }
    }
}

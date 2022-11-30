using Microsoft.AspNetCore.Mvc;
using Movie_Tracker.Interfaces;
using Movie_Tracker.Models;
using System.Reflection.Metadata.Ecma335;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Movie_Tracker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private IMovieRepository _movieRepository;
        public MovieController(IMovieRepository movieRepository)
        {
            _movieRepository = movieRepository;
        }
        // GET: api/<MovieController>
        [HttpGet]
        public List<Movie> Get()
        {
            var returnVar = _movieRepository.GetAllMovies();
            return returnVar;
        }

        [HttpGet("favorite")]
        public List<Movie> GetFavorites()
        {
            return _movieRepository.GetFavorites();
        }

        [HttpGet("watched")]
        public List<Movie> GetWatched()
        {
            return _movieRepository.GetWatched();
        }

        [HttpGet("unwatched")]
        public List<Movie> GetUnwatched()
        {
            return _movieRepository.GetUnwatched();
        }
        // GET api/<MovieController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<MovieController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<MovieController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<MovieController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

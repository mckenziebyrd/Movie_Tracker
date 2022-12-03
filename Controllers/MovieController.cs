﻿using Microsoft.AspNetCore.Mvc;
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

        [HttpGet("{Id}")]
        public Movie Get(int Id)
        {
            return _movieRepository.GetMovieById(Id);
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
        
        // DELETE api/<MovieController>/5
        [HttpDelete("deleteMovie/{Id}/{UserId}")]
        public void Delete(int Id, int UserId)
        {
            _movieRepository.DeleteMovie(Id, UserId);
        }
    }
}

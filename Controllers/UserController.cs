using Microsoft.AspNetCore.Mvc;
using Movie_Tracker.Interfaces;
using Movie_Tracker.Models;
using Movie_Tracker.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Movie_Tracker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private IUserRepository _userRepo;
        public UserController(IUserRepository userRepo)
        {
            _userRepo = userRepo;
        }
        
        // POST api/<UserController>
        [HttpPost]
        public void Post(User user)
        {
            try
            {
                _userRepo.CreateUser(user);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }
        }
    }
}

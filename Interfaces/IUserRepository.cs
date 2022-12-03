using Movie_Tracker.Models;

namespace Movie_Tracker.Interfaces
{
    public interface IUserRepository
    {
        void CreateUser(User user);
    }
}

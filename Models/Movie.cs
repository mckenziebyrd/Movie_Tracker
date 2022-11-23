namespace Movie_Tracker.Models
{
    public class Movie
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Title { get; set; }
        public int Year { get; set; }
        public string Rated { get; set; }
        public string Genre { get; set; }
        public bool Watched { get; set; }
        public bool Favorite { get; set; }
        public string Comments { get; set; }
    }
}

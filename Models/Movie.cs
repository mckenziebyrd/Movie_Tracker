namespace Movie_Tracker.Models
{
    public class Movie
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Title { get; set; }
        public string Year { get; set; }
        public bool Watched { get; set; }
        public bool Favorite { get; set; }
        public string Comments { get; set; }       
        public string Poster { get; set; }

    }
}

namespace ShopManagement.models
{
    public class Vacancy
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public int ApplicantId { get; set; }
        
        public User Applicant { get; set; }

        public string Description { get; set; }
    }
}
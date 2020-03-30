namespace ShopManagement.models
{
    public class VacancyApplicant
    {
        public int Id { get; set; }

        public int ApplicantUserId { get; set; }

        public User ApplicantUser { get; set; }

        public int VacancyId { get; set; }

        public Vacancy Vacancy { get; set; }
    }
}
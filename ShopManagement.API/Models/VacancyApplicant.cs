namespace ShopManagement.models
{
    public class VacancyApplicant
    {
        public int Id { get; set; }

        public int ApplicantId { get; set; }

        public Applicant Applicant { get; set; }

        public int VacancyId { get; set; }

        public Vacancy Vacancy { get; set; }
    }
}
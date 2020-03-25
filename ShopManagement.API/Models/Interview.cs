using System;

namespace ShopManagement.models
{
    public class Interview
    {
        public int Id { get; set; }

        public int VacancyId { get; set; }

        public Vacancy Vacancy { get; set; }

        public DateTime StartTime { get; set; }

        public DateTime EndTime { get; set; }

        public int Status { get; set; }

        public int OwnerUserId { get; set; }

        public User OwnerUser { get; set; }
    }
}
using System;

namespace ShopManagement.DTOs
{
    public class InterviewDTO
    {
        public int Id { get; set; }

        public int VacancyId { get; set; }

        public DateTime StartTime { get; set; }

        public DateTime EndTime { get; set; }

        public int Status { get; set; }

        public int OwnerUserId { get; set; }
    }
}
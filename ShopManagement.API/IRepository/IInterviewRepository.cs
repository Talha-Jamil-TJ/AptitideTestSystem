using System.Collections.Generic;
using System.Threading.Tasks;
using ShopManagement.DTOs;

namespace ShopManagement.IRepository
{
    public interface IInterviewRepository
    {
        Task<IList<InterviewDTO>> Get();
        
        Task<InterviewDTO> Get(int vacancyId);
        
        Task<InterviewDTO> Create(InterviewDTO Interview);

        Task<InterviewDTO> Update(int id, InterviewDTO Interview);

        Task Delete(int id);

        Task<bool> SaveAll();
    }
}
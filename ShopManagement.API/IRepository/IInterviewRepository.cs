using System.Collections.Generic;
using System.Threading.Tasks;
using ShopManagement.DTOs;
using ShopManagement.models;

namespace ShopManagement.IRepository
{
    public interface IInterviewRepository
    {
        Task<IList<Interview>> Get();

        Task<Interview> Get(int interviewId);

        Task Create(Interview interview);

        Task Delete(Interview interview);

        Task<bool> SaveAll();
    }
}
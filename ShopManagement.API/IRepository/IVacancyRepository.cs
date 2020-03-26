using System.Collections.Generic;
using System.Threading.Tasks;
using ShopManagement.models;

namespace ShopManagement.IRepository
{
    public interface IVacancyRepository
    {
        Task<IList<Vacancy>> Get();
        
        Task<Vacancy> Get(int vacancyId);
        
        Task Create(Vacancy vacancy);

        Task Delete(Vacancy vacancy);

        Task<bool> SaveAll();
    }
}
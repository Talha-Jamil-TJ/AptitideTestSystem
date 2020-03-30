using System.Collections.Generic;
using System.Threading.Tasks;
using ShopManagement.models;

namespace ShopManagement.IRepository
{
    public interface IVacancyApplicantRepository
    {
        Task<IList<VacancyApplicant>> Get();
        
        Task<VacancyApplicant> Get(int vacancyApplicantId);
        
        Task Create(VacancyApplicant vacancyApplicant);

        void Delete(VacancyApplicant vacancyApplicant);

        Task<bool> SaveAll();
    }
}
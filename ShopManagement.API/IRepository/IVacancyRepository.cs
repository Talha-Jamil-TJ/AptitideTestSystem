using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ShopManagement.DTOs;

namespace ShopManagement.IRepository
{
    public interface IVacancyRepository
    {
        Task<IList<VacancyDTO>> Get();
        
        Task<VacancyDTO> Get(int VacancyId);
        
        Task<VacancyDTO> Create(VacancyDTO Vacancy);

        Task<VacancyDTO> Update(int id, VacancyDTO Vacancy);

        Task Delete(int id);

        Task<bool> SaveAll();
    }
}
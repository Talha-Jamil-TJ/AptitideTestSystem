using System.Collections.Generic;
using System.Threading.Tasks;
using ShopManagement.models;

namespace ShopManagement.IRepository
{
    public interface IApplicantRepository
    {
        Task<IList<Applicant>> Get();
        
        Task<Applicant> Get(int applicantId);
        
        Task Create(Applicant applicant);

        void Delete(Applicant applicant);

        Task<bool> SaveAll();
    }
}
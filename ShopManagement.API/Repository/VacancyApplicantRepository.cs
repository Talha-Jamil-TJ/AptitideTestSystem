using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ShopManagement.IRepository;
using ShopManagement.models;

namespace ShopManagement.Repository
{
    public class VacancyApplicantRepository : IVacancyApplicantRepository
    {
        private readonly DataContext _context;

        public VacancyApplicantRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<IList<VacancyApplicant>> Get()
        {
            return await _context.VacancyApplicants.ToListAsync();
        }

        public async Task<VacancyApplicant> Get(int vacancyApplicantId)
        {
            return await _context.VacancyApplicants.FirstOrDefaultAsync(x => x.Id == vacancyApplicantId);
        }

        public async Task Create(VacancyApplicant vacancyApplicant)
        {
            await _context.VacancyApplicants.AddAsync(vacancyApplicant);
        }

        public void Delete(VacancyApplicant vacancyApplicant)
        {
            _context.VacancyApplicants.Remove(vacancyApplicant);
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}
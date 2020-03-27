using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ShopManagement.IRepository;
using ShopManagement.models;

namespace ShopManagement.Repository
{
    public class VacancyRepository : IVacancyRepository
    {
        private readonly DataContext _context;

        public VacancyRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<IList<Vacancy>> Get()
        {
            return await _context.Vacancies.ToListAsync();
        }

        public async Task<Vacancy> Get(int vacancyId)
        {
            return await _context.Vacancies.FirstOrDefaultAsync(x => x.Id == vacancyId);
        }

        public async Task Create(Vacancy vacancy)
        {
            await _context.Vacancies.AddAsync(vacancy);
        }

        public void Delete(Vacancy vacancy)
        {
            _context.Vacancies.Remove(vacancy);
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}
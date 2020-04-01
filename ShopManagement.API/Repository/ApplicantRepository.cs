using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ShopManagement.IRepository;
using ShopManagement.models;

namespace ShopManagement.Repository
{
    public class ApplicantRepository : IApplicantRepository
    {
        private readonly DataContext _context;

        public ApplicantRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<IList<Applicant>> Get()
        {
            return await _context.Applicants.ToListAsync();
        }

        public async Task<Applicant> Get(int applicantId)
        {
            return await _context.Applicants.FirstOrDefaultAsync(x => x.Id == applicantId);
        }

        public async Task Create(Applicant applicant)
        {
            await _context.Applicants.AddAsync(applicant);
        }

        public void Delete(Applicant applicant)
        {
            _context.Applicants.Remove(applicant);
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using ShopManagement.IRepository;
using ShopManagement.models;

namespace ShopManagement.Repository
{
    public class InterviewRepository : IInterviewRepository
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public InterviewRepository(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IList<Interview>> Get()
        {
            return await _context.Interviews.ToListAsync();
        }

        public async Task<Interview> Get(int interviewId)
        {
            return await _context.Interviews.FirstOrDefaultAsync(x => x.Id == interviewId);
        }

        public async Task Create(Interview Interview)
        {
            await _context.Interviews.AddAsync(Interview);
        }

        public void Delete(Interview Interview)
        {
            _context.Interviews.Remove(Interview);
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}
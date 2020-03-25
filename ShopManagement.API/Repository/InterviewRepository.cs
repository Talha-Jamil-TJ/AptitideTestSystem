using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using ShopManagement.DTOs;
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

        public async Task<IList<InterviewDTO>> Get()
        {
            var vacancies = await _context.Interviews.ToListAsync();

            return _mapper.Map<IList<InterviewDTO>>(vacancies);
        }

        public async Task<InterviewDTO> Get(int interviewId)
        {
            var interview = await _context.Interviews.FirstOrDefaultAsync(x => x.Id == interviewId);

            return _mapper.Map<InterviewDTO>(interview);
        }

        public async Task<InterviewDTO> Create(InterviewDTO Interview)
        {
            var thisInterview = _mapper.Map<Interview>(Interview);

            await _context.Interviews.AddAsync(thisInterview);

            await _context.SaveChangesAsync();

            return Interview;
        }

        public async Task<InterviewDTO> Update(int id, InterviewDTO interview)
        {
            var thisInterview = await _context.Interviews.FirstOrDefaultAsync(x => x.Id == id);

            if (thisInterview == null) throw new Exception("Interview not found");

            await _context.SaveChangesAsync();

            return _mapper.Map(thisInterview, interview);
        }

        public async Task Delete(int id)
        {
            var thisInterview = await _context.Interviews.FirstOrDefaultAsync(x => x.Id == id);

            if (thisInterview == null) throw new Exception("Interview not found");

            _context.Interviews.Remove(thisInterview);

            await _context.SaveChangesAsync();
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}
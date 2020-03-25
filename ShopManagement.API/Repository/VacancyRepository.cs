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
    public class VacancyRepository : IVacancyRepository
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public VacancyRepository(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IList<VacancyDTO>> Get()
        {
            var vacancies = await _context.Vacancies.ToListAsync();

            return _mapper.Map<IList<VacancyDTO>>(vacancies);
        }

        public async Task<VacancyDTO> Get(int vacancyId)
        {
            var vacancy = await _context.Vacancies.FirstOrDefaultAsync(x => x.Id == vacancyId);

            return _mapper.Map<VacancyDTO>(vacancy);
        }

        public async Task<VacancyDTO> Create(VacancyDTO Vacancy)
        {
            var thisVacancy = _mapper.Map<Vacancy>(Vacancy);

            await _context.Vacancies.AddAsync(thisVacancy);

            await _context.SaveChangesAsync();

            return Vacancy;
        }

        public async Task<VacancyDTO> Update(int id, VacancyDTO vacancy)
        {
            var thisVacancy = await _context.Vacancies.FirstOrDefaultAsync(x => x.Id == id);

            if (thisVacancy == null) throw new Exception("Vacancy not found");

            await _context.SaveChangesAsync();

            return _mapper.Map(thisVacancy, vacancy);
        }

        public async Task Delete(int id)
        {
            var thisVacancy = await _context.Vacancies.FirstOrDefaultAsync(x => x.Id == id);

            if (thisVacancy == null) throw new Exception("Vacancy not found");

            _context.Vacancies.Remove(thisVacancy);

            await _context.SaveChangesAsync();
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}
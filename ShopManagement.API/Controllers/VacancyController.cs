using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using ShopManagement.DTOs;
using ShopManagement.IRepository;
using ShopManagement.models;

namespace ShopManagement.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VacancyController : ControllerBase
    {
        private readonly IVacancyRepository _repo;
        private readonly IMapper _mapper;

        public VacancyController(IVacancyRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var vacancies = await _repo.Get();

            var vacanciesDto = _mapper.Map<IList<VacancyDTO>>(vacancies);

            return Ok(vacanciesDto);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var vacancy = await _repo.Get(id);

            var vacancyDto = _mapper.Map<VacancyDTO>(vacancy);

            return Ok(vacancyDto);
        }

        [HttpPost(Name = "CreateVacancy")]
        public async Task<IActionResult> Create(VacancyDTO vacancyDto)
        {
            var vacancy = _mapper.Map<Vacancy>(vacancyDto);

            await _repo.Create(vacancy);

            if (await _repo.SaveAll())
                return CreatedAtRoute("CreateVacancy", new {id = vacancy.Id}, vacancy);

            return BadRequest("creation unsuccessful");
        }

        [HttpPut]
        public async Task<IActionResult> Update(VacancyDTO vacancyDto)
        {
            var vacancy = _mapper.Map<Vacancy>(vacancyDto);

            var thisVacancy = await _repo.Get(vacancy.Id);

            if (thisVacancy == null) return BadRequest("Vacancy not found");

            if (await _repo.SaveAll())
                return NoContent();

            return BadRequest("Update unsuccessful");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var thisVacancy = await _repo.Get(id);

            if (thisVacancy == null) return BadRequest("Vacancy not found");

            await _repo.Delete(thisVacancy);

            if (await _repo.SaveAll())
                return NoContent();

            return BadRequest("Delete unsuccessful");
        }
    }
}
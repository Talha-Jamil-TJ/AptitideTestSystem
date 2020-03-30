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
    public class VacancyApplicantController : ControllerBase
    {
        private readonly IVacancyApplicantRepository _repo;
        private readonly IMapper _mapper;

        public VacancyApplicantController(IVacancyApplicantRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var vacancyApplicants = await _repo.Get();

            var vacancyApplicantsDto = _mapper.Map<IList<VacancyApplicantDTO>>(vacancyApplicants);

            return Ok(vacancyApplicantsDto);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var vacancyApplicant = await _repo.Get(id);

            var vacancyApplicantDto = _mapper.Map<VacancyApplicantDTO>(vacancyApplicant);

            return Ok(vacancyApplicantDto);
        }

        [HttpPost(Name = "CreateVacancyApplicant")]
        public async Task<IActionResult> Create(VacancyApplicantDTO vacancyApplicantDto)
        {
            var vacancyApplicant = _mapper.Map<VacancyApplicant>(vacancyApplicantDto);

            await _repo.Create(vacancyApplicant);

            if (await _repo.SaveAll())
                return CreatedAtRoute("CreateVacancyApplicant", new {id = vacancyApplicant.Id}, vacancyApplicant);

            return BadRequest("creation unsuccessful");
        }

        [HttpPut]
        public async Task<IActionResult> Update(VacancyApplicantDTO vacancyApplicantDto)
        {
            var vacancyApplicant = _mapper.Map<VacancyApplicant>(vacancyApplicantDto);

            var thisVacancyApplicant = await _repo.Get(vacancyApplicant.Id);

            if (thisVacancyApplicant == null) return BadRequest("VacancyApplicant not found");

            if (await _repo.SaveAll())
                return NoContent();

            return BadRequest("Update unsuccessful");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var thisVacancyApplicant = await _repo.Get(id);

            if (thisVacancyApplicant == null) return BadRequest("VacancyApplicant not found");

            _repo.Delete(thisVacancyApplicant);

            if (await _repo.SaveAll())
                return NoContent();

            return BadRequest("Delete unsuccessful");
        }
    }
}
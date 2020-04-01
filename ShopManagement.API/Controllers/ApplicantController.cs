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
    public class ApplicantController : ControllerBase
    {
        private readonly IApplicantRepository _repo;
        private readonly IMapper _mapper;

        public ApplicantController(IApplicantRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var applicants = await _repo.Get();

            var applicantsDto = _mapper.Map<IList<ApplicantDTO>>(applicants);

            return Ok(applicantsDto);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var applicant = await _repo.Get(id);

            var applicantDto = _mapper.Map<ApplicantDTO>(applicant);

            return Ok(applicantDto);
        }

        [HttpPost(Name = "CreateApplicant")]
        public async Task<IActionResult> Create(ApplicantDTO applicantDto)
        {
            var applicant = _mapper.Map<Applicant>(applicantDto);

            await _repo.Create(applicant);

            if (await _repo.SaveAll())
                return CreatedAtRoute("CreateApplicant", new {id = applicant.Id}, applicant);

            return BadRequest("creation unsuccessful");
        }

        [HttpPut]
        public async Task<IActionResult> Update(ApplicantDTO applicantDto)
        {
            var applicant = _mapper.Map<Applicant>(applicantDto);

            var thisApplicant = await _repo.Get(applicant.Id);

            if (thisApplicant == null) return BadRequest("Applicant not found");

            if (await _repo.SaveAll())
                return NoContent();

            return BadRequest("Update unsuccessful");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var thisApplicant = await _repo.Get(id);

            if (thisApplicant == null) return BadRequest("Applicant not found");

            _repo.Delete(thisApplicant);

            if (await _repo.SaveAll())
                return NoContent();

            return BadRequest("Delete unsuccessful");
        }
    }
}
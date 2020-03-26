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
    public class InterviewController : ControllerBase
    {
        private readonly IInterviewRepository _repo;
        private readonly IMapper _mapper;

        public InterviewController(IInterviewRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var interviews = await _repo.Get();

            var interviewsDto = _mapper.Map<IList<InterviewDTO>>(interviews);

            return Ok(interviewsDto);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var interview = await _repo.Get(id);

            var interviewDto = _mapper.Map<InterviewDTO>(interview);

            return Ok(interviewDto);
        }

        [HttpPost(Name = "CreateInterview")]
        public async Task<IActionResult> Create(InterviewDTO interviewDto)
        {
            var interview = _mapper.Map<Interview>(interviewDto);

            await _repo.Create(interview);

            if (await _repo.SaveAll())
                return CreatedAtRoute("CreateInterview", new {id = interview.Id}, interview);

            return BadRequest("creation unsuccessful");
        }

        [HttpPut]
        public async Task<IActionResult> Update(InterviewDTO interviewDto)
        {
            var interview = _mapper.Map<Interview>(interviewDto);

            var thisInterview = await _repo.Get(interview.Id);

            if (thisInterview == null) return BadRequest("Interview not found");

            if (await _repo.SaveAll())
                return NoContent();

            return BadRequest("Update unsuccessful");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var thisInterview = await _repo.Get(id);

            if (thisInterview == null) return BadRequest("Interview not found");

            await _repo.Delete(thisInterview);

            if (await _repo.SaveAll())
                return NoContent();

            return BadRequest("Delete unsuccessful");
        }
    }
}
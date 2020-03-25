using System.Threading.Tasks;
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

        public InterviewController(IInterviewRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var interviews = await _repo.Get();

            return Ok(interviews);
        }

        [HttpGet]
        public async Task<IActionResult> Get(int id)
        {
            var interview = await _repo.Get(id);

            return Ok(interview);
        }

        [HttpPost(Name = "CreateInterview")]
        public async Task<IActionResult> Create(InterviewDTO interviewDto)
        {
            var interview = await _repo.Create(interviewDto);

            if (await _repo.SaveAll())
                return CreatedAtRoute("CreateInterview", new {id = interview.Id}, interview);

            return BadRequest("creation unsuccessful");
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, InterviewDTO interviewDto)
        {
            await _repo.Update(id, interviewDto);

            if (await _repo.SaveAll())
                return NoContent();

            return BadRequest("Update unsuccessful");
        }

        [HttpDelete]
        public async Task<IActionResult> Delete(int id)
        {
            await _repo.Delete(id);

            if (await _repo.SaveAll())
                return NoContent();

            return BadRequest("Delete unsuccessful");
        }
    }
}
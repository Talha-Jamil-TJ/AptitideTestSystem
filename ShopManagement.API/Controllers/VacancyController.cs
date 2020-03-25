using System.Threading.Tasks;
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

        public VacancyController(IVacancyRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var vacancys = await _repo.Get();

            return Ok(vacancys);
        }

        [HttpGet]
        public async Task<IActionResult> Get(int id)
        {
            var vacancy = await _repo.Get(id);

            return Ok(vacancy);
        }

        [HttpPost(Name = "CreateVacancy")]
        public async Task<IActionResult> Create(VacancyDTO vacancyDto)
        {
            var vacancy = await _repo.Create(vacancyDto);

            if (await _repo.SaveAll())
                return CreatedAtRoute("CreateVacancy", new {id = vacancy.Id}, vacancy);

            return BadRequest("creation unsuccessful");
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, VacancyDTO vacancyDto)
        {
            await _repo.Update(id, vacancyDto);

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
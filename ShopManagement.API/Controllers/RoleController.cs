using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ShopManagement.DTOs;
using ShopManagement.IRepository;
using ShopManagement.models;

namespace ShopManagement.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RoleController : ControllerBase
    {
        private readonly IRoleRepository _repo;

        public RoleController(IRoleRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var roles = await _repo.Get();

            return Ok(roles);
        }

        [HttpGet]
        public async Task<IActionResult> Get(int id)
        {
            var role = await _repo.Get(id);

            return Ok(role);
        }

        [HttpPost(Name = "CreateRole")]
        public async Task<IActionResult> Create(RoleDTO roleDto)
        {
            var role = await _repo.Create(roleDto);

            if (await _repo.SaveAll())
                return CreatedAtRoute("CreateRole", new {id = role.Id}, role);

            return BadRequest("creation unsuccessful");
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, RoleDTO roleDto)
        {
            await _repo.Update(id, roleDto);

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
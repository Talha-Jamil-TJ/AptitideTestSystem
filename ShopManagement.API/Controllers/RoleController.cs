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
    public class RoleController : ControllerBase
    {
        private readonly IRoleRepository _repo;
        private readonly IMapper _mapper;

        public RoleController(IRoleRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var roles = await _repo.Get();

            var rolesDto = _mapper.Map<IList<RoleDTO>>(roles);

            return Ok(rolesDto);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var role = await _repo.Get(id);

            var roleDto = _mapper.Map<RoleDTO>(role);

            return Ok(roleDto);
        }

        [HttpPost(Name = "CreateRole")]
        public async Task<IActionResult> Create(RoleDTO roleDto)
        {
            var role = _mapper.Map<Role>(roleDto);

            await _repo.Create(role);

            if (await _repo.SaveAll())
                return CreatedAtRoute("CreateRole", new {id = role.Id}, role);

            return BadRequest("creation unsuccessful");
        }

        [HttpPut]
        public async Task<IActionResult> Update(RoleDTO roleDto)
        {
            var role = _mapper.Map<Role>(roleDto);

            var thisRole = await _repo.Get(role.Id);

            if (thisRole == null) return BadRequest("Role not found");

            if (await _repo.SaveAll())
                return NoContent();

            return BadRequest("Update unsuccessful");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var thisRole = await _repo.Get(id);

            if (thisRole == null) return BadRequest("Role not found");

            await _repo.Delete(thisRole);

            if (await _repo.SaveAll())
                return NoContent();

            return BadRequest("Delete unsuccessful");
        }
    }
}
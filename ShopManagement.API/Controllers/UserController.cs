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
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _repo;
        private readonly IMapper _mapper;

        public UserController(IUserRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var users = await _repo.Get();

            var usersDto = _mapper.Map<IList<UserDTO>>(users);

            return Ok(usersDto);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var user = await _repo.Get(id);

            var userDto = _mapper.Map<UserDTO>(user);

            return Ok(userDto);
        }

        [HttpPost(Name = "CreateUser")]
        public async Task<IActionResult> Create(UserDTO userDto)
        {
            var user = _mapper.Map<User>(userDto);

            await _repo.Create(user);

            if (await _repo.SaveAll())
                return CreatedAtRoute("CreateUser", new {id = user.Id}, user);

            return BadRequest("creation unsuccessful");
        }

        [HttpPut]
        public async Task<IActionResult> Update(UserDTO userDto)
        {
            var user = _mapper.Map<User>(userDto);

            var thisUser = await _repo.Get(user.Id);

            if (thisUser == null) return BadRequest("User not found");

            if (await _repo.SaveAll())
                return NoContent();

            return BadRequest("Update unsuccessful");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var thisUser = await _repo.Get(id);

            if (thisUser == null) return BadRequest("User not found");

            _repo.Delete(thisUser);

            if (await _repo.SaveAll())
                return NoContent();

            return BadRequest("Delete unsuccessful");
        }
    }
}
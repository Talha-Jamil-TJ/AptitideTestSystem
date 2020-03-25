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
    public class RoleRepository : IRoleRepository
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public RoleRepository(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IList<RoleDTO>> Get()
        {
            var roles = await _context.Roles.ToListAsync();

            return _mapper.Map<IList<RoleDTO>>(roles);
        }

        public async Task<RoleDTO> Get(int roleId)
        {
            var role = await _context.Roles.FirstOrDefaultAsync(x => x.Id == roleId);

            return _mapper.Map<RoleDTO>(role);
        }

        public async Task<RoleDTO> Create(RoleDTO role)
        {
            var thisRole = _mapper.Map<Role>(role);

            await _context.Roles.AddAsync(thisRole);

            await _context.SaveChangesAsync();

            return role;
        }

        public async Task<RoleDTO> Update(int id, RoleDTO role)
        {
            var thisRole = await _context.Roles.FirstOrDefaultAsync(x => x.Id == id);

            if (thisRole == null) throw new Exception("Role not found");

            var mappedRole = _mapper.Map(thisRole, role);

            await _context.SaveChangesAsync();

            return mappedRole;
        }

        public async Task Delete(int id)
        {
            var thisRole = await _context.Roles.FirstOrDefaultAsync(x => x.Id == id);

            if (thisRole == null) throw new Exception("Role not found");

            _context.Roles.Remove(thisRole);

            await _context.SaveChangesAsync();
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}
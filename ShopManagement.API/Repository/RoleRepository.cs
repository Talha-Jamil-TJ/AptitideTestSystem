using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ShopManagement.IRepository;
using ShopManagement.models;

namespace ShopManagement.Repository
{
    public class RoleRepository : IRoleRepository
    {
        private readonly DataContext _context;

        public RoleRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<IList<Role>> Get()
        {
            return await _context.Roles.ToListAsync();
        }

        public async Task<Role> Get(int roleId)
        {
            return await _context.Roles.FirstOrDefaultAsync(x => x.Id == roleId);
        }

        public async Task Create(Role role)
        {
            await _context.Roles.AddAsync(role);
        }

        public async Task Delete(Role role)
        {
            _context.Roles.Remove(role);
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}
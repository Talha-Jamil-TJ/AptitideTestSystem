using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ShopManagement.IRepository;
using ShopManagement.models;

namespace ShopManagement.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext _context;

        public UserRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<IList<User>> Get()
        {
            return await _context.Users.ToListAsync();
        }

        public async Task<User> Get(int userId)
        {
            return await _context.Users.FirstOrDefaultAsync(x => x.Id == userId);
        }

        public async Task Create(User user)
        {
            await _context.Users.AddAsync(user);
        }

        public void Delete(User user)
        {
            _context.Users.Remove(user);
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}
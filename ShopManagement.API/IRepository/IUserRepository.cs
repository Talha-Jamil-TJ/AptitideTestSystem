using System.Collections.Generic;
using System.Threading.Tasks;
using ShopManagement.models;

namespace ShopManagement.IRepository
{
    public interface IUserRepository
    {
        Task<IList<User>> Get();
        
        Task<User> Get(int userId);
        
        Task Create(User user);

        void Delete(User user);

        Task<bool> SaveAll();
    }
}
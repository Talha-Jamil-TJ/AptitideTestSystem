using System.Collections.Generic;
using System.Threading.Tasks;
using ShopManagement.models;

namespace ShopManagement.IRepository
{
    public interface IRoleRepository
    {
        Task<IList<Role>> Get();
        
        Task<Role> Get(int roleId);
        
        Task Create(Role role);

        Task Delete(Role role);

        Task<bool> SaveAll();
    }
}
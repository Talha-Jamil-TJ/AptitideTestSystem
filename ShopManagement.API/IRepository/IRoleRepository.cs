using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ShopManagement.DTOs;

namespace ShopManagement.IRepository
{
    public interface IRoleRepository
    {
        Task<IList<RoleDTO>> Get();
        
        Task<RoleDTO> Get(int roleId);
        
        Task<RoleDTO> Create(RoleDTO role);

        Task<RoleDTO> Update(int id, RoleDTO role);

        Task Delete(int id);

        Task<bool> SaveAll();
    }
}
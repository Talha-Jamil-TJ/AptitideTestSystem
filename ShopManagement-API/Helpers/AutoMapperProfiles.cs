using AutoMapper;
using ShopManagement.DTOs;
using ShopManagement.models;

namespace ShopManagement.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            // To
            CreateMap<User, UserForLoginDTO>();
            CreateMap<User, UserForRegisterDTO>();

            CreateMap<Role, RoleDTO>();
            
            // From
            CreateMap<UserForLoginDTO, User>();
            CreateMap<UserForRegisterDTO, User>();

            CreateMap<RoleDTO, Role>();
        }
    }
}
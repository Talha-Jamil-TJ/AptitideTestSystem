﻿using AutoMapper;
using ShopManagement.DTOs;
using ShopManagement.models;

namespace ShopManagement.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            // To DTO
            CreateMap<User, UserForLoginDTO>();

            CreateMap<User, UserForRegisterDTO>();

            CreateMap<Role, RoleDTO>();

            CreateMap<Role, RoleDTO>();

            // From DTO
            CreateMap<UserForLoginDTO, User>();

            CreateMap<UserForRegisterDTO, User>();

            CreateMap<RoleDTO, Role>();

            CreateMap<RoleDTO, Role>();

            /* ForMember(x => x.Id,
                opt => opt.Ignore()) */
        }
    }
}
using AutoMapper;
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

            CreateMap<User, UserDTO>();

            CreateMap<User, UserForRegisterDTO>();

            CreateMap<Role, RoleDTO>();

            CreateMap<Vacancy, VacancyDTO>();

            CreateMap<VacancyApplicant, VacancyApplicantDTO>();

            CreateMap<Interview, InterviewDTO>();

            // From DTO
            CreateMap<UserForLoginDTO, User>();

            CreateMap<UserForRegisterDTO, User>();

            CreateMap<UserDTO, User>();

            CreateMap<RoleDTO, Role>();

            CreateMap<VacancyDTO, Vacancy>();

            CreateMap<VacancyApplicantDTO, VacancyApplicant>();

            CreateMap<InterviewDTO, Interview>();

            /* ForMember(x => x.Id,
                opt => opt.Ignore()) */
        }
    }
}
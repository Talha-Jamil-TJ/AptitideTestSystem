using System.ComponentModel.DataAnnotations;

namespace ShopManagement.DTOs
{
    public class UserDTO
    {
        public int Id { get; set; }

        [Required] [MaxLength(255)] public string UserName { get; set; }
        
        public int RoleId { get; set; }
    }
}
using Microsoft.EntityFrameworkCore.Migrations;

namespace ShopManagement.Migrations
{
    public partial class UpdatedUserEntity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                "Address",
                "Users",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                "CNIC",
                "Users",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                "PhoneNumber",
                "Users",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                "Address",
                "Users");

            migrationBuilder.DropColumn(
                "CNIC",
                "Users");

            migrationBuilder.DropColumn(
                "PhoneNumber",
                "Users");
        }
    }
}
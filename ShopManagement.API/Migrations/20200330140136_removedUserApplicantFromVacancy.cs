using Microsoft.EntityFrameworkCore.Migrations;

namespace ShopManagement.Migrations
{
    public partial class removedUserApplicantFromVacancy : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Vacancies_Users_ApplicantId",
                table: "Vacancies");

            migrationBuilder.DropIndex(
                name: "IX_Vacancies_ApplicantId",
                table: "Vacancies");

            migrationBuilder.DropColumn(
                name: "ApplicantId",
                table: "Vacancies");

            migrationBuilder.CreateIndex(
                name: "IX_Interviews_OwnerUserId",
                table: "Interviews",
                column: "OwnerUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Interviews_Users_OwnerUserId",
                table: "Interviews",
                column: "OwnerUserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Interviews_Users_OwnerUserId",
                table: "Interviews");

            migrationBuilder.DropIndex(
                name: "IX_Interviews_OwnerUserId",
                table: "Interviews");

            migrationBuilder.AddColumn<int>(
                name: "ApplicantId",
                table: "Vacancies",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Vacancies_ApplicantId",
                table: "Vacancies",
                column: "ApplicantId");

            migrationBuilder.AddForeignKey(
                name: "FK_Vacancies_Users_ApplicantId",
                table: "Vacancies",
                column: "ApplicantId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}

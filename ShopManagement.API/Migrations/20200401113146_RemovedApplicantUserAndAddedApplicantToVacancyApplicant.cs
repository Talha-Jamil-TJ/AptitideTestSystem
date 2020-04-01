using Microsoft.EntityFrameworkCore.Migrations;

namespace ShopManagement.Migrations
{
    public partial class RemovedApplicantUserAndAddedApplicantToVacancyApplicant : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_VacancyApplicants_Users_ApplicantUserId",
                table: "VacancyApplicants");

            migrationBuilder.DropIndex(
                name: "IX_VacancyApplicants_ApplicantUserId",
                table: "VacancyApplicants");

            migrationBuilder.DropColumn(
                name: "ApplicantUserId",
                table: "VacancyApplicants");

            migrationBuilder.AddColumn<int>(
                name: "ApplicantId",
                table: "VacancyApplicants",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Applicants",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true),
                    Skills = table.Column<string>(nullable: true),
                    Qualification = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Applicants", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_VacancyApplicants_ApplicantId",
                table: "VacancyApplicants",
                column: "ApplicantId");

            migrationBuilder.AddForeignKey(
                name: "FK_VacancyApplicants_Applicants_ApplicantId",
                table: "VacancyApplicants",
                column: "ApplicantId",
                principalTable: "Applicants",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_VacancyApplicants_Applicants_ApplicantId",
                table: "VacancyApplicants");

            migrationBuilder.DropTable(
                name: "Applicants");

            migrationBuilder.DropIndex(
                name: "IX_VacancyApplicants_ApplicantId",
                table: "VacancyApplicants");

            migrationBuilder.DropColumn(
                name: "ApplicantId",
                table: "VacancyApplicants");

            migrationBuilder.AddColumn<int>(
                name: "ApplicantUserId",
                table: "VacancyApplicants",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_VacancyApplicants_ApplicantUserId",
                table: "VacancyApplicants",
                column: "ApplicantUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_VacancyApplicants_Users_ApplicantUserId",
                table: "VacancyApplicants",
                column: "ApplicantUserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}

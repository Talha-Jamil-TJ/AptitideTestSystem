using Microsoft.EntityFrameworkCore.Migrations;

namespace ShopManagement.Migrations
{
    public partial class AddedVacancyApplicant : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "VacancyApplicants",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ApplicantUserId = table.Column<int>(nullable: false),
                    VacancyId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VacancyApplicants", x => x.Id);
                    table.ForeignKey(
                        name: "FK_VacancyApplicants_Users_ApplicantUserId",
                        column: x => x.ApplicantUserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_VacancyApplicants_Vacancies_VacancyId",
                        column: x => x.VacancyId,
                        principalTable: "Vacancies",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_VacancyApplicants_ApplicantUserId",
                table: "VacancyApplicants",
                column: "ApplicantUserId");

            migrationBuilder.CreateIndex(
                name: "IX_VacancyApplicants_VacancyId",
                table: "VacancyApplicants",
                column: "VacancyId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "VacancyApplicants");
        }
    }
}

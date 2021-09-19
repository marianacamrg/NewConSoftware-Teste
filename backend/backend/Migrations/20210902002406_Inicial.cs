using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace backend.Migrations
{
    public partial class Inicial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterDatabase()
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "PontosTuristicos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Nome = table.Column<string>(type: "varchar(80)", maxLength: 80, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Descricao = table.Column<string>(type: "varchar(100)", maxLength: 100, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Localizacao = table.Column<string>(type: "varchar(100)", maxLength: 100, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Cidade = table.Column<string>(type: "varchar(50)", maxLength: 50, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Estado = table.Column<string>(type: "varchar(50)", maxLength: 50, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    DataCadastro = table.Column<DateTime>(type: "datetime(6)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PontosTuristicos", x => x.Id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");
                migrationBuilder.InsertData(
                table: "PontosTuristicos",
                columns: new[] { "Id", "Cidade", "Descricao", "Estado", "Localizacao", "Nome", "DataCadastro" },
                values: new object[] { 1, "Hopi Hari", "Parque de diversões em SP", "SP", "Rod. dos Bandeirantes", "Valinhos", "2021-09-19 18:39:39.570000" });

                migrationBuilder.InsertData(
                    table: "PontosTuristicos",
                    columns: new[] { "Id", "Cidade", "Descricao", "Estado", "Localizacao", "Nome", "DataCadastro" },
                    values: new object[] { 2, "Morro do Careca", "Complexo Turístico", "SC", "Balneário Camboriú", "Praia dos Amores", "2021-09-19 18:20:48.680000" });
                
                migrationBuilder.InsertData(
                    table: "PontosTuristicos",
                    columns: new[] { "Id", "Cidade", "Descricao", "Estado", "Localizacao", "Nome", "DataCadastro" },
                    values: new object[] { 3, "Projeto Tamar", "O Centro Nacional de Pesquisa e Conservação de Tartarugas Marinhas e da Biodiversidade Marinha do Leste.", "SP", "R. Antônio Atanázio, 273", "Itaguá", "2021-09-02 00:25:39.680000" });

        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PontosTuristicos");
        }
    }
}

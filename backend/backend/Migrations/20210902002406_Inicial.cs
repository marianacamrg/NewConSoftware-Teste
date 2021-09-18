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
                    Localizacao = table.Column<string>(type: "varchar(50)", maxLength: 100, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Cidade = table.Column<string>(type: "varchar(100)", maxLength: 50, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Estado = table.Column<string>(type: "varchar(100)", maxLength: 50, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Descricao = table.Column<string>(type: "varchar(50)", maxLength: 100, nullable: false)
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
                columns: new[] { "Id", "Nome", "Localizacao", "Cidade", "Estado", "Descricao", "DataCadastro" },
                values: new object[] { 1, "Hopi Hari", "Rod. dos Bandeirantes, km 72", "Vinhedo", "SP", "Parque de Diversões", "2021-09-18 14:25:02.450000" });

                migrationBuilder.InsertData(
                    table: "PontosTuristicos",
                    columns: new[] { "Id", "Nome", "Localizacao", "Cidade", "Estado", "Descricao", "DataCadastro" },
                    values: new object[] { 2, "MASP", "Av. Paulista", "São Paulo", "SP", "Museu de arte de São Paulo", "2021-09-18 14:26:08.240000" });
                
                migrationBuilder.InsertData(
                    table: "PontosTuristicos",
                    columns: new[] { "Id", "Nome", "Localizacao", "Cidade", "Estado", "Descricao", "DataCadastro" },
                    values: new object[] { 3, "Cachoeira Véu das Noivas", "Av. João Pinheiro - Parque Veu das Noivas", "Poços de Caldas", "MG", "Perfeita cachoreira", "2021-09-18 00:15:07.570000" });
                
                
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PontosTuristicos");
        }
    }
}

using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    [Table("PontosTuristicos")]
    public class PontoTuristico
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "O nome é obrigatório")]
        [StringLength(80)]
        public string Nome { get; set; }

        [Required(ErrorMessage = "O descrição é obrigatório")]
        [StringLength(100)]
        public string Descricao { get; set; }

        [Required(ErrorMessage = "O localização/referencia é obrigatório")]
        [StringLength(100)]
        public string Localizacao { get; set; }

        [Required(ErrorMessage = "O cidade é obrigatório")]
        [StringLength(50)]
        public string Cidade { get; set; }

        [Required(ErrorMessage = "O estado é obrigatório")]
        [StringLength(50)]
        public string Estado { get; set; }

        public DateTime DataCadastro { get; set; }

    }
}

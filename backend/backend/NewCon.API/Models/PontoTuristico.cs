using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace NewCon.API.Models
{
    public class PontoTuristico
    {
        public int Id { get; set; }
        public string Nome { get; set; }

        [MaxLength(100, ErrorMessage = "Este campo deve conter menos que 100 catacteres")]
        public string Descricao { get; set; }
        public string Localizacao { get; set; }
        public string Cidade { get; set; }
        public string Estado { get; set; }
    }
}

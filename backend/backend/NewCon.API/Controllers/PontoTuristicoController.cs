using Microsoft.AspNetCore.Mvc;
using NewCon.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NewCon.API.Controllers
{
    [Route("controller")]
    [ApiController]
    public class PontoTuristicoController : ControllerBase
    {
        [HttpPost]
        [Route("NovoPonto")]
            public async Task<ActionResult> CriarPontoTuristico(PontoTuristico model)
            {
         
                    var novoPonto = new PontoTuristico()
                    {
                        Nome = model.Nome,
                        Descricao = model.Descricao,
                        Localizacao = model.Localizacao,
                        Cidade = model.Cidade,
                        Estado = model.Estado
                    };

            //    await _repoPontoTuristico.AddPontoTuristicoAsync(Ponto);
            //    return Resposta(true, Ponto);


            //return Resposta(false, validacao.ToString());
            return Ok("retorno para salvar");
            }
    }
}

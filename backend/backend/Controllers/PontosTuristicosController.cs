using backend.Context;
using backend.Models;
using backend.Pagination;
using backend.Repository;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class PontosTuristicosController : ControllerBase
    {
        private readonly IUnitOfWork _uof;

        public PontosTuristicosController(IUnitOfWork contexto)
        {
            _uof = contexto;
        }

        #region Paginação
        [HttpGet("paginacao")]
        public ActionResult<IEnumerable<PontoTuristico>> GetPaginacao([FromQuery] int pag=1, int reg=5 )
        {
            var produto = _uof.PontoTuristicoRepository.LocalizaPagina<PontoTuristico>(pag, reg).ToList();


            var totalDeRegistros = _uof.PontoTuristicoRepository.GetTotalRegistros();
            var numeroPaginas = ((int)Math.Ceiling((double)totalDeRegistros / reg));

            Response.Headers["X-Total-Registros"] = totalDeRegistros.ToString();
            Response.Headers["X-Numero-Paginas"] = numeroPaginas.ToString();

            return produto;

        }
        #endregion

        #region Listar Pontos Turisticos por nome
        [HttpGet("search")]
        public ActionResult<IEnumerable<PontoTuristico>> Get([FromQuery] string search)
        {
            var produto = _uof.PontoTuristicoRepository.GetPontosTuristicosPorNome(search).ToList();

            if (produto == null)
            {
                return NotFound();
            }


            return Ok(produto);
        }

        #endregion 

        #region Listar todos os produtos com paginação
        [HttpGet]
        public ActionResult<IEnumerable<PontoTuristico>> Get([FromQuery] PontoTuristicoParameters pontoTuristicoParameters)
        {
            var produto = _uof.PontoTuristicoRepository.GetPontosTuristicos(pontoTuristicoParameters);

            var metadata = new
            {
                produto.TotalCount,
                produto.PageSize,
                produto.CurrentPage,
                produto.TotalPage,
                produto.HasNext,
                produto.HasPrevious
            };

            Response.Headers.Add("X-Pagination", JsonConvert.SerializeObject(metadata));

            Response.Headers["X-Total-Registros"] = produto.TotalCount.ToString();
            Response.Headers["X-Numero-Pagina"] = produto.TotalPage.ToString();

            return produto;
            
        }
        #endregion

        #region Buscar produto por id
        [HttpGet("{id}", Name = "ObterProduto")]
        public ActionResult<PontoTuristico> Get(int id)
        {
            var produto = _uof.PontoTuristicoRepository.GetById(p => p.Id == id); //Espressão lambda

            if (produto == null)
            {
                return NotFound();
            }

            return produto;
        }

        #endregion

        #region Criar produto
        [HttpPost]
        public ActionResult Post([FromBody] PontoTuristico pontoTuristico)
        {

            _uof.PontoTuristicoRepository.Add(pontoTuristico);
            _uof.Commit();

            return new CreatedAtRouteResult("ObterProduto", new { id = pontoTuristico.Id }, pontoTuristico);
        }
        #endregion

        #region Atualizar produto
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] PontoTuristico pontoTuristico)
        {
            if (id != pontoTuristico.Id)
            {
                return BadRequest();
            }

            _uof.PontoTuristicoRepository.Update(pontoTuristico);
            _uof.Commit();

            return Ok();
        }

        #endregion

        #region Deletar produto
        [HttpDelete("{id}")]
        public ActionResult<PontoTuristico> Delete(int id)
        {
            var produto = _uof.PontoTuristicoRepository.GetById(p => p.Id == id);

            if (produto == null)
            {
                return NotFound();
            }

            _uof.PontoTuristicoRepository.Delete(produto);
            _uof.Commit();

            return produto;
        }
        #endregion
    }
}

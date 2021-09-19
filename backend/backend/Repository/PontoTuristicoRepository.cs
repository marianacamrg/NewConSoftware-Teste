using backend.Pagination;
using backend.Context;
using backend.Models;
using System.Collections.Generic;
using System.Linq;

namespace backend.Repository
{
    public class PontoTuristicoRepository : Repository<PontoTuristico>, IPontoTuristicoRepository
    {
        public PontoTuristicoRepository(AppDbContext context) : base(context)
        {

        }

        //public IEnumerable<PontoTuristico> GetProdutosPorPreco()
        //{
        //    return Get().OrderBy(c => c.DataCadastro).ToList();
        //}

        public IEnumerable<PontoTuristico> GetPontosTuristicosPorNome(string T)
        {
            return Get().Where(c => c.Nome.Contains(T) || c.Cidade.Contains(T) || c.Descricao.Contains(T) || c.Localizacao.Contains(T) || c.Estado.Contains(T)).ToList();
        }

        public PagedList<PontoTuristico> GetPontosTuristicos(PontoTuristicoParameters produtosParameters)
        {
            //return Get()
            //    .OrderBy(on => on.Nome)
            //    .Skip((produtosParameters.PageNumber - 1) * produtosParameters.PageSize)
            //    .Take(produtosParameters.PageSize)
            //    .ToList();

            return PagedList<PontoTuristico>.ToPagedList(Get().OrderByDescending(on => on.Id), 
                produtosParameters.PageNumber, produtosParameters.PageSize);
        }
    }
}

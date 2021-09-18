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

        public IEnumerable<PontoTuristico> GetPontosTuristicosPorNome(string T)
        {
            return Get().Where(c => c.Nome.Contains(T) || c.Localizacao.Contains(T) || c.Cidade.Contains(T) || c.Estado.Contains(T) || c.Descricao.Contains(T)).ToList();
        }

        public PagedList<PontoTuristico> GetPontosTuristicos(PontoTuristicoParameters produtosParameters)
        {

            return PagedList<PontoTuristico>.ToPagedList(Get().OrderByDescending(on => on.Id), 
                produtosParameters.PageNumber, produtosParameters.PageSize);
        }
    }
}

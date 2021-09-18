using backend.Models;
using backend.Pagination;
using System.Collections.Generic;

namespace backend.Repository
{
    public interface IPontoTuristicoRepository : IRepository<PontoTuristico>
    {
        PagedList<PontoTuristico> GetPontosTuristicos(PontoTuristicoParameters pontosTuristicosParameters);
        //IEnumerable<PontoTuristico> GetProdutosPorPreco();
        IEnumerable<PontoTuristico> GetPontosTuristicosPorNome(string search);
    }
}

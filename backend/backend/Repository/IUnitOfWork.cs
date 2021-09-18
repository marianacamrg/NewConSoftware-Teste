using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Repository
{
    public interface IUnitOfWork
    {
        IPontoTuristicoRepository PontoTuristicoRepository { get; }

        void Commit();
    }
}

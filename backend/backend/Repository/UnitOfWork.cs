using backend.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Repository
{
    public class UnitOfWork : IUnitOfWork
    {
        private PontoTuristicoRepository _produtoRepo;

        public AppDbContext _context;

        public IPontoTuristicoRepository PontoTuristicoRepository {
            get {
                return _produtoRepo = _produtoRepo ?? new PontoTuristicoRepository(_context);
            }
        }

        public UnitOfWork(AppDbContext context)
        {
            _context = context;
        }

        public void Commit()
        {
            _context.SaveChanges();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}

import React, { useCallback } from 'react';

import { 
  Container,
  PaginationButton,
  PaginationItem,
 } from './styled'

 interface IPagination {
  total: number,
  currentPage: number,
  pages: number[],
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  setLimit: React.Dispatch<React.SetStateAction<number>>
 }

const Pagination:React.FC<IPagination> = ({total, currentPage, pages, setCurrentPage, setLimit}) => {

  const limits = useCallback((e) => {
    setLimit(e.target.value);
    setCurrentPage(1);
  }, [setCurrentPage, setLimit]);
  
  return (
    <Container>
      <div>Total registros: {total}</div>
      <div>
        <span>Total registro por página </span>
        <select onChange={limits}>
          <option value="5">5</option>
          <option value="15">10</option>
          <option value="30">30</option>
          <option value="100">100</option>
        </select>
      </div>
      <PaginationButton>
        {currentPage > 1 && (
          <PaginationItem onClick={() => setCurrentPage(currentPage - 1)}>
            Página anterior
          </PaginationItem>
        )}
        {pages.map((page: any) => (
          <PaginationItem
            isSelect={page === currentPage}
            key={page}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </PaginationItem>
        ))}
        {currentPage < pages.length && (
          <PaginationItem onClick={() => setCurrentPage(currentPage + 1)}>
            Próxima Página
          </PaginationItem>
        )}
      </PaginationButton>
    </Container>
  )
};

export default Pagination;

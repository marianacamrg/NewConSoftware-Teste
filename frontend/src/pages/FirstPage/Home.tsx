import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import api  from "../../services/api";
import CardList from "../../components/List/List";
import Pagination from "../../components/Pagination";

import { Container, Header, InputContainer } from "./styled";



const Home: React.FC = () => {
  const [attractions, setAttractions] = useState([]);
  const [search, setSearch] = useState("");
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(5);
  const [pages, setPages] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  //#region Busca pontos turisticos e paginação
  useEffect(() => {
    const params: any = {};
    if (search.length > 1) {
      params.search = search;
      try {
        api
          .get(`/PontosTuristicos/search`, {
            params,
          })
          .then((response: { data: React.SetStateAction<never[]>; headers: { [x: string]: React.SetStateAction<number>; }; }) => {
            setAttractions(response.data);
            setTotal(response.headers["x-total-registros"])
          });
      } catch (error) {}
    } else {
      try {
        api
          .get(
            `/PontosTuristicos?PageNumber=${currentPage}&PageSize=${limit}`
          )
          .then((response: { data: React.SetStateAction<never[]>; headers: { [x: string]: React.SetStateAction<number>; }; }) => {
            setAttractions(response.data);
            setTotal(response.headers["x-total-registros"])
          });
      } catch (error) {}
    }

    const totalPages = Math.ceil(total / limit);

    const arrayPages = [];
    for (let i = 1; i <= totalPages; i++) {
      arrayPages.push(i);
    }

    setPages(arrayPages);
  }, [search, currentPage, limit, total]);
  //#endregion

  return (
    <Container>
      <Header>
      <div className="logo"><img src={process.env.PUBLIC_URL + '/logoinsta.png'} alt="logo" width="20%" height="20%" /> </div>
        <Link to="/second">Cadastrar</Link>
      </Header>
      <h2> Noun Buscas </h2>
      <h4> Procure o Ponto Turístico desejado:</h4>
      <InputContainer>
        <input
          type="search"
          className="promotion-search__input"
          placeholder="Buscar Ponto Turístico"
          value={search}
          onChange={(ev) => setSearch(ev.target.value)}
        />
      </InputContainer>

      {attractions.length > 0 ? (
        <>
          <CardList attractions={attractions} />
          <Pagination
            currentPage={currentPage}
            pages={pages}
            setCurrentPage={setCurrentPage}
            setLimit={setLimit}
            total={total}
          />
        </>
      ) : (
        <Link className="Resultado" to="/second">
          <h1>Resultado não encontrado, clique para cadastrar</h1>
          </Link>
        )}
    </Container>
  );
};

export default Home;



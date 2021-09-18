import React from 'react';
import { useState } from 'react';


import { Container, Content} from './styles'

interface ICard {
  card: any
}

const Card: React.FC<ICard> = ({ card }) => {
  const [showDetailsCard, setShowDetailsCard] = useState(false);

  return (
    <Container>
      {card.id ===showDetailsCard ? (
        <Content key={card.id}>
          <span>Nome ponto Turistico: {card.nome}</span>
          <h1>Descrição: {card.descricao}</h1>
          <h1>Localidade: {card.localizacao}</h1>
          <h1>Cidade: {card.cidade}</h1>
          <h1>Estado: {card.estado}</h1>
          <br />
          <button onClick={() => setShowDetailsCard(showDetailsCard ? 0 : card.id)}>Ocultar detalhes</button>
        </Content>

      ) : (
        <>
          <Content key={card.id}>
            <span>Nome ponto Turistico: {card.nome}</span>
            <h1>Localidade: {card.localizacao}</h1>
            <br />
            <button onClick={() => setShowDetailsCard(showDetailsCard ? 0 : card.id )}>Mostrar detalhes</button>
          </Content>
        </>
      )}
    </Container>
  )
};

export default Card;

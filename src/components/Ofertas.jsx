import React from "react";
import { styled } from "styled-components";

const Ofertas = ({ tema }) => {
  return (
    <Container tema={tema}>
      <h3>Ofertas</h3>
      <ContainerOfertas>
        <SubContainer>
          <Oferta></Oferta>
          <Oferta></Oferta>
          <Oferta></Oferta>
          <Oferta></Oferta>
          <Oferta></Oferta>
          <Oferta></Oferta>
        </SubContainer>
      </ContainerOfertas>
    </Container>
  );
};

export default Ofertas;

const Container = styled.div`
  width: 100%;
  padding: 0 1.2rem;
  margin-bottom: 10px;
  h3 {
    font-size: 1rem;
    font-weight: 500;
    color: ${(props) => (props.tema === "dark" ? "white" : "black")};
  }
`;

const ContainerOfertas = styled.div`
  width: 100%;
  display: flex;
  overflow-x: auto;
  margin-top: 10px;
`;

const SubContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
`;

const Oferta = styled.div`
  height: 10rem;
  width: 8rem;
  background: var(--Item);
  border-radius: 5px;
`;

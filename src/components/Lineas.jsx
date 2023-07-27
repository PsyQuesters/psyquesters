import React from "react";
import { styled } from "styled-components";
import { Icon } from "@iconify/react";

const Lineas = ({ tema }) => {
  const colorIconoCBD = "var(--Neon1)";
  const colorIconoTHC = "var(--Neon2)";
  return (
    <LineasContainer tema={tema}>
      <h3>Compuestos</h3>
      <ContainerCompuesto>
        <Compuesto tema={tema}>
          CBD
          <Icon
            icon="pajamas:status-health"
            className="icon"
            color={colorIconoCBD}
          />
        </Compuesto>

        <Compuesto tema={tema}>
          THC
          <Icon
            icon="pajamas:status-health"
            className="icon"
            color={colorIconoTHC}
          />
        </Compuesto>
      </ContainerCompuesto>
    </LineasContainer>
  );
};

export default Lineas;

const LineasContainer = styled.div`
  width: 100%;
  padding: 0 1.2rem;
  margin-bottom: 10px;

  h3 {
    font-size: 1rem;
    font-weight: 500;
    color: ${(props) => (props.tema === "dark" ? "white" : "black")};
  }
`;

const ContainerCompuesto = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 0;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Compuesto = styled.div`
  width: 6rem;
  height: 3rem;
  background: ${(props) =>
    props.tema === "dark" ? "var(--Item)" : "var(--Item)"};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .icon {
    font-size: 1.7rem;
    transition: 0.2s;
  }
`;

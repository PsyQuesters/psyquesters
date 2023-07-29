import React from "react";
import { styled } from "styled-components";
import { Icon } from "@iconify/react";

import {
  LineasContainer,
  ContainerCompuesto,
  Compuesto,
} from "../styles/LineasStyle";

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

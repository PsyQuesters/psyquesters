import { styled } from "styled-components";

export const ContainerNav = styled.div`
  position: fixed;
  width: 100%;
  height: 4rem;
  bottom: 0;
  background: var(--blackColor);
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #ffffff2b;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  p {
    font-size: 0.5rem;
    position: absolute;
    bottom: 13px;
  }

  .Icon {
    transform: translateY(-7px);
  }

  .catalogo {
    transform: translateY(-8px);
  }
`;

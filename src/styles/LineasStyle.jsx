import { styled } from "styled-components";

export const LineasContainer = styled.div`
  width: 100%;
  padding: 0 1.2rem;
  margin-bottom: 10px;

  h3 {
    font-size: 1rem;
    font-weight: 500;
    color: ${(props) => (props.tema === "dark" ? "white" : "black")};
  }
`;

export const ContainerCompuesto = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 0;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const Compuesto = styled.div`
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

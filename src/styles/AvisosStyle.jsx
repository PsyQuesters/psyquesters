import { styled } from "styled-components";

export const AvisosContainer = styled.div`
  width: 100%;
  padding-top: 8.5rem;
  left: 0;

  .slider {
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1.2rem 2.5rem 1.2rem;
  }

  .swiper-pagination-bullet {
    background-color: ${(props) => (props.tema === "dark" ? "white" : "black")};
  }

  .swiper-pagination-bullet-active {
    background-color: ${(props) => (props.tema === "dark" ? "white" : "black")};
  }
`;

export const AvisosBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;

  h2 {
    position: absolute;
    width: 15rem;
    margin-left: 1rem;
    font-size: 1.2rem;
    filter: drop-shadow(0 1px 3px black);
  }
  h3 {
    position: absolute;
    font-size: 1rem;
    padding: 1rem;
    text-align: center;
    color: white;
    filter: drop-shadow(0 1px 3px black);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

import React from "react";
import { Icon } from "@iconify/react";
import { styled } from "styled-components";

const Ofertas = ({ tema }) => {
  const colorIconoCBD = "var(--Neon1)";
  const colorIconoTHC = "var(--Neon2)";

  return (
    <Container tema={tema}>
      <h3>Ofertas Espaciales</h3>
      <ContainerOfertas>
        <SubContainer>
          <Oferta>
            <Favorito>
              <Icon
                icon="mdi:heart-outline"
                color="white"
                height="21"
                className="Fav"
              />
            </Favorito>
            <ImagenProducto>
              <img
                src="https://cdn.shopify.com/s/files/1/1449/5868/files/PB-NakedBar_2x_7c8ead2e-cf07-4ad5-aa3b-80aa4afefafb_900x.png?v=1588604727"
                alt=""
              />
            </ImagenProducto>
            <NombreProducto>
              <p>Pilares de la creación</p>
              <Icon
                icon="pajamas:status-health"
                className="icon"
                color={colorIconoTHC}
                width="12"
              ></Icon>
            </NombreProducto>

            <DescripcionProducto>
              <p>Snickers Veganos</p>
            </DescripcionProducto>

            <PrecioYReseña>
              <h4>$7.990</h4>
              <Reseña>
                <Icon
                  Icon
                  icon="ic:baseline-star"
                  color="#ffc700"
                  height="15"
                />
                <p>5</p>
                <Icon
                  icon="majesticons:comment-text-line"
                  height="14"
                  hFlip={true}
                />
                <p>12</p>
              </Reseña>
            </PrecioYReseña>
          </Oferta>

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
  padding-bottom: 1rem;
`;

const SubContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
`;

const Oferta = styled.div`
  height: 12rem;
  width: 10rem;
  padding: 10px;
  background: var(--Item);
  border-radius: 5px;

  .Fav {
    right: 0;
  }
`;

const Favorito = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const ImagenProducto = styled.div`
  width: 100%;
  height: 6rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const NombreProducto = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 5px;
  p {
    font-size: 0.7rem;
    font-weight: 700;
  }
`;

const DescripcionProducto = styled.div`
  width: 100%;
  p {
    font-size: 0.6rem;
  }
`;

const PrecioYReseña = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
  }
`;

const Reseña = styled.div`
  width: 45%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  p {
    font-size: 0.7rem;
  }
`;

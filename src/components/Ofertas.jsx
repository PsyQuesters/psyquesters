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
                <div>
                  <Icon
                    Icon
                    icon="ic:baseline-star"
                    color="#ffc700"
                    height="15"
                  />
                  <p>5</p>
                </div>
                <div>
                  <Icon
                    icon="majesticons:comment-text-line"
                    height="14"
                    hFlip={true}
                  />
                  <p>12</p>
                </div>
              </Reseña>
            </PrecioYReseña>
          </Oferta>

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
                src="https://th.bing.com/th/id/R.d93ca86ef38c549d6382dcbad4fe0af9?rik=kH0BuX1MMj7TBA&riu=http%3a%2f%2fwww.heladosktc.com%2fwp-content%2fuploads%2f2019%2f04%2fTRUFAS-1.png&ehk=E1Ic1UF9%2bromHlsYDuBElsa58WO7DED8nEUeslTIy6g%3d&risl=&pid=ImgRaw&r=0"
                alt=""
              />
            </ImagenProducto>
            <NombreProducto>
              <p>Cinturón de Orión</p>
              <Icon
                icon="pajamas:status-health"
                className="icon"
                color={colorIconoTHC}
                width="12"
              ></Icon>
            </NombreProducto>

            <DescripcionProducto>
              <p>Mix de Trufas</p>
            </DescripcionProducto>

            <PrecioYReseña>
              <h4>$9.990</h4>
              <Reseña>
                <div>
                  <Icon
                    Icon
                    icon="ic:baseline-star"
                    color="#ffc700"
                    height="15"
                  />
                  <p>5</p>
                </div>
                <div>
                  <Icon
                    icon="majesticons:comment-text-line"
                    height="14"
                    hFlip={true}
                  />
                  <p>12</p>
                </div>
              </Reseña>
            </PrecioYReseña>
          </Oferta>

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
                src="https://purepng.com/public/uploads/large/purepng.com-cupcakefood-cake-bakery-sweet-cupcake-941524636999yoyhu.png"
                alt=""
              />
            </ImagenProducto>
            <NombreProducto>
              <p>Alfa Centauri</p>
              <Icon
                icon="pajamas:status-health"
                className="icon"
                color={colorIconoTHC}
                width="12"
              ></Icon>
            </NombreProducto>

            <DescripcionProducto>
              <p>Pingüino Vegano</p>
            </DescripcionProducto>

            <PrecioYReseña>
              <h4>$5.990</h4>
              <Reseña>
                <div>
                  <Icon
                    Icon
                    icon="ic:baseline-star"
                    color="#ffc700"
                    height="15"
                  />
                  <p>5</p>
                </div>
                <div>
                  <Icon
                    icon="majesticons:comment-text-line"
                    height="14"
                    hFlip={true}
                  />
                  <p>12</p>
                </div>
              </Reseña>
            </PrecioYReseña>
          </Oferta>

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
                src="https://th.bing.com/th/id/R.c65c3f9dff800630318c85059d12aba8?rik=c6PlG6E9rkNFaQ&pid=ImgRaw&r=0&sres=1&sresct=1"
                alt=""
              />
            </ImagenProducto>
            <NombreProducto>
              <p>0° Kelvin</p>
              <Icon
                icon="pajamas:status-health"
                className="icon"
                color={colorIconoTHC}
                width="12"
              ></Icon>
            </NombreProducto>

            <DescripcionProducto>
              <p>Galleta Helada</p>
            </DescripcionProducto>

            <PrecioYReseña>
              <h4>$7.990</h4>
              <Reseña>
                <div>
                  <Icon
                    Icon
                    icon="ic:baseline-star"
                    color="#ffc700"
                    height="15"
                  />
                  <p>5</p>
                </div>
                <div>
                  <Icon
                    icon="majesticons:comment-text-line"
                    height="14"
                    hFlip={true}
                  />
                  <p>12</p>
                </div>
              </Reseña>
            </PrecioYReseña>
          </Oferta>

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
                src="https://th.bing.com/th/id/R.6d5baf6a867ce358686573d48c010d83?rik=%2ffMpMiUFAykapA&pid=ImgRaw&r=0"
                alt=""
              />
            </ImagenProducto>
            <NombreProducto>
              <p>Cooper</p>
              <Icon
                icon="pajamas:status-health"
                className="icon"
                color={colorIconoTHC}
                width="12"
              ></Icon>
            </NombreProducto>

            <DescripcionProducto>
              <p>Queque de chocolate plátano</p>
            </DescripcionProducto>

            <PrecioYReseña>
              <h4>$7.990</h4>
              <Reseña>
                <div>
                  <Icon
                    Icon
                    icon="ic:baseline-star"
                    color="#ffc700"
                    height="15"
                  />
                  <p>5</p>
                </div>
                <div>
                  <Icon
                    icon="majesticons:comment-text-line"
                    height="14"
                    hFlip={true}
                  />
                  <p>12</p>
                </div>
              </Reseña>
            </PrecioYReseña>
          </Oferta>
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
  display: flex;
  justify-content: space-between;
  flex-direction: column;

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
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  p {
    font-size: 0.7rem;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
`;

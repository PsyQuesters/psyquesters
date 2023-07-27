import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { styled } from "styled-components";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const Avisos = ({ tema }) => {
  return (
    <AvisosContainer tema={tema}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="slider">
          <AvisosBox>
            <h3>
              Senderos Psicodélicos: <br /> Explora la ciudad - Encuentra los
              stickers - Desbloquea recompensas
            </h3>
            <img
              src="https://image.lexica.art/full_jpg/668a983c-b78e-40cd-9bda-296c8d558395"
              alt=""
            />
          </AvisosBox>
        </SwiperSlide>

        <SwiperSlide className="slider">
          <AvisosBox>
            <h2>35% de descuento productos CBD</h2>
            <img
              src="https://mbmarcobeteta.com/wp-content/uploads/2021/06/shutterstock_1394402621-scaled.jpg"
              alt=""
            />
          </AvisosBox>
        </SwiperSlide>

        <SwiperSlide className="slider">
          <AvisosBox>
            <h2>35% de descuento productos CBD</h2>
            <img
              src="https://mbmarcobeteta.com/wp-content/uploads/2021/06/shutterstock_1394402621-scaled.jpg"
              alt=""
            />
          </AvisosBox>
        </SwiperSlide>
      </Swiper>
    </AvisosContainer>
  );
};

export default Avisos;

const AvisosContainer = styled.div`
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

const AvisosBox = styled.div`
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

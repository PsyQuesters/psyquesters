import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { styled } from "styled-components";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { AvisosContainer, AvisosBox } from "../styles/AvisosStyle";

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

        {/* <SwiperSlide className="slider">
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
        </SwiperSlide> */}
      </Swiper>
    </AvisosContainer>
  );
};

export default Avisos;

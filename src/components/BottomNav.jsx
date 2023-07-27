import React from "react";
import { Icon } from "@iconify/react";
import { styled } from "styled-components";

const BottomNav = ({ tema }) => {
  return (
    <ContainerNav>
      <Button>
        <Icon
          icon="fluent:book-pulse-24-regular"
          color="white"
          height="20"
          className="Icon"
        />
        <p>Recetas</p>
      </Button>

      <Button>
        <Icon icon="ps:chat" color="white" height="18" className="Icon" />
        <p>Chatbot</p>
      </Button>

      <Button>
        <Icon
          icon="mdi:weed"
          color="white"
          height="32"
          className="Icon catalogo"
        />
        <p>Catálogo</p>
      </Button>

      <Button>
        <Icon
          icon="mdi:heart-outline"
          color="white"
          height="21"
          className="Icon"
        />
        <p>Favoritos</p>
      </Button>

      <Button>
        <Icon
          icon="iconoir:profile-circle"
          color="white"
          height="21"
          className="Icon"
        />
        <p>Perfil</p>
      </Button>
    </ContainerNav>
  );
};

export default BottomNav;

const ContainerNav = styled.div`
  position: fixed;
  width: 100%;
  height: 4rem;
  bottom: 0;
  background: var(--blackColor);
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Button = styled.div`
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

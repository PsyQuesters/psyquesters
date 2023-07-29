import React from "react";
import { Icon } from "@iconify/react";
import { styled } from "styled-components";

import { ContainerNav, Button } from "../styles/BottomNavStyle";

const BottomNav = ({ tema }) => {
  return (
    <ContainerNav>
      <Button>
        <Icon
          icon="game-icons:steelwing-emblem"
          color="white"
          height="20"
          className="Icon"
        />
        <p>Ranking</p>
      </Button>

      <Button>
        <Icon
          icon="game-icons:burning-book"
          color="white"
          height="20"
          className="Icon"
        />
        <p>Colecciones</p>
      </Button>

      <Button>
        <Icon
          icon="game-icons:double-ringed-orb"
          color="white"
          height="20"
          className="Icon catalogo"
        />
        <p>PsyQuests</p>
      </Button>

      <Button>
        <Icon
          icon="game-icons:bolt-shield"
          color="white"
          height="20"
          className="Icon"
        />
        <p>Facciones</p>
      </Button>

      <Button>
        <Icon
          icon="game-icons:rear-aura"
          color="white"
          height="20"
          className="Icon"
        />
        <p>Perfil</p>
      </Button>
    </ContainerNav>
  );
};

export default BottomNav;

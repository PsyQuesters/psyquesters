import React from "react";
import { styled } from "styled-components";
import { Icon } from "@iconify/react";

const SearchBar = () => {
  return (
    <SearchBarStyled>
      <Icon
        icon="ion:search"
        style={{
          fontSize: "1rem",
          marginRight: "5px",
        }}
      />
      Buscar su cosita por ahí
    </SearchBarStyled>
  );
};

export default SearchBar;

const SearchBarStyled = styled.div`
  width: calc(100% - 2.4rem);
  height: 2.2rem;
  border-radius: 30px;
  background: #1b1b1b;
  position: absolute;
  top: 5.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  padding: 0 1rem;
  font-size: 0.8rem;
  color: #9c9c9c;
`;

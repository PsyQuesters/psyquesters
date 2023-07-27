import React from "react";
import SearchBar from "../components/SearchBar";
import Avisos from "../components/Avisos";
import Lineas from "../components/Lineas";
import Ofertas from "../components/Ofertas";

const Home = ({ tema }) => {
  return (
    <div>
      <SearchBar></SearchBar>

      <Avisos tema={tema}></Avisos>

      <Lineas tema={tema}></Lineas>

      <Ofertas tema={tema}></Ofertas>
    </div>
  );
};

export default Home;

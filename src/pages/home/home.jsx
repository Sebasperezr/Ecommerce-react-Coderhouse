import React from "react";
import "./home.css";
import ItemListContainer from "../itemListContainer/ItemListContainer";

const Home = () => {
  return (
    <>
      <div>
        <div className="content-title">
          {" "}
          <h2 className="title">Bienvenido a Morita</h2>
        </div>
        <div className="content-subtitle">
          {" "}
          <h3 className="subtitle">Tienda Virtual </h3>
        </div>
      </div>
      <div>
        <ItemListContainer />
      </div>
    </>
  );
};

export default Home;

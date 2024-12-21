import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";

// Crea el componente `Home` con los componentes correctamente capitalizados
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <Jumbotron />
        <div className="row">
        <div className="col-12 col-sm-6 col-md-3">
            <Card />
          </div>
        <div className="col-12 col-sm-6 col-md-3">
            <Card />
          </div>
        <div className="col-12 col-sm-6 col-md-3">
            <Card />
          </div>
        <div className="col-12 col-sm-6 col-md-3">
            <Card />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;



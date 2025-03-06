import React from "react";
import ParallaxBubble from "./components/ParallaxBubble";
import Carrousel from "./components/Carrousel";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <MainContainer />


      <div className="container">
        <div className="background-shapes">
          <ParallaxBubble />
          <div className="static-shapes"></div>
        </div>

        <section id="technologies" className="section container-carrossel">
          <h2>Mes technologies</h2>
          <Carrousel />
        </section>
        <footer className="footer">
          <p>© 2024 Elodie Marsac. Tous droits réservés.</p>
        </footer>
      </div>
    </>
  );
};

export default App;

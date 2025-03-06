import React from "react";
import ParallaxBubble from "../components/ParallaxBubble";
import Carrousel from "../components/Carrousel";
import "../styles/MainContainer.scss";


const MainContainer = () => {
    return (
        <main className="main-container">
            <section className="banner">
                <div className="banner-text">
                    <h1>Porfolio</h1>
                    <h2>Web Developper</h2>
                </div>
                <div className="banner-image">
                    <img src="photo_detouree-3.png" alt="Elodie Marsac" />
                </div>
            </section>


            <section className="container">
                <div className="background-shapes">
                    <ParallaxBubble />
                    <div className="static-shapes"></div>
                </div>

                <article id="technologies" className="section container-carrossel">
                    <h2>Mes technologies</h2>
                    <Carrousel />
                </article>

            </section>

        </main>
    )
};

export default MainContainer;
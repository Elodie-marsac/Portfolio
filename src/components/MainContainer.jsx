import React from "react";
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

        </main>
    )
};

export default MainContainer;
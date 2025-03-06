import React, { useEffect } from "react";
import "../styles/Carrousel.scss";

const Carrousel = () => {
    useEffect(() => {
        const container = document.querySelector(".container-carrossel");
        const carrossel = document.querySelector(".carrossel");
        const carrosselItems = document.querySelectorAll(".carrossel-item");

        let isMouseDown = false;
        let currentMousePos = 0;
        let lastMousePos = 0;
        let lastMoveTo = 0;
        let moveTo = 0;

        const createCarrousel = () => {
            const length = carrosselItems.length;
            const degrees = 360 / length;
            const gap = 20;
            const tz = 200;

            carrosselItems.forEach((item, i) => {
                const degreesByItem = degrees * i + "deg";
                item.style.setProperty("--rotatey", degreesByItem);
                item.style.setProperty("--tz", tz + "px");
            });
        };

        const lerp = (a, b, n) => n * (a - b) + b;

        const getPosX = (x) => {
            currentMousePos = x;
            moveTo = currentMousePos < lastMousePos ? moveTo - 2 : moveTo + 2;
            lastMousePos = currentMousePos;
        };

        const update = () => {
            lastMoveTo = lerp(moveTo, lastMoveTo, 0.05);
            carrossel.style.setProperty("--rotatey", lastMoveTo + "deg");
            requestAnimationFrame(update);
        };

        const initEvents = () => {
            window.addEventListener("resize", createCarrousel);
            update();
            createCarrousel();
        };

        initEvents();
    }, []);

    return (
        <div className="carrossel">
            <div className="carrossel-item">React</div>
            <div className="carrossel-item">Vite</div>
            <div className="carrossel-item">JavaScript</div>
        </div>
    );
};

export default Carrousel;

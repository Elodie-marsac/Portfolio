import React, { useEffect } from "react";
import "../styles/Carrousel.scss";

const Carrousel = () => {
    useEffect(() => {
        const container = document.querySelector(".container");
        const containercarrossel = document.querySelector(".container-carrossel");
        const carrossel = document.querySelector(".carrossel");
        const carrosselItems = document.querySelectorAll(".carrossel-item");

        let isMouseDown = false;
        let currentMousePos = 0;
        let lastMousePos = 0;
        let lastMoveTo = 0;
        let moveTo = 0;

        const createCarrousel = () => {
            const carrosselProps = onResize();
            const length = carrosselItems.length;
            const degress = 360 / length;
            const gap = 20;
            const tz = distanceZ(carrosselProps.w, length, gap);

            const fov = calculateFov(carrosselProps);
            const height = calculateHeight(tz);



            carrosselItems.forEach((item, i) => {
                const degressByItem = degress * i + "deg";
                item.style.setProperty("--rotatey", degressByItem);
                item.style.setProperty("--tz", tz + "px");
            });
        };

        const lerp = (a, b, n) => n * (a - b) + b;

        const distanceZ = (widthElement, length, gap) =>
            widthElement / 2 / Math.tan(Math.PI / length) + gap;

        const calculateHeight = (z) => {
            const t = Math.atan((90 * Math.PI) / 180 / 2);
            return t * 2 * z;
        };

        const calculateFov = (carrosselProps) => {
            const perspective = window
                .getComputedStyle(containercarrossel)
                .perspective.split("px")[0];

            const length =
                Math.sqrt(carrosselProps.w * carrosselProps.w) +
                Math.sqrt(carrosselProps.h * carrosselProps.h);
            return (2 * Math.atan(length / (2 * perspective)) * 180) / Math.PI;
        };

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

        const onResize = () => {
            const boundingcarrossel = containercarrossel.getBoundingClientRect();
            return { w: boundingcarrossel.width, h: boundingcarrossel.height };
        };

        const initEvents = () => {
            carrossel.addEventListener("mousedown", () => {
                isMouseDown = true;
                carrossel.style.cursor = "grabbing";
            });
            carrossel.addEventListener("mouseup", () => {
                isMouseDown = false;
                carrossel.style.cursor = "grab";
            });
            container.addEventListener("mouseleave", () => (isMouseDown = false));
            carrossel.addEventListener(
                "mousemove",
                (e) => isMouseDown && getPosX(e.clientX)
            );
            carrossel.addEventListener("touchstart", () => {
                isMouseDown = true;
                carrossel.style.cursor = "grabbing";
            });
            carrossel.addEventListener("touchend", () => {
                isMouseDown = false;
                carrossel.style.cursor = "grab";
            });
            container.addEventListener(
                "touchmove",
                (e) => isMouseDown && getPosX(e.touches[0].clientX)
            );
            window.addEventListener("resize", createCarrousel);
            update();
            createCarrousel();
        };

        initEvents();
    }, []);

    return (
        <div className="container-carrossel">
            <div className="carrossel">
                <div className="carrossel-item"><p>JavaScript</p></div>
                <div className="carrossel-item"><p>React</p></div>
                <div className="carrossel-item"><p>Node.js</p></div>
                <div className="carrossel-item"><p>Express</p></div>
                <div className="carrossel-item"><p>SQL</p></div>
                <div className="carrossel-item"><p>MongoDB</p></div>
            </div>
        </div>
    );
};

export default Carrousel;

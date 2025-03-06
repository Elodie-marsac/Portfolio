import React from "react";
import "../styles/Header.scss";

const Header = () => {
    return (
        <header className="header">
            <p>Elodie <br /> Marsac</p>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

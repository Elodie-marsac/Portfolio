import { useState } from "react";
import "../styles/Header.scss";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="header">
            <p>Elodie Marsac</p>
            {/* Bouton Menu Burger */}
            <div className="burger-menu" onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav className={isOpen ? "open" : ""}>
                <ul className="menu">
                    <li><a href="#what_i_do">What I do</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <ul className="social-medias">
                    <li>GitHub</li>
                    <li>IN</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

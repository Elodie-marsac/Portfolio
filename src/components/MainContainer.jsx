import React from "react";
import { useState } from "react";
import "../styles/MainContainer.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFigma, faTrello, faHtml5, faCss3Alt, faJs, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { SiAdobe, SiTypescript, SiExpress, SiMongodb } from "react-icons/si";


const MainContainer = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        message: "",
    });

    const [responseMessage, setResponseMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            setResponseMessage(data.message);

            if (response.ok) {
                setFormData({ firstname: "", lastname: "", email: "", message: "" });
            }
        } catch (error) {
            setResponseMessage("Error sending message. Please try again.");
        }
    };

    return (
        <main className="main-container">
            <p>welcome to my world</p>

            <section className="intro">
                <div className="column1">
                    <h1>Hi, I'm <span className="name">Elodie Marsac</span> a Developer</h1>
                    <p className="description-desktop">Passionate about web development, I create interactive and dynamic experiences
                        by combining modern design, cutting-edge technologies,
                        and optimal performance.
                    </p>
                </div>
                <article className="column2">
                    <img className="photo" src="photo_detouree-3.png" alt="Elodie Marsac" />
                </article>
                <article className="column3">
                    <p className="description">Passionate about web development, I create interactive and dynamic experiences
                        by combining modern design, cutting-edge technologies,
                        and optimal performance.
                    </p>
                </article>

                <article className=" column4 stack">
                    <h3>UX Stack</h3>
                    <ul className="UX-stack">
                        <li className="icon"><FontAwesomeIcon icon={faFigma} /></li>
                        <li className="icon"><SiAdobe /></li>
                        <li className="icon"><FontAwesomeIcon icon={faTrello} /></li>
                    </ul>
                </article>

                <article className="stack">
                    <h3>UI Stack</h3>
                    <ul className="UI-stack">
                        <li className="icon"><FontAwesomeIcon icon={faHtml5} /></li>
                        <li className="icon"><FontAwesomeIcon icon={faCss3Alt} /></li>
                        <li className="icon"><FontAwesomeIcon icon={faJs} /> </li>
                        <li className="icon"><SiTypescript /> </li>
                        <li className="icon"><FontAwesomeIcon icon={faReact} /></li>
                        <li className="icon"><FontAwesomeIcon icon={faNodeJs} /> </li>
                        <li className="icon"><SiExpress /></li>
                        <li className="icon"><SiMongodb /></li>
                    </ul>
                </article>
            </section>
            <section className="void"></section>

            <section id="what_i_do" className="what-i-do">
                <h2>What I Do</h2>
                <div className="skills-container">
                    <article className="skill">
                        <h3>App Development</h3>
                        <p>designing and integrating intuitive interfaces,
                            front-end and back-end development, performance optimization,
                            database management,
                            and deploying solutions tailored to user needs.</p>
                    </article>
                    <article className="skill">
                        <h3>Marketing Strategy</h3>
                        <p>conducting market research, defining target audiences,
                            creating branding strategies, developing digital marketing campaigns,
                            and optimizing conversion rates to maximize engagement and growth.</p>
                    </article>
                    <article className="skill">
                        <h3>Business Strategy</h3>
                        <p>analyzing market trends, defining growth objectives, optimizing processes,
                            developing digital strategies,
                            and implementing data-driven solutions to enhance business performance.</p>
                    </article>

                </div>
            </section>
            <section className="void"></section>
            <section id="projects" className="projects">
                <h2 className="projects-title">Projects</h2>
                <div>
                    <article className="projects-container">
                        <img className="project-image" src="projets_portfolio.png"
                            alt="the snack odyssey site e-commerce de snack mythologiques" />
                        <h3>The Snack Odyssey - e commerce website</h3>
                        <p></p>
                    </article>
                    <article className="projects-container">
                        <img className="project-image" src="freshly-restaurants.png"
                            alt="freshly restaurant site" />
                        <h3>Freshly Restaurant</h3>
                        <p></p>
                    </article>
                    <article className="projects-container">

                        <h3>Project 3</h3>
                        <p></p>
                    </article>
                </div>
            </section>
            <section>
                <h2 className="experience-title">My Resume</h2>
                <div className="experience-container">
                    <article>
                        <h3>Professionnal skills</h3>
                        <div className="soft-skills-container">
                            <div className="soft-skills">
                                <h4>Project Management</h4>
                                <p>Able to efficiently manage projects from start to finish,
                                    from strategic planning to execution and monitoring.
                                    Proficient in both traditional (Waterfall) and agile (Scrum, Kanban) methodologies,
                                    ensuring optimal resource, timeline, and risk management.
                                    Strong skills in team coordination, communication,
                                    and problem-solving to ensure project success in dynamic and demanding environments.</p>
                            </div>
                            <div className="soft-skills">
                                <h4>Adaptability</h4>
                                <p>Ability to quickly adjust to changes in priorities,contexts, or constraints.
                                    Capable of working in diverse environments by adopting a flexible, solution-oriented approach.
                                    Adaptability ensures optimal efficiency while addressing unforeseen challenges,
                                    fostering collaboration and innovation within teams.</p>
                            </div>
                            <div className="soft-skills">
                                <h4>Communication</h4>
                                <p>Strong ability to convey ideas clearly and effectively,
                                    both verbally and in writing, ensuring a smooth exchange of information.
                                    Skilled in active listening, providing constructive feedback,
                                    and adapting communication styles to different audiences.
                                    This enables building strong relationships, fostering teamwork,
                                    and ensuring that all stakeholders are aligned and informed throughout a project.</p>
                            </div>
                        </div>
                    </article>
                    <article>
                        <h3>Education</h3>
                        <div className="education-container">
                            <div className="education-skill">
                                <h4>Full Stack Developer BootCamp - 3wAcademy</h4>
                                <p>Acquired in-depth skills in web development,
                                    both front-end and back-end, through hands-on projects and intensive learning
                                    of modern web technologies.</p>
                            </div>
                            <div className="education-skill">
                                <h4>Full Stack Development Program - The Odin Project</h4>
                                <p>Comprehensive training in full-stack development,
                                    with an immersion in widely-used technologies for modern web development,
                                    strengthening my expertise in JavaScript, React, Node.js, HTML, CSS,
                                    and other essential tools.</p>
                            </div>
                            <div className="education-skill">
                                <h4>Bachelor's in Digital Marketing - IPAC Bachelor Factory</h4>
                                <p>Degree in Digital Marketing focused on digital strategies,
                                    data analysis, and project management in a dynamic digital environment,
                                    providing a deep understanding of how technology
                                    impacts businesses and consumers.</p>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            <section className="void"></section>

            <section id="contact">
                <h2>Contact</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input type="text" name="firstname" placeholder="Firstname" value={formData.firstname} onChange={handleChange} required />
                    <input type="text" name="lastname" placeholder="Lastname" value={formData.lastname} onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                    <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
                    <button className="submit-button" type="submit">Send</button>
                </form>
                {responseMessage && <p className="response-message">{responseMessage}</p>}
            </section>
        </main>
    )
};

export default MainContainer;
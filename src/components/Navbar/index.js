import './index.scss';
import { ReactComponent as BurgerMenu } from '../../assets/icons/BurgerMenu.svg';
import { ReactComponent as Exit } from '../../assets/icons/exit.svg';
import MobileNav from '../MobileNav';
import { useState } from "react";

const Navbar = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const [exit, setExit] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
        setExit(!hamburgerOpen);
    }

    return (
        <div className="nav-bar">
            <div className="nav-content">
                <a href="#intro">
                    <h1>aileen</h1>
                </a>
                <nav>
                    <ul>
                        <li>
                            <a href="#about">
                                <button id="about-button">about</button>
                            </a>
                        </li>
                        <li>
                            <a href="#projects">
                                <button id="projects-button">projects</button>
                            </a>
                        </li>
                        <li>
                            <a href="#contact">
                                <button id="contact-button">contact</button>
                            </a>
                        </li>
                        <li>
                            <BurgerMenu className="icon" id="burger-icon" onClick={toggleHamburger}></BurgerMenu>
                        </li>

                        {exit === true && (
                            <li>
                            <Exit className="icon" id="exit-icon" onClick={toggleHamburger}></Exit>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
                {hamburgerOpen === true && (
                    <MobileNav />
                )}
        </div>
    )
}

export default Navbar;

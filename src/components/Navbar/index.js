import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import { ReactComponent as BurgerMenu } from '../../assets/icons/BurgerMenu.svg';
import MobileNav from '../MobileNav';
import { useState } from "react";

const Navbar = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        console.log("clicked");
        setHamburgerOpen(!hamburgerOpen);
    }

    return (
        <div className="nav-bar">
            <div className="nav-content">
                <Link className="link" to="/">
                    <h1>aileen</h1>
                </Link>
                <nav>
                    <ul>
                        <li>
                            <NavLink exact="true" activeclassname="active" to="/about">
                                <button id="about-button">about</button>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact="true" activeclassname="active" to="/projects">
                                <button id="projects-button">projects</button>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact="true" activeclassname="active" to="/contact">
                                <button id="contact-button">contact</button>
                            </NavLink>
                        </li>
                        <li>
                            <BurgerMenu className="icon" id="burger-icon" onClick={toggleHamburger}></BurgerMenu>
                        </li>
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

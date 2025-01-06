import { NavLink } from 'react-router-dom';
import './index.scss';

const MobileNav = () => {
    return (
        <div className="mobile-nav">
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
                    <NavLink exact="true" activeclassname="active" to="/contact">
                        <button id="contact-button">contact</button>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default MobileNav;
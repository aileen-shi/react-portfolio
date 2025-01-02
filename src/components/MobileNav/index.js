import { NavLink } from 'react-router-dom';
import './index.scss';

const MobileNav = () => {
    return (
        <div className="mobile-nav">
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
            </ul>
        </div>
    )
}

export default MobileNav;
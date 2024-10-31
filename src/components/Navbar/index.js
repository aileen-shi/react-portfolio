import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import { ReactComponent as BurgerMenu } from '../../assets/icons/BurgerMenu.svg';

const Navbar = () => {
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
                        <NavLink>
                            <BurgerMenu className="icon"></BurgerMenu>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar

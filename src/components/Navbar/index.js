import { Link, NavLink } from 'react-router-dom';
import './index.scss';

const Navbar = () => {
    return (
       <div className='nav-bar'>
            <Link to='/'>
                <h1>aileen</h1>
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/about">
                    <button>about</button>
                </NavLink>
                <NavLink exact="true" activeclassname="active" to="/projects">
                    <button></button>
                </NavLink>
                <NavLink exact="true" activeclassname="active" to="/contact">
                    <button>about</button>
                </NavLink>
            </nav>
       </div>
    )
}

export default Navbar;
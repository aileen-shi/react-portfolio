import { Link, NavLink } from 'react-router-dom'
import './index.scss'

const Navbar = () => {
  return (
    <div className="nav-bar">
      <Link to="/">
        <h1>aileen</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink exact="true" activeclassname="active" to="/about">
              <button>about</button>
            </NavLink>
          </li>
          <li>
            <NavLink exact="true" activeclassname="active" to="/projects">
              <button>projects</button>
            </NavLink>
          </li>
          <li>
            <NavLink exact="true" activeclassname="active" to="/contact">
              <button>contact</button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar

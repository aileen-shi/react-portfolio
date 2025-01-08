import './index.scss';

const MobileNav = ({ toggleHamburger }) => {
    return (
        <div className="mobile-nav">
            <ul>
                <li>
                    <a href="#about">
                        <button id="about-button" onClick={toggleHamburger}>about</button>
                    </a>
                </li>
                <li>
                    <a href="#projects">
                        <button id="projects-button" onClick={toggleHamburger}>projects</button>
                    </a>
                </li>
                <li>
                    <a href="#contact">
                        <button id="contact-button" onClick={toggleHamburger}>contact</button>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default MobileNav;
import './index.scss';
import Navbar from '../Navbar';
import Intro from '../Intro';
import About from '../About';
import Projects from '../Projects';
import Contact from '../Contact';

const Layout = () => {
    return (
        <>
            <Navbar />
            <div className="body-content">
                <section id="intro">
                    <Intro />
                </section>
                <section id="about">
                    <About />
                </section>
                <section id="projects">
                    <Projects />
                </section>
                <section id="contact">
                    <Contact />
                </section>
            </div>
        </>
    )   
}

export default Layout;
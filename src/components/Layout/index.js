import './index.scss';
import Navbar from '../Navbar';
import Intro from '../Intro';
import About from '../About';

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
            </div>
        </>
    )   
}

export default Layout;
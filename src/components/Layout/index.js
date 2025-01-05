import './index.scss';
import Navbar from '../Navbar';
import Intro from '../Intro';
import About from '../About';

const Layout = () => {
    return (
        <>
            <Navbar />
            <div className="body-content">
                <Intro />
                <About />
            </div>
        </>
    )   
}

export default Layout;
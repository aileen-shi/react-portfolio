import './index.scss';
import Navbar from '../Navbar';
import Intro from '../Intro';

const Layout = () => {
    return (
        <>
            <Navbar />
            <div className="body-content">
                <Intro />
            </div>
        </>
    )   
}

export default Layout;
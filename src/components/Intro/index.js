import './index.scss';
import { ReactComponent as Dots } from '../../assets/icons/dotgrid.svg';
import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg';

const Intro = () => {
    return (
        <div className="intro">
            <Dots className="dots" />
            <div className="title-box">
                <h1>hey!</h1>
                <h1>i'm aileen</h1>
                <h5>a full stack developer.</h5>
            </div>
            <div className="portrait-box">
                <h1>testing</h1>
            </div>
            <Arrow className="arrow" />
        </div>
    )
}

export default Intro;
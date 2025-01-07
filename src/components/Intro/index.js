import './index.scss'
import { ReactComponent as Dots } from '../../assets/icons/dotgrid.svg'
import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg'
import portrait from '../../assets/images/me.png'

const Intro = () => {
  return (
    <div className="intro">
      <Dots className="dots" />
      <Arrow className="arrow" />

      <div className="title-box">
        <h1>hey!</h1>
        <h1>i'm aileen</h1>
        <h5>a full stack developer.</h5>
      </div>
      <div className="portrait-box">
        <img className="portrait" src={portrait}></img>
      </div>
    </div>
  )
}

export default Intro

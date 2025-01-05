import './index.scss';
import { ReactComponent as Wavy } from "../../assets/icons/wavy.svg";
import { ReactComponent as Radial } from "../../assets/icons/radial.svg";
import { ReactComponent as HoleFlower } from "../../assets/icons/flower2.svg";

const About = () => {
    return (
        <div className="about">
            <Wavy className="icon wavy" />
            <Radial className="icon radial" />
            <HoleFlower className="icon hole-flower " />

            <div className="card bio-card">
                <div className="banner bio-banner">
                    <h1>about</h1>
                </div>
                <p className="bio-text">
                    I'm a full stack developer based in South Carolina.
                    I enjoy combining my technical skills and design expertise 
                    to create appealing and user friendly applications. I love
                    solving problems with a creative approach and seek out challenges
                    as an opportunity to learn more.
                </p>
            </div>
            <div className="card skill-card">
                <div className="banner skill-banner">
                    <h1>skills</h1>
                </div>
                <div className="button-grid">
                    <div class="col">C/C++/C#</div>
                    <div class="col">Python</div>
                    <div class="col">HTML</div>
                    <div class="col">CSS</div>
                    <div class="col">JavaScript</div>
                    <div class="col">Django</div>
                    <div class="col">SQL</div>
                    <div class="col">AWS</div>
                    <div class="col">Git</div>
                    <div class="col">VS Code</div>
                    <div class="col">MySQL</div>
                    <div class="col">Figma</div>
                    <div class="col">Photoshop</div>
                </div>
            </div>
        </div>
    )
}

export default About;
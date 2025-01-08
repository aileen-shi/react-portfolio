import './index.scss';
import { useState } from "react";
import pandasoft from '../../assets/images/pandasoft.png';
import test from '../../assets/images/test.png';
import { ReactComponent as VariedDots } from '../../assets/icons/varied-dots.svg';
import { ReactComponent as Sparkle } from '../../assets/icons/sparkle.svg';
import { ReactComponent as Shape } from '../../assets/icons/shape.svg';

const Projects = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const slides = [
        { 
            name: "PandaSoft",
            image: pandasoft, 
            alt: "PandaSoft landing page", 
            description: "A web app for truckers to join companies and earn rewards using React, Django, and iTunes API that was deployed on AWS."
        },
        {
            name: "Test Project",
            image: test,
            alt: "Test image",
            description: "testing description"
        }

    ];
    
    const handleNext = () => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }

    const handlePrev = () => {
        setSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    }

    return (
        <div className="project-container">

            <VariedDots className="varied-dots"/>
            <Sparkle className="sparkle" />
            <Shape className="shape" />

            <div className="card project-card">
                <div className="banner">
                    <h1>projects</h1>
                </div>
                <div className="slideshow-container">
                    <div className="slide">
                        <img src={slides[slideIndex].image} alt={slides[slideIndex].alt}></img>
                    </div>

                    <div className="button-container">
                        <button className="button prev" onClick={handlePrev}>{'\u003c'}</button>
                        <button className="button go">go</button>
                        <button className="button next" onClick={handleNext}>{'\u003e'}</button>
                    </div>
                </div>
            </div>
            <div className="card">
                <h1 className="project-name">{slides[slideIndex].name}</h1>
                <p className="project-description">{slides[slideIndex].description}</p>
            </div>
        </div>
    )
}

export default Projects;
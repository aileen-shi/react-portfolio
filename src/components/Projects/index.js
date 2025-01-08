import './index.scss';
import { useState } from "react";
import pandasoft from '../../assets/images/pandasoft.png';
import palette from '../../assets/images/color-palette.png';
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
            description: "A web app for truckers to join companies and earn rewards using React, Django, and iTunes API that was deployed on AWS.",
            link: "https://github.com/aileen-shi/PandaSoft"
        },
        {
            name: "Color Palette Generator",
            image: palette,
            alt: "Color palette generator screenshot",
            description: "A python script that uses a k-means clustering algorithm to extract the dominant colors from an image to generate a color palette.",
            link: "https://github.com/aileen-shi/dominant-color-extractor"
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
                        <a href={slides[slideIndex].link}>
                            <button className="button go" target="_blank">go</button>
                        </a>
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
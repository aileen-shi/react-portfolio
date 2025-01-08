import './index.scss';
import { useState } from "react";
import { ReactComponent as Flower } from "../../assets/icons/flower.svg";
import { ReactComponent as Sparkle } from "../../assets/icons/sparkle.svg";
import { ReactComponent as Dots } from "../../assets/icons/dotgrid.svg";

const Contact = () => {
    const [result, setResult] = useState("");

    const sendEmail = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        const apiKey = process.env.REACT_APP_EMAIL_API_KEY;

        formData.append("access_key", apiKey);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Email sent")
            event.target.reset();
        }
        else {
            console.log("Error", data);
            setResult(data.message);
        }
    }

    const getResume = () => {
        fetch ("../../assets/documents/resume.pdf").then((response) => {
            response.blob().then((blob) => {
                const fileURL = window.URL.createObjectURL(blob);

                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "Resume.pdf";
                alink.click();
            })
        })
    }

    return (
        <div className="contact-container">
            <Flower className="flower" />
            <Sparkle className="sparkle" />
            <Dots className="dots" />

            <div className="card link-card">
                <div className="banner">
                    <h1 className="banner-text">links</h1>
                </div>
                <div className="link-container">
                    <button className="link" onClick={getResume}>resume</button>

                    <a href="https://github.com/aileen-shi" target="_blank">
                        <button className="link">github</button>
                    </a>

                    <a href="https://www.linkedin.com/in/aileen-shi-3b38071a0/" target="_blank"> 
                        <button className="link">linkedin</button>
                    </a>
                </div>
            </div>
            <div className="card contact-card">
                <div className="banner">
                    <h1 className="banner-text">contact me</h1>
                </div>

                <form className="form" onSubmit={sendEmail}>
                    <div className="form-field">
                        <label for="name">name:</label>
                        <input type="text" className="field" name="name" required></input>
                    </div>
                    <div className="form-field">
                        <label for="email">email:</label>
                        <input type="text" className="field" name="email" required></input>
                    </div>
                    <div className="form-field">
                        <label for="message">message:</label>
                        <textarea className="field message" name="message" rows="5" required></textarea>
                    </div>
                    <span>{result}</span>
                    <button className="send" type="submit">send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;
import React from "react";
import img from "../../assets/img.jpg";
import './Home.css';

export default function Home() {
    return (
        <div className="home">
            <div className="home1">
                <div className="about">
                    <h2>
                    Crafting AI's Future, one idea at IITB
                    </h2>
                    <p>
                    The official AI community of IIT-Bombay, we aim to elevate the AI ecosystem in IITB by organizing hackathons, projects, talks and reading groups.
                    </p>
                </div>
                <div className="image">
                    <img src={img} alt="AI" />
                </div>
            </div>
            <div className="home2">

            </div>
            <div className="home3">

            </div>
            <div className="home4">

            </div>
            <div className="home5">

            </div>
        </div>
    );
}
import React from "react";
import img from "../../assets/img.jpg";
import "./Home.css";
import facAdimg from "../../assets/bg_removed_amit_sethi.png"

export default function Home() {
    return (
        <div className="home">
            <div className="home1">
                <div className="about">
                    <h2>
                    Crafting AI's Future, one idea at IITB
                    </h2>
                    <p>
                    The official AI community of IIT-Bombay, we aim to elevate the AI ecosystem in IITB by organizing hackathons, projects, talks and reading groups.We work on participating in one of the best hackathons and competitions around the world. With our main aim on improving the research outputs of the community, we work on cutting-edge innovative projects in the field of AI covering all the subdomains : Vision, NLP, RL, etc.
                    </p>
                </div>
                <div >
                    <img src={img} alt="AI" />
                </div>
            </div>
            <div className="home2">
                <div className="about">
                We are a group of AI enthusiasts aiming to produce world-class research outputs
                </div>
                <div className="work">
                <div className="about">
                    <h1>Data Science</h1>
                    Unlock the potential of data. Delve into analysis, predictive modeling,
                    and data-driven strategies. From business optimization to machine
                    learning, turn information into actionable insights.
                </div>
                <div className="about">
                    <h1>Reinforcement Learning</h1>
                    Empowering intelligent decision-making. Dive into reinforcement
                    learning, where machines learn and adapt through interactions with
                    their environment. From robotics to game Al, we enable smarter
                    choices.
                </div>
                <div className="about">
                    <h1>Computer Vision</h1>
                    Experience the future of visual intelligence in image recognition,
                    object detection, and custom solutions, powering applications in
                    healthcare, automotive, and more. Unleash the potential of visual
                    data with us.
                </div>
                <div className="about">
                    <h1>Linguistic Computation</h1>
                    Explore the realm of language in linguistic computation covering
                    natural language processing, sentiment analysis, and language
                    models. From chatbots to content analysis, we turn language into
                    actionable insights.
                </div>
                </div>
            </div>
            <div className="home3">
                <div className="about">
                    <h2>
                        Explore our insightful blogs covering AI, ML and carrer opportunities in these fields
                    </h2>
                </div>
            
            </div>
            <div className="home4">
                {/* issue with image */}
                <div className="about"> 
                </div>
               
                               
            </div>
            <div className="home5">
                <div className="about">
                    <h1>
                        Know the Faculty Advisor
                    </h1>
                    <p>
                    Al Commmunity at IITB is adviced by Prof. Amit Sethi. He's the professor at Electrical
                    Engineering dept. of IIT-Bombay and an adjunct faculty at Dept. of Pathology at University of
                    Illinois, Chicago (UIC). His research interests lie in Deep learning, machine learning, image
                    processing, computer vision and medical image analysis. You can get to know more about him
                    by visitng his <a href="https://www.ee.iitb.ac.in/~asethi/" className="link">webpage</a>
                    The work Al Community does is all made possible by a group of dedicated individuals
                    enthusiastic about research and innovation in the field.
                    </p>
                </div>
                <div>
                    <img src={facAdimg} alt="prof" />
                </div>
            </div> 
        </div>
    );
}
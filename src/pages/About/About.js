// export default About;
import React from "react";
import "./About.css";
import { Zoom } from "react-awesome-reveal";

const About = () => {
  return (
    <div>
      <Zoom>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                Hello! I'm Aryan Bansal, a passionate tech enthusiast currently
                pursuing my B.Tech in Computer Science & Engineering from
                MIT-WPU, Pune. My journey in technology has equipped me with a
                robust skill set in web development, where I excel in HTML, CSS,
                JavaScript, ReactJS, ExpressJS, NodeJS, MongoDB, and MySQL.
                Beyond web technologies, I have a strong foundation in core
                programming, with proficiency in C/C++, Python, and Java. My
                curiosity drives me to continuously learn and explore new
                domains, and I am particularly excited about diving into the
                world of Natural Language Processing (NLP). Let's connect and
                innovate together!
              </p>
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <Zoom>
                <img src="profile.png" alt="profile_pic" title="Aryan Bansal" />
              </Zoom>
            </div>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default About;

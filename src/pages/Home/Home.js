import React, { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import "./home.css";
import Fade from "react-reveal/Fade";
import Typewriter from "typewriter-effect";
import { FaDownload } from "react-icons/fa";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Resume from "../../assets/docs/Aryan_Resume-3.pdf";

const Home = () => {
  const [theme, setTheme] = useTheme();
  //handletheme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  const strings = ["A Full stack Web Developer!", "A Tech Enthusiast!"];
  const [currentString, setCurrentString] = useState(strings[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = ["web.jpg", "tech.jpg"];

  useEffect(() => {
    const imageChangeInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(imageChangeInterval);
  }, [images.length]);

  const handleType = (string) => {
    setCurrentString(string);
  };

  return (
    <div>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div className="container home-content">
          <div className="desc">
            <Fade right>
              <h2>Hi 🙋‍♂️ I am Aryan! </h2>
              <h1>
                <Typewriter
                  options={{
                    strings: strings,
                    autoStart: true,
                    loop: true,
                    delay: 75,
                    deleteSpeed: 50,
                  }}
                  onStringTyped={(string) => handleType(strings[string])}
                />
              </h1>
            </Fade>
            <Fade bottom>
              <div className="home-buttons">
                <a
                  className="btn btn-hire"
                  href="https://api.whatsapp.com/send?phone=7228029424"
                  rel="noreferrer"
                  target="_blank"
                >
                  Hire Me
                </a>
                <a className="btn btn-cv" href={Resume} download="Resume.pdf">
                  <FaDownload />
                  My Resume
                </a>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

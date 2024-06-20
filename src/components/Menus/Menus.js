import React from "react";
import "./menus.css";
import { Link } from "react-scroll";
import { Zoom } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";

import {
  FcHome,
  FcAbout,
  FcAcceptDatabase,
  FcReading,
  FcStatistics,
  FcAssistant,
} from "react-icons/fc";
const Menus = ({ toggle }) => {
  return (
    <div>
      {toggle ? (
        <div>
          <Zoom>
            <div className="navbar-profile-pic">
              <img src="self_image.png" alt="" />
            </div>
          </Zoom>
          <div className="profile-name">Aryan</div>
          <Fade left>
            <div className="nav-items">
              <div className="nav-item open">
                <div className="nav-link">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcHome />
                    Home
                  </Link>
                </div>
              </div>
              <div className="nav-item open">
                <div className="nav-link">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcAbout />
                    About
                  </Link>
                </div>
              </div>
              <div className="nav-item open">
                <div className="nav-link">
                  <Link
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcReading />
                    Education
                  </Link>
                </div>
              </div>
              <div className="nav-item open">
                <div className="nav-link">
                  <Link
                    to="techstack"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcAcceptDatabase />
                    Tech Stack
                  </Link>
                </div>
              </div>
              <div className="nav-item open">
                <div className="nav-link">
                  <Link
                    to="project"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcStatistics />
                    Projects
                  </Link>
                </div>
              </div>
              <div className="nav-item open">
                <div className="nav-link">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcAssistant />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      ) : (
        <div className="nav-items">
          <div className="nav-item close">
            <div className="nav-link">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcHome title="Home" />
              </Link>
            </div>
          </div>
          <div className="nav-item close">
            <div className="nav-link">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcAbout title="About" />
              </Link>
            </div>
          </div>
          <div className="nav-item close">
            <div className="nav-link">
              <Link
                to="education"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcReading title="Education" />
              </Link>
            </div>
          </div>
          <div className="nav-item close">
            <div className="nav-link">
              <Link
                to="techstack"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcAcceptDatabase title="Tech-Stack" />
              </Link>
            </div>
          </div>
          <div className="nav-item close">
            <div className="nav-link">
              <Link
                to="project"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcStatistics title="Projects" />
              </Link>
            </div>
          </div>
          <div className="nav-item close">
            <div className="nav-link">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcAssistant title="Contact" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menus;

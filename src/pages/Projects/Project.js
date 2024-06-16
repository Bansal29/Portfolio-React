import React from "react";
import "./Project.css";
import Zoom from "react-reveal/Zoom";

const Project = () => {
  return (
    <div>
      <div className="container project" id="project">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Projects
        </h2>
        <hr />
        <p className="pb-3 text-center">
          💻This section includes my academic and personal Projects 💻
        </p>
        <div className="row" id="ads">
          {/*project-1*/}
          <Zoom>
            <div className="col-md-4">
              <div className="card rounded project-card">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj65SmyEwOC5-lxkYu2wQbtbMFtQ5QDkXqBw&s"
                    alt="project-1"
                  />
                </div>
                <div className="card-image-overlay m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">MongoDB</span>
                </div>
                <div className="card-body">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">i-Notebook</h5>
                  </div>
                  <div className="ad-btn">
                    <a
                      className="btn btn-primary"
                      href="https://github.com/Bansal29/iNotebook-MERN.git"
                    >
                      View Code
                    </a>
                    <a
                      className="btn btn-primary"
                      href="https://i-notebook-mern-xsmq-frontend.vercel.app/#/login"
                    >
                      view Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
          {/*project-2*/}
          <Zoom>
            <div className="col-md-4">
              <div className="card rounded project-card">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj65SmyEwOC5-lxkYu2wQbtbMFtQ5QDkXqBw&s"
                    alt="project-1"
                  />
                </div>
                <div className="card-image-overlay m-auto mt-3">
                  <span className="card-detail-badge">ReactJs</span>
                  <span className="card-detail-badge">Bootstrap</span>
                  <span className="card-detail-badge">NewsAPI</span>
                </div>
                <div className="card-body">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">NewsVerse</h5>
                  </div>
                  <div className="ad-btn">
                    <a
                      className="btn btn-primary"
                      href="https://github.com/Bansal29/NewsVerse-React.git"
                    >
                      View Code
                    </a>
                    <a className="btn btn-primary" href="#">
                      view Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
          {/*project-3*/}
          <Zoom>
            <div className="col-md-4">
              <div className="card rounded project-card">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj65SmyEwOC5-lxkYu2wQbtbMFtQ5QDkXqBw&s"
                    alt="project-1"
                  />
                </div>
                <div className="card-image-overlay m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">MongoDB</span>
                </div>
                <div className="card-body">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">ZwiGato</h5>
                  </div>
                  <div className="ad-btn">
                    <a
                      className="btn btn-primary"
                      href="https://github.com/Bansal29/Zwigato.git"
                    >
                      View Code
                    </a>
                    <a className="btn btn-primary" href="#">
                      view Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
        <div className="row" id="ads">
          {/*project-4*/}
          <Zoom>
            <div className="col-md-4">
              <div className="card rounded project-card">
                <div className="card-image">
                  <span className="card-notify-badge">
                    Natural Language Processing
                  </span>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj65SmyEwOC5-lxkYu2wQbtbMFtQ5QDkXqBw&s"
                    alt="project-1"
                  />
                </div>
                <div className="card-image-overlay m-auto mt-3">
                  <span className="card-detail-badge">Python</span>
                  <span className="card-detail-badge">Streamlit</span>
                  <span className="card-detail-badge">NLP</span>
                  <span className="card-detail-badge">Web Scraping</span>
                </div>
                <div className="card-body">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Youtube comment analyzer</h5>
                  </div>
                  <div className="ad-btn">
                    <a
                      className="btn btn-primary"
                      href="https://github.com/Bansal29/CCNLP_miniproject.git"
                    >
                      View Code
                    </a>
                    <a
                      className="btn btn-primary"
                      href="https://github.com/Bansal29/CCNLP_miniproject.git"
                    >
                      view Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
          {/*project-5*/}
          <Zoom>
            <div className="col-md-4">
              <div className="card rounded project-card">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img src="konnect-land.png" alt="project-1" />
                </div>
                <div className="card-image-overlay m-auto mt-3">
                  <span className="card-detail-badge">ReactJS</span>
                  <span className="card-detail-badge">Bootstrap</span>
                </div>
                <div className="card-body">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Konnect</h5>
                  </div>
                  <div className="ad-btn">
                    <a
                      className="btn btn-primary"
                      href="https://github.com/Bansal29/Konnect-IRIS.git"
                    >
                      View Code
                    </a>
                    <a
                      className="btn btn-primary"
                      href="https://github.com/Bansal29/Konnect-IRIS.git"
                    >
                      view Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
          {/*project-6*/}
          <Zoom>
            <div className="col-md-4">
              <div className="card rounded project-card">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img src="portfolio-thumbnail.png" alt="project-1" />
                </div>
                <div className="card-image-overlay m-auto mt-3">
                  <span className="card-detail-badge">ReactJS</span>
                  <span className="card-detail-badge">Bootstrap</span>
                  <span className="card-detail-badge">Nodemailer</span>
                  <span className="card-detail-badge">EmailJS</span>
                </div>
                <div className="card-body">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Portfolio</h5>
                  </div>
                  <div className="ad-btn">
                    <a className="btn btn-primary" href="#">
                      View Code
                    </a>
                    <a className="btn btn-primary" href="#">
                      view Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default Project;

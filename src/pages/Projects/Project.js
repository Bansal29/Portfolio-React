import React from "react";
import "./Project.css";
// import Zoom from "react-awesome-reveal";
import { BsGithub } from "react-icons/bs";

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

          <div className="col-md-4">
            <div className="card rounded project-card">
              <div className="card-image">
                <span className="card-notify-badge">Full stack</span>
                <img
                  src="https://cdn3.f-cdn.com//files/download/208880592/Screenshot%20%2810%29.png?width=780&height=373&fit=crop"
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
                  <h5 className="text-uppercase">
                    i-Notebook- A notes management application
                  </h5>
                </div>
                <div className="ad-btn">
                  <a
                    className="btn btn-primary"
                    href="https://github.com/Bansal29/iNotebook-MERN.git"
                  >
                    VIEW CODE
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

          {/*project-2*/}

          <div className="col-md-4">
            <div className="card rounded project-card">
              <div className="card-image">
                <span className="card-notify-badge">Frontend</span>
                <img src="newsverse.png" alt="project-1" />
              </div>
              <div className="card-image-overlay m-auto mt-3">
                <span className="card-detail-badge">ReactJs</span>
                <span className="card-detail-badge">Bootstrap</span>
                <span className="card-detail-badge">NewsAPI</span>
              </div>
              <div className="card-body">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">
                    NewsVerse - A news rendering application
                  </h5>
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

          {/*project-3*/}

          <div className="col-md-4">
            <div className="card rounded project-card">
              <div className="card-image">
                <span className="card-notify-badge">Full stack</span>
                <img src="burger.jpg" alt="project-1" />
              </div>
              <div className="card-image-overlay m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">MongoDB</span>
              </div>
              <div className="card-body">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">
                    ZwiGato - A food ordering application
                  </h5>
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
        </div>
        <div className="row" id="ads">
          {/*project-4*/}

          <div className="col-md-4">
            <div className="card rounded project-card">
              <div className="card-image">
                <span className="card-notify-badge">
                  Natural Language Processing
                </span>
                <img
                  src="https://monkeylearn.com/static/e51ae54d394f4fe2ebe6fe79b34662c4/12fd3/normal.png"
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

          {/*project-5*/}

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

          {/*project-6*/}

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
                    view code
                  </a>
                  <a className="btn btn-primary" href="#">
                    view Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

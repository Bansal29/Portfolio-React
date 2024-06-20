import React, { useState, useEffect } from "react";
import "./Techstack.css";
import { TechstackList } from "../../utils/TechstackList";

const Techstack = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % TechstackList.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="container techstack" id="techstack">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Technologies stack
        </h2>
        <hr />
        <p className="pb-3 text-center">
          💻Including programming languages, frameworks, databases, front-end &
          back-end tools,APIs & the technologies i am familier with! 💻
        </p>
        <div className="row">
          {TechstackList.map((tech, index) => (
            <div key={tech._id} className="col-md-3">
              <div
                className={`card m-2 float-up ${
                  index === currentIndex ? "highlight" : ""
                }`}
              >
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex">
                      <tech.icon className="tech-icon" />
                      <h5>{tech.name}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Techstack;

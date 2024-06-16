import React from "react";
import "./Education.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdSchool } from "react-icons/md";
import { BiSolidSchool } from "react-icons/bi";

const Education = () => {
  return (
    <div>
      <div className="container education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education
        </h2>
        <hr />
        <p className="pb-3 text-center">
          📖This section summarizes my academic qualifications📖
        </p>
        <VerticalTimeline lineColor="black">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "black", color: "aqua" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2021 - 2025"
            iconStyle={{ background: "black", color: "aqua" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Technology in Computer Science Engineering
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Pune, Maharashtra
            </h4>
            <p>MIT-World Peace University</p>
            <p>CGPA:9.37</p>
            <p>2021 - 2025</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "black", color: "aqua" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2020 - 2021"
            iconStyle={{ background: "black", color: "aqua" }}
            icon={<BiSolidSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Higher Secondary Certificate
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Ahmedabad, Gujarat
            </h4>
            <p>Maharja Agrasen Vidyalaya</p>
            <p>Grade:91%</p>
            <p>2020 - 2021</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Education;

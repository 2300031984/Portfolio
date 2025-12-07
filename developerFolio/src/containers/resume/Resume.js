import React from "react";
import "./Resume.scss";
import {Fade} from "react-reveal";
import {resumeSection} from "../../portfolio";

export default function Resume() {
  if (!resumeSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="resume">
        <div className="resume-section">
          <h1 className="resume-heading">{resumeSection.title}</h1>
          <p className="resume-subtitle">{resumeSection.subtitle}</p>
          <div className="resume-button-container">
            <a
                href={require("./Sai_Varun_Resume.pdf")}
                download="Resume.pdf"
              className="download-link-button"
            >
              <button className="main-button">Download Resume</button>
            </a>
          </div>
        </div>
      </div>
    </Fade>
  );
}
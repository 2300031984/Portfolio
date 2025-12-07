import React from "react";
import "./Progress.scss";
import {illustration, techStack} from "../../portfolio";
import {Fade} from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function StackProgress() {
  if (techStack.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-container">
          <div className="skills-content">
            <div className="skills-header">
              <h1 className="skills-heading">Proficiency</h1>
              <div className="skills-subtitle">My technical expertise and experience level</div>
            </div>
            <div className="skills-grid">
              {techStack.experience.map((exp, i) => {
                const progressStyle = {
                  width: exp.progressPercentage
                };
                // Get a color based on the percentage
                const getColorFromPercentage = (percentage) => {
                  const percent = parseInt(percentage);
                  if (percent >= 85) return "#4CAF50"; // Green
                  if (percent >= 75) return "#2196F3"; // Blue
                  if (percent >= 65) return "#FF9800"; // Orange
                  return "#9C27B0"; // Purple
                };
                
                const barColor = getColorFromPercentage(exp.progressPercentage);
                const updatedProgressStyle = {
                  ...progressStyle,
                  background: `linear-gradient(90deg, ${barColor} 0%, ${barColor}80 100%)`,
                  boxShadow: `0 2px 10px ${barColor}40`
                };
                
                return (
                  <div key={i} className="skill-card">
                    <div className="skill-info">
                      <h3 className="skill-name">{exp.Stack}</h3>
                    </div>
                    <div className="meter-container">
                      <div className="meter">
                        <span style={updatedProgressStyle}></span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="skills-image">
            {illustration.animated ? (
              <DisplayLottie animationData={Build} />
            ) : (
              <img
                alt="Skills"
                src={require("../../assets/images/skill.svg")}
              />
            )}
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}
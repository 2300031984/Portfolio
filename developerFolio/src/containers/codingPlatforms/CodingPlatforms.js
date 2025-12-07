import React, {useContext} from "react";
import "./CodingPlatforms.scss";
import {codingPlatforms} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function CodingPlatforms() {
  const {isDark} = useContext(StyleContext);
  if (!codingPlatforms.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="coding-platforms">
        <div className="coding-platforms-main-div">
          <div className="coding-platforms-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading coding-platforms-heading"
                  : "heading coding-platforms-heading"
              }
            >
              {codingPlatforms.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle coding-platforms-subtitle"
                  : "subTitle coding-platforms-subtitle"
              }
            >
              {codingPlatforms.subtitle}
            </p>
          </div>
          <div className="coding-platforms-cards-div">
            {codingPlatforms.platforms.map((platform, i) => {
              return (
                <a
                  key={i}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    isDark
                      ? "dark-mode coding-platform-card"
                      : "coding-platform-card"
                  }
                >
                  <div className="coding-platform-icon">
                    <i className={platform.icon}></i>
                  </div>
                  <div className="coding-platform-details">
                    <h3 className="coding-platform-name">{platform.name}</h3>
                    <p className="coding-platform-username">@{platform.username}</p>
                  </div>
                  <div className="coding-platform-arrow">
                    <i className="fas fa-external-link-alt"></i>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}


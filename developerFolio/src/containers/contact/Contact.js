import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>
            <div className="contact-content-wrapper">
              <div className="contact-info-container">
                <div className="contact-email-card">
                  <div className="email-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="email-details">
                    <h3 className="email-type">Personal Email</h3>
                    <a
                      className="contact-detail-email"
                      href={"mailto:" + contactInfo.personal_email}
                    >
                      {contactInfo.personal_email}
                    </a>
                  </div>
                </div>
                
                <div className="contact-email-card">
                  <div className="email-icon">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <div className="email-details">
                    <h3 className="email-type">College Email</h3>
                    <a
                      className="contact-detail-email"
                      href={"mailto:" + contactInfo.educational_email}
                    >
                      {contactInfo.educational_email}
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="social-media-section">
                <h3 className="social-title">Connect with me</h3>
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
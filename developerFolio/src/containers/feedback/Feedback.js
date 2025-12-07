import React, {useContext, useState} from "react";
import "./Feedback.scss";
import {contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Feedback() {
  const {isDark} = useContext(StyleContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Feedback from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`
    );
    window.location.href = `mailto:${contactInfo.personal_email}?subject=${subject}&body=${body}`;
  };

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="feedback">
        <div className="feedback-main-div">
          <div className="feedback-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading feedback-heading"
                  : "heading feedback-heading"
              }
            >
              Send Feedback
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle feedback-subtitle"
                  : "subTitle feedback-subtitle"
              }
            >
              Share your feedback, suggestions, or just say hello...
            </p>
            <p className="feedback-note">
              This will open your default email client with a pre-filled message to {contactInfo.personal_email}
            </p>
          </div>
          <form className="feedback-form" onSubmit={handleSubmit}>
            <div className="feedback-form-row">
              <div className="feedback-form-group">
                <label htmlFor="name">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className={isDark ? "dark-mode" : ""}
                />
              </div>
              <div className="feedback-form-group">
                <label htmlFor="email">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                  className={isDark ? "dark-mode" : ""}
                />
              </div>
            </div>
            <div className="feedback-form-group">
              <label htmlFor="message">
                Message <span className="required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Share your feedback, suggestions, or just say hello..."
                rows="8"
                required
                className={isDark ? "dark-mode" : ""}
              />
            </div>
            <div className="feedback-form-button">
              <button type="submit" className="main-button feedback-submit-btn">
                <i className="fas fa-paper-plane"></i> Send Feedback
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fade>
  );
}
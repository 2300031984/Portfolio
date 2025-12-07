import React, {useState, useEffect} from "react";
import {openSource} from "../../portfolio";
import Contact from "../contact/Contact";
import GithubProfileCard from "../../components/githubProfileCard/GithubProfileCard";
export default function Profile() {
  const [prof, setrepo] = useState([]);
  function setProfileFunction(array) {
    setrepo(array);
  }

  useEffect(() => {
    if (openSource.showGithubProfile === "true") {
      const getProfileData = () => {
        fetch("/profile.json")
          .then(result => {
            if (result.ok) {
              return result.json();
            }
          })
          .then(response => {
            setProfileFunction(response.data.user);
          })
          .catch(function (error) {
            console.error(
              `${error} (because of this error GitHub contact section could not be displayed. Contact section has reverted to default)`
            );
            setProfileFunction("Error");
            openSource.showGithubProfile = "false";
          });
      };
      getProfileData();
    }
  }, []);
  if (
    openSource.display &&
    openSource.showGithubProfile === "true" &&
    !(typeof prof === "string" || prof instanceof String)
  ) {
    return (
      <div>
        <GithubProfileCard prof={prof} key={prof.id} />
        <div style={{display: "flex", justifyContent: "center", margin: "20px"}}>
          <a
            href={require("../resume/Sai_Varun_Resume.pdf")}
            download="Sai_Varun_Resume.pdf"
            style={{
              textDecoration: "none",
              padding: "10px 20px",
              backgroundColor: "#55198b",
              color: "white",
              borderRadius: "50px",
              fontWeight: "700",
              fontSize: "16px",
              boxShadow: "0 4px 20px rgba(85, 25, 139, 0.3)",
              transition: "all 0.3s ease"
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "translateY(-5px) scale(1.05)";
              e.target.style.boxShadow = "0 8px 30px rgba(85, 25, 139, 0.5)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "none";
              e.target.style.boxShadow = "0 4px 20px rgba(85, 25, 139, 0.3)";
            }}
          >
            Download Resume
          </a>
        </div>
      </div>
    );
  } else {
    return <Contact />;
  }
}
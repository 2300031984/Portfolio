/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "CHINTALA SAI VARUN",
  title: "Hi, I'm Sai Varun",
  subTitle: emoji(
    ""
  ),
  aboutMe: emoji(
    "I'm a B.Tech Computer Science student with a strong passion for software development, cloud computing, and cybersecurity. I have hands-on experience in full-stack web development and problem-solving using data structures and algorithms. My technical toolkit includes React, Spring Boot, MySQL, PostgreSQL, AWS, Git which I've used to build real-world applications. Driven by curiosity, I continuously explore emerging technologies and enjoy turning innovative ideas into functional solutions. I thrive in collaborative environments and am always eager to learn, contribute, and grow as a developer."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/2300031984",
  linkedin: "https://www.linkedin.com/in/saivarun1/",
  gmail: "saivarun699@gmail.com", // Personal email
  instagram: "https://www.instagram.com/xsaivarun1/",
  // Removed unused social media links
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "Technologies I work with",
  skills: [
    emoji(
      "⚡ Full-stack web development using Spring Boot and React"
    ),
    emoji("⚡ REST API design and backend logic implementation"),
    emoji(
      "⚡ Cloud computing and cybersecurity expertise"
    ),
    emoji(
      "⚡ Database optimization and schema design"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Cybersecurity",
      fontAwesomeClassname: "fas fa-shield-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Koneru Lakshmaiah Education Foundation, Vijayawada",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "B.Tech in Computer Science and Engineering",
      duration: "2023 – 2027",
      desc: "Current CGPA: 9.56",
      descBullets: [
        "Coursework: Data Structures, OOP, DBMS, Networking, Operating Systems"
      ]
    },
    {
      schoolName: "Narayana Junior College, Raviryala (Telangana)",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Board of Intermediate Education",
      duration: "2021 – 2023",
      desc: "Percentage: 97.1%",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Java",
      progressPercentage: "85%"
    },
    {
      Stack: "Wireshark",
      progressPercentage: "80%"
    },
    {
      Stack: "Docker",
      progressPercentage: "75%"
    },
    {
      Stack: "Nmap",
      progressPercentage: "80%"
    },
    {
      Stack: "Full Stack Development",
      progressPercentage: "85%"
    },
    {
      Stack: "MySQL",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Network Security Associate Virtual Intern",
      company: "Fortinet (EduSkills, AICTE)",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "July 2025 – Sept 2025",
      desc: "Completed 10-week program on firewalls, intrusion detection, and secure networking.",
      descBullets: [
        "Completed comprehensive training on network security fundamentals",
        "Learned about firewall configuration and intrusion detection systems",
        "Gained hands-on experience with secure networking practices"
      ]
    },
    {
      role: "Java Full Stack Development Intern",
      company: "EduSkills (Supported by NEAT Cell, NCTE)",
      companylogo: require("./assets/images/googleAssistantLogo.webp"),
      date: "April 2025 – June 2025",
      desc: "Designed backend logic using Spring Boot and built responsive UIs with React, HTML, CSS, Bootstrap.",
      descBullets: [
        "Designed and implemented backend logic using Spring Boot",
        "Built responsive user interfaces with React, HTML, CSS, and Bootstrap",
        "Worked on full-stack application development"
      ]
    }
  ]
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Key projects I've developed",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "AI-Driven Malware Analysis Threat-Hunting Lab",
      projectDesc: "Developed sandbox environment that detonates malware samples and classifies threats using machine learning. Implemented ML classifier achieving 85% accuracy. Generated YARA and Sigma rules automatically to reduce analyst investigation time. Analyzed 200+ malware samples across 15 threat families.",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://github.com/2300031984/AI-Malware-Analysis-Threat-Hunting-Lab"
        },
        {
          name: "GitHub",
          url: "https://github.com/2300031984/AI-Malware-Analysis-Threat-Hunting-Lab"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Ride Sharing Web Application",
      projectDesc: "Built a full-stack ride-sharing platform using React (Vite) and Spring Boot. Designed REST APIs and secured backend with JWT and role-based access (user/driver/admin). Optimized MySQL with indexed queries, pagination, and schema tuning. Delivered comprehensive features for users and drivers including instant/scheduled rides, fare estimates, ride history, reviews/ratings, and emergency contacts.",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://github.com/2300031984/Ride-Sharing-Web-Application"
        },
        {
          name: "GitHub",
          url: "https://github.com/2300031984/Ride-Sharing-Web-Application"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Certifications Section

const certificationsSection = {
  title: emoji("Certifications"),
  subtitle:
    "Professional certifications I've earned",

  achievementsCards: [
    {
      title: "Aviatrix Certified Engineer - Multicloud Network Associate (ACE Associate)",
      subtitle:
        "Certified for multicloud networking expertise. Valid from 2025 to 2028.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Aviatrix Certification",
      footerLink: [
        // Add certification link if available
      ]
    },
    {
      title: "Oracle Certified Foundations Associate - AI Foundations (OCI)",
      subtitle:
        "Certified for AI foundations and Oracle Cloud Infrastructure. Valid from 2025 to 2027.",
      image: require("./assets/images/googleAssistantLogo.png"),
      imageAlt: "Oracle Certification",
      footerLink: [
        // Add certification link if available
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Other Achievements Section

const otherAchievementsSection = {
  title: emoji("Other Achievements"),
  subtitle:
    "Additional achievements and responsibilities",

  achievementsCards: [
    {
      title: "Linguva Skills Certification",
      subtitle: "Certified for advanced proficiency in communication (2024)",
      image: require("./assets/images/image.png"),
      imageAlt: "Linguva Skills Certification",
      footerLink: [
        // Add certification link if available
      ]
    },
    {
      title: "Positions of Responsibility",
      subtitle: "Technical Club Member — KLU Student Activity Centre. Actively contributed as a member of the Technical Club, participating in coding events and workshops.",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "Technical Club",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Legacy achievementSection for backward compatibility (deprecated)
const achievementSection = certificationsSection;

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact"),
  subtitle:
    "Let's get in touch",
  personal_email: "saivarun699@gmail.com", // Personal email
  educational_email: "2300031984cseh1@gmail.com" // Educational email
};

// Coding Platforms Section
const codingPlatforms = {
  display: true,
  title: "Coding Platforms",
  subtitle: "Find me on coding platforms",
  platforms: [
    {
      name: "CodeChef",
      username: "saivarun_12",
      url: "https://www.codechef.com/users/saivarun_12",
      icon: "fas fa-code"
    },
    {
      name: "LeetCode",
      username: "klu2300031984",
      url: "https://leetcode.com/u/klu2300031984/",
      icon: "fas fa-laptop-code"
    },
    {
      name: "HackerRank",
      username: "h2300031984",
      url: "https://www.hackerrank.com/profile/h2300031984",
      icon: "fas fa-terminal"
    }
  ]
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  certificationsSection,
  otherAchievementsSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  codingPlatforms,
  twitterDetails,
  isHireable,
  resumeSection
};

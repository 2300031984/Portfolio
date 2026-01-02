import { Github, Linkedin, Mail, Instagram, Code2, Terminal, Cpu, Database, Shield, Cloud } from 'lucide-react';

export const HERO_CONTENT = {
    greeting: "Hi, I'm Sai Varun",
    title: "Full Stack Developer | Cybersecurity Enthusiast",
    description: "I'm a B.Tech Computer Science student with a strong passion for software development, cloud computing, and cybersecurity. I specialize in building robust full-stack applications and exploring secure networking solutions.",
    resumeLink: "/resume.pdf",
};

export const LINKS = [
    { ref: "home", label: "Home" },
    { ref: "about", label: "About" },
    { ref: "education", label: "Education" },
    { ref: "projects", label: "Projects" },
    { ref: "achievements", label: "Achievements" },
    { ref: "contact", label: "Contact" },
];

export const SOCIAL_LINKS = [
    { href: "https://github.com/2300031984", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/saivarun1/", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:saivarun699@gmail.com", icon: Mail, label: "Email" },
    { href: "https://www.instagram.com/xsaivarun1/", icon: Instagram, label: "Instagram" },
];

export const SKILLS = [
    { name: "Java", icon: Code2 },
    { name: "Spring Boot", icon: Terminal },
    { name: "React", icon: Code2 },
    { name: "JavaScript", icon: Code2 },
    { name: "HTML5", icon: Code2 },
    { name: "CSS3", icon: Code2 },
    { name: "Python", icon: Code2 },
    { name: "Git", icon: Terminal },
    { name: "AWS", icon: Cloud },
    { name: "SQL", icon: Database },
    { name: "Cybersecurity", icon: Shield },
    { name: "Docker", icon: Terminal },
];

export const EDUCATION = [
    {
        degree: "B.Tech in Computer Science and Engineering",
        institution: "Koneru Lakshmaiah Education Foundation, Vijayawada",
        duration: "2023 – 2027",
        description: "Current CGPA: 9.56. Coursework: Data Structures, OOP, DBMS, Networking, Operating Systems",
    },
    {
        degree: "Board of Intermediate Education",
        institution: "Narayana Junior College, Raviryala (Telangana)",
        duration: "2021 – 2023",
        description: "Percentage: 97.1%",
    },
];

export const CERTIFICATIONS = [
    {
        title: "Technology Internship",
        issuer: "Deloitte",
        validity: "2024",
        description: "Completed technology internship program.",
        docLink: "/Portfolio/docs/Deloitte.pdf"
    },
    {
        title: "Aviatrix Certified Engineer - Multicloud Network Associate (ACE Associate)",
        issuer: "Aviatrix",
        validity: "2025 - 2028",
        description: "Certified for multicloud networking expertise.",
        docLink: "/Portfolio/docs/aviatrix.png"
    },
    {
        title: "Oracle Certified Foundations Associate - AI Foundations (OCI)",
        issuer: "Oracle",
        validity: "2025 - 2027",
        description: "Certified for AI foundations and Oracle Cloud Infrastructure.",
        docLink: "/Portfolio/docs/Oracle.png"
    },
    {
        title: "Linguva Skills Certification",
        issuer: "Linguva",
        validity: "2024",
        description: "Certified for advanced proficiency in communication.",
        docLink: "/Portfolio/docs/Lingua.pdf"
    }
];

export const CODING_PLATFORMS = [
    { name: "CodeChef", url: "https://www.codechef.com/users/saivarun_12", handle: "saivarun_12" },
    { name: "LeetCode", url: "https://leetcode.com/u/klu2300031984/", handle: "klu2300031984" },
    { name: "HackerRank", url: "https://www.hackerrank.com/profile/h2300031984", handle: "h2300031984" }
];

export const EXPERIENCES = [
    {
        year: "July 2025 – Sept 2025",
        role: "Network Security Associate Virtual Intern",
        company: "Fortinet (EduSkills, AICTE)",
        description: "Completed comprehensive training on network security fundamentals, firewalls, and intrusion detection systems. Gained hands-on experience with secure networking practices.",
        docLink: "/Portfolio/docs/Fortinet.pdf"
    },
    {
        year: "April 2025 – June 2025",
        role: "Java Full Stack Development Intern",
        company: "EduSkills",
        description: "Designed and implemented backend logic using Spring Boot and built responsive user interfaces with React, HTML, CSS, and Bootstrap.",
        docLink: "/Portfolio/docs/Java Full Stack.pdf"
    }
];

export const PROJECTS = [
    {
        title: "Trinity Saga",
        description: "Designed and developed an immersive, dark-themed web platform that unites the three major cinematic universes: Star Wars, Marvel (MCU), and DC (DCEU). The project serves as a comprehensive visual database, allowing users to explore movies across different timelines and phases in a unified, premium interface.",
        tech: ["HTML5", "CSS3", "JavaScript", "Vercel"],
        liveLink: "https://trinity-saga.vercel.app/",
        githubLink: "https://github.com/2300031984/Trinity-Saga.git",
        image: null
    },
    {
        title: "AI-Driven Malware Analysis Lab",
        description: "Developed a sandbox environment to detonate malware samples and classify threats using ML (85% accuracy). Generated YARA/Sigma rules automatically.",
        tech: ["Python", "Machine Learning", "YARA", "Sandbox"],
        // link property renamed to githubLink for consistency
        githubLink: "https://github.com/2300031984/AI-Malware-Analysis-Threat-Hunting-Lab",
        image: null // Placeholder, can be added later
    },
    {
        title: "Ride Sharing Web App",
        description: "Full-stack ride-sharing platform using React and Spring Boot. Features include role-based access, real-time booking, and optimized MySQL database.",
        tech: ["React", "Spring Boot", "MySQL", "JWT"],
        githubLink: "https://github.com/2300031984/Ride-Sharing-Web-Application",
        image: null
    }
];

export const CONTACT_INFO = {
    email: "saivarun699@gmail.com",
    text: "I am always open to discussing new projects, creative ideas or opportunities to be part of your visions."
}

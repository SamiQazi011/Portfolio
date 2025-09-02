import React from "react";
import "./Certificates.css";
import linkedin from"../Images/download.png";
import CyberSecurity from "../Images/CyberSecurity.jpeg";
import Image2 from "../Images/WhatsApp Image 2025-08-26 at 10.33.45 PM (1).jpeg";
import Image3 from "../Images/WhatsApp Image 2025-08-26 at 10.33.45 PM.jpeg";

const Certificates = () => {
  return (
    <div className="home-container1">
      <div className="certificates-header">
        <h1>My Certificates</h1>
      </div>
      <section className="image-section1">
        <div className="image-wrapper1">
          <img src={CyberSecurity} alt="Cyber Security Certificate" />
          <p className="mission-description1">
            Successfully completed a certification in Cyber Security, 
            covering key areas such as network security, ethical hacking,
            malware analysis, risk management, and data protection. 
            This certification has enhanced my ability to identify
            vulnerabilities, secure systems, and implement preventive
            measures against cyber threats.
          </p>
        </div>
        <div className="image-wrapper1">
          <img src={Image2} alt="About Me - QA Experience" />
          <p className="mission-description1">
            Successfully completed a professional training focused on
            essential workplace skills, corporate ethics, communication,
            and professional development. This program enhanced 
            adaptability, teamwork, and leadership qualities
            required to excel in dynamic corporate environments.
          </p>
        </div>
        <div className="image-wrapper1">
          <img src={Image3} alt="QA Skills Certificate" />
          <p className="mission-description1">
           Successfully attended the International Conference on Reconciling 
           Required and Acquired Learning, where key discussions focused on 
           bridging the gap between academic knowledge and practical industry
           skills. The conference provided valuable exposure to global 
           perspectives, innovative practices, and strategies for aligning
           professional growth with evolving industry demands.
          </p>
        </div>
      </section>
       <a
        href="https://www.linkedin.com/in/rabeea-kainat-2472a424b?"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        <img src={linkedin} alt="WhatsApp Icon" className="whatsapp-icon" />
      </a>
    </div>
  );
};

export default Certificates;

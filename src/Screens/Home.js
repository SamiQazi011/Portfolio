import React from "react";
import "./HomeScreen.css"; // Import CSS file
import FirstImage from "../Images/Profile.webp";
import Image1 from "../Images/image1.webp";
import Image2 from "../Images/image2.jpg";
import Image3 from "../Images/image3.webp";
import linkedin from"../Images/download.png";

const HomeScreen = () => {
  return (
    <div className="home-container">
      {/* First Image Section */}
      <div
        className="first-image-container"
        style={{ backgroundImage: `url(${FirstImage})` }}
      >
         <div className="overlay"></div> 
        <div className="text-overlay">
          <h1>Rabeea Kainat</h1>
          <h2>Your journey to excellence in QA</h2>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>

      {/* Three Other Images Section */}
      <section className="image-section">
        <div className="image-wrapper">
          <img src={Image1} alt="QA Project 1" />
         
          <h1 className="mission-title">My Mission</h1>
          <p className="mission-description">My mission as a Software QA is to ensure high-quality, reliable, and user-friendly software. I strive to detect and prevent defects early, improve testing processes, and collaborate with teams for seamless functionality. With a user-centric approach and a commitment to continuous learning, I aim to enhance software performance and deliver a flawless experience.</p>
       
        </div>
        <div className="image-wrapper">
          <img src={Image2} alt="QA Project 2" />
          <h1 className="mission-title">About Me</h1>
          <p className="mission-description">I’m Rabeea Kainat, a *Software QA Engineer with 3 years of experience* in *manual and automation testing, Agile methodologies, documentation, and game testing*. I have a strong understanding of software quality processes and enjoy identifying bugs, improving workflows, and ensuring smooth user experiences. With hands-on experience in game testing and Agile environments, I am always eager to learn and adapt to new challenges in the QA field.</p>
       
        </div>
        <div className="image-wrapper">
          <img src={Image3} alt="QA Project 3" />
          <h1 className="mission-title">Skills</h1>
          <p className="mission-description">I specialize in *manual and automation testing, including **functional, regression, and API testing. Experienced in **Agile and Scrum, I ensure seamless collaboration and quality assurance. Skilled in **game testing, test planning, and defect management, I use **Zentao, JIRA* for bug tracking and *Cypress, JMeter, Postman, and TestCase Studio* for automation.</p>
       
        </div>
      </section>

      {/* WhatsApp Button */}
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

export default HomeScreen;

import React from "react";
import styled from "styled-components";
import linkedin from "../Images/download.png";
import profileImage from "../Images/AboutMe.jpg"; // Importing the profile image

// Main container with black background
const AboutMeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  padding: 60px;
  min-height: 120vh;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row; /* Ensures image is on the right in web view */
  width: 100%;
  max-width: 1200px;
  align-items: center;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 1024px) {
    flex-direction: column; /* Stack elements on smaller screens */
    text-align: center;
  }
`;

// Image container (Always stays full-size)
const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end; 
  align-items: center;
  @media (max-width: 1024px) {
    justify-content: center;
    order: -1; 
    width: 100%;
  }
`;
const ProfileImage = styled.img`
  width: 100%;
  max-width: 450px;
  height: 450px ;
  border-radius: 10px;
  object-fit: cover;
  @media (max-width: 1024px) {
    max-width: 100%; /* Ensures image takes full width */
  }
`;
const TextContainer = styled.div`
  flex: 1;
  max-width: 70%;
  text-align: left;
  h2 {
    font-size: 36px;
    margin-bottom: 15px;
    color: white;
  }
  p {
    font-size: 20px;
    line-height: 1.6;
  }

  @media (max-width: 1024px) {
 
    max-width: 100%;
    text-align: justify; 
  }
`;

const LinkedInButton = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    transition: transform 0.3s ease-in-out;
  }
  img:hover {
    transform: scale(1.1);
  }
`;
const AboutMe = () => {
  return (
    <AboutMeContainer id="aboutme">
      <ContentContainer>
        <TextContainer>
          <h2>About Me</h2>
          <p>
            Welcome! I'm Rabeea Kainat, a Middle QA Engineer at Parashoot with
            3 years of experience in software quality assurance. Specializing in 
            Agile Scrum methodologies, I ensure seamless software performance through meticulous testing. 
            Proficient in manual and automation testing, I have hands-on experience with Cypress, JMeter, 
            regression testing, API testing, and game testing. My expertise extends to website testing, 
            ensuring flawless user experiences. Passionate about delivering high-quality software, 
            I thrive in collaborative environments and continuously enhance my skills. 
            Thank you for visiting my portfolio—I look forward to connecting and exploring 
            new opportunities for growth!
          </p>
        </TextContainer>
        <ImageContainer>
          <ProfileImage src={profileImage} alt="Rabeea Kainat" />
        </ImageContainer>
      </ContentContainer>
      <LinkedInButton 
        href="https://www.linkedin.com/in/rabeea-kainat-2472a424b" 
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedin} alt="LinkedIn Profile" />
      </LinkedInButton>
    </AboutMeContainer>
  );
};
export default AboutMe;
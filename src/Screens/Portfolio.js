import React from "react";
import styled from "styled-components";
import linkedin from "../Images/download.png";
import Farmtohome from "../Images/FarmtoHome.png";
import Mybaheria from "../Images/My Baheria.png";
import Nextpower from "../Images/Next power it.png";
import ShipAfrica from "../Images/ShipAfricas.jpg";
import Tamimi from "../Images/tamimi1.png";

const PortfolioContainer = styled.div`
  text-align: center;
  background-color: #f9f9f9;
  padding: 0px;
`;

const Portfoliotext = styled.div`
  // padding: 70px;
  // font-size: 40px;
  // font-weight: bold;
  // background-color: black;
  // color: white;
  padding:70px;
font-size: 45px;  /* Corrected */
font-weight: bold;
background-color: black;
color:white;
`;

/* First two images in one row */
const FirstRowContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const ImageWrapper = styled.a`
  width: 50%;
  height: auto; /* Changed from fixed height */
  display: flex;
  flex-direction: column; /* Stack image and text vertically */
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  text-decoration: none; /* Remove underline from link */

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;


const FirstRowImage = styled.img`
  width: 100%;
  height: 250px;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
`;

const PortfolioImages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  gap: 20px;
`;

const PortfolioImageWrapper = styled.a`
  width: 50%;
  text-align: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const PortfolioImage = styled.img`
  width: 100%;
  height: 250px;
  border: 2px solid black;
  border-radius: 10px;
`;

const PortfolioText = styled.p`
  font-size: 16px;
  margin-top: 10px;
  font-weight: bold;
  color: #333;
`;

const Portfolio = () => {
  return (
    <PortfolioContainer id="portfolio">
      <Portfoliotext>Portfolio</Portfoliotext>

      {/* First two images (same size, no center border) */}
      <FirstRowContainer>
        <ImageWrapper href="https://farmtohome.com.pk/" target="_blank">
          <FirstRowImage src={Farmtohome} alt="Project 1" />
          <PortfolioText>Farm to Home</PortfolioText>

        </ImageWrapper>
        <ImageWrapper href="https://www.mybahria.com.pk/" target="_blank">
          <FirstRowImage src={Mybaheria} alt="Project 2" />
          <PortfolioText>My Baheria</PortfolioText>

        </ImageWrapper>
      </FirstRowContainer>

      {/* Remaining Images (One per row) */}
      <PortfolioImages>
        <PortfolioImageWrapper href="https://nextpowerit.com/" target="_blank">
          <PortfolioImage src={Nextpower} alt="Project 3" />
          <PortfolioText>Next Power IT</PortfolioText>
        </PortfolioImageWrapper>
        <PortfolioImageWrapper href="https://shipafrica.io/" target="_blank">
          <PortfolioImage src={ShipAfrica} alt="Project 4" />
          <PortfolioText>Ship Africa</PortfolioText>
        </PortfolioImageWrapper>
        <PortfolioImageWrapper href="http://www.tamimisolutions.com/" target="_blank">
          <PortfolioImage src={Tamimi} alt="Project 5" />
          <PortfolioText>Tamimi</PortfolioText>
        </PortfolioImageWrapper>
      </PortfolioImages>

      {/* LinkedIn Button */}
      <a
        href="https://www.linkedin.com/in/rabeea-kainat-2472a424b"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        <img src={linkedin} alt="LinkedIn Icon" className="whatsapp-icon" />
      </a>
    </PortfolioContainer>
  );
};

export default Portfolio;

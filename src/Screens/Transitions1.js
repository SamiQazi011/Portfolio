import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import linkedin from "../Images/download.png";
import Farmtohome from "../Images/FarmtoHome.png";
import Mybaheria from "../Images/My Baheria.png";
import Nextpower from "../Images/Next power it.png";
import ShipAfrica from "../Images/ShipAfricas.jpg";
import Tamimi from "../Images/tamimi1.png";

const PortfolioContainer = styled.div`
  background-color: #f9f9f9;
  padding: 50px 0;
  text-align: center;
`;

const Portfoliotext = styled.div`
  font-size: 45px;
  font-weight: bold;
  background-color: black;
  color: white;
  padding: 20px;
  text-align: center;
`;

const PortfolioImages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-top: 30px;
`;

const PortfolioImageWrapper = styled.a`
  width: 50%;
  text-align: center;
  opacity: 0; /* Initially hidden */
  transform: translateY(100px); /* Start off-screen */
  transition: opacity 1s ease-out, transform 1s ease-out;

  &.visible {
    opacity: 1;
    transform: translateY(0); /* Moves up */
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

const ScrollPortfolioItem = ({ href, src, alt, text }) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Triggers when 20% is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <PortfolioImageWrapper
      ref={ref}
      href={href}
      target="_blank"
      className={isVisible ? "visible" : ""}
    >
      <PortfolioImage src={src} alt={alt} />
      <PortfolioText>{text}</PortfolioText>
    </PortfolioImageWrapper>
  );
};

const Transitions1 = () => {
  return (
    <PortfolioContainer id="portfolio">
      <Portfoliotext>Portfolio</Portfoliotext>

      <PortfolioImages>
        <ScrollPortfolioItem href="https://farmtohome.com.pk/" src={Farmtohome} alt="Project 1" text="Farm to Home" />
        <ScrollPortfolioItem href="https://www.mybahria.com.pk/" src={Mybaheria} alt="Project 2" text="My Baheria" />
        <ScrollPortfolioItem href="https://nextpowerit.com/" src={Nextpower} alt="Project 3" text="Next Power IT" />
        <ScrollPortfolioItem href="https://shipafrica.io/" src={ShipAfrica} alt="Project 4" text="Ship Africa" />
        <ScrollPortfolioItem href="http://www.tamimisolutions.com/" src={Tamimi} alt="Project 5" text="Tamimi" />
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

export default Transitions1;

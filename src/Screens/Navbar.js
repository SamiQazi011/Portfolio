import React, { useState, useEffect } from "react";
import styled from "styled-components";

const NavbarContainer = styled.div`
  background-color: ${({ scrolled }) => (scrolled ? "black" : "transparent")};
  transition: background-color 0.3s ease; /* Smooth background transition */
  padding: 10px 20px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const StyledBrand = styled.a`
  text-decoration: none;
  color: white;
  font-size: 18px;
  // font-weight: bold;
  margin-right:110px;
  position: absolute;
  right: 20px; /* Pushes it to the right corner */
  top: 50%;
  transform: translateY(-50%); /* Centers it vertically */
  
  &:hover {
    color: #f06595;
  }
`;

const NavbarLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left:50px;
  align-item:space-between;
  color: white;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    background-color: black;
    width: 100%;
    padding: 10px 0;
  }
`;
const StyledLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 18px;
    text-underline-offset: 10px;
  padding: 20px;
  &:hover {
    // color: #f06595;
// padding:10px;
    text-decoration: underline;
    // color:black;
  }
`;
const MenuButton = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    font-size: 24px;
    color: white;
    cursor: pointer;
  }
`;
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <NavbarContainer scrolled={scrolled}>
      <MenuButton onClick={() => setIsOpen(!isOpen)}>☰</MenuButton>
      <NavbarLinks isOpen={isOpen}>
        <StyledLink href="/">Home</StyledLink>
        <StyledLink href="portfolio">Portfolio</StyledLink>
        <StyledLink href="aboutme">About Me</StyledLink>
        <StyledLink href="aboutme">Certificates</StyledLink>
      </NavbarLinks>
      {/* <StyledLink href="callnow">Call Now</StyledLink> */}
      <StyledBrand href="/">Rabeea Kainat</StyledBrand>
    </NavbarContainer>
  );
};
export default Navbar;
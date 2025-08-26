import React from "react";
import styled from "styled-components";

const CallNowContainer = styled.div`
  background-color: #333;
  color: white;
  padding: 40px 20px;
  text-align: center;
`;

const CallNow = () => {
  return (
    <CallNowContainer id="callnow">
      <h2>Call Now</h2>
      <p>Contact me for any QA-related work!</p>
      <a href="tel:+123456789" style={{ color: "#f06595", fontSize: "18px" }}>
        +123456789
      </a>
      <a href="https://wa.me/1234567890" target="_blank" className="whatsapp-btn">
        <i className="fab fa-whatsapp"></i>
      </a>
    </CallNowContainer>
  );
};

export default CallNow;

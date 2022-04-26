import React from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";

const WelcomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: vmax;
  padding-top: 30px;
`;

const LandingContent: React.FC = () => {
  return (
    <>
      <WelcomeWrapper>
        Welcome to my site!
        <div>
          This React-based app was done on the purpose of recruitment process
          for a NextAI's Frontend developer position.
        </div>
      </WelcomeWrapper>
      <Footer />
    </>
  );
};

export default LandingContent;

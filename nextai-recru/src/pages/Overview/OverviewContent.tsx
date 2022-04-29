import styled from "styled-components";
import Footer from "../../components/Footer";

const WelcomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 90vh;
  padding-top: 30px;
  color: white;
  overflow-y: hidden;
`;

const ContentWrapper = styled.div`
  overflow-y: scroll;
  max-height: 100vh;
  width: 80%;
  font-family: "Raleway";
  text-indent: 20px;
  &::-webkit-scrollbar {
    width: 20px;
  }

  &::-webkit-scrollbar-track {
    background-color: #e4e4e4;
    border-radius: 100px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 100px;
    border: 5px solid transparent;
    background-clip: content-box;
    background-color: #8070d4;
  }
`;

const Title = styled.h1`
  font-family: "Philosopher", sans-serif;
  color: white;
`;

const EmphasisedText = styled.span`
  font-weight: 600;
`;

const OverviewContent: React.FC = () => {
  return (
    <>
      <WelcomeWrapper>
        <Title>Welcome to my site!</Title>
        <ContentWrapper>
          This React-based app was done on the purpose of recruitment process
          for a NextAI's Frontend developer position.
          Things I used during the development of this app: React, React Hooks (useState, useMemo, useContext, custom Hooks) TypeScript, React Router, async/await pattern, a lot of CSS and - most importantly - <EmphasisedText>OpenAI API!</EmphasisedText>
          This project was a great opportunity for me to both put my skills to a challenge as well as to practice some of the more specific React Hooks (for example useMemo, which I used for optimization concerns and useCallback, which didn't eventually appear in the code but which was a thing I thought about using in one place)
          and practice a bunch of interesting design patterns considering contexts and data flow.
        </ContentWrapper>
      </WelcomeWrapper>
      <Footer />
    </>
  );
};

export default OverviewContent;

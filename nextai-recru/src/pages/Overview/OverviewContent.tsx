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

const StyledParagraph = styled.div`
  text-indent: 20px;
  font-size: 16px;
`;

const ContentWrapper = styled.div`
  overflow-y: scroll;
  max-height: 100vh;
  width: 75%;
  font-family: "Raleway";
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
        <Title>Welcome to my App!</Title>
        <ContentWrapper>
          <StyledParagraph>
            This React-based app was done on the purpose of recruitment process
            for a NextAI's Frontend developer position. Things I used during the
            development of this app: React, React Hooks (useState, useMemo,
            useContext, custom Hooks) TypeScript, React Router, async/await
            pattern, ant.design, a lot of CSS and - most importantly -{" "}
            <EmphasisedText>OpenAI API! </EmphasisedText>
            This project was a great opportunity for me to both put my skills to
            a challenge as well as to practice some of the more specific React
            Hooks (for example useMemo, which I used for optimization concerns
            and useCallback, which didn't eventually appear in the code but
            which was a thing I thought about using in one place) and practice a
            bunch of interesting design patterns considering contexts and data
            flow.
          </StyledParagraph>
          <StyledParagraph>
            The OpenAI itself was an amazing tool to work with. Even though
            AI-driven solutions are more and more common in our day-to-day
            lifes, we tend not to consciously notice their appearance and
            therefore we usually have no clue about what such an engine can do
            for us. Keeping that in mind I approached the OpenAI API with a
            little bit of "safe-distance" as I knew that without me being inside
            a "ML/AI side of IT" some things might be a huge discovery for me.
            And I wasn't wrong. It really shocked me how many different things
            this API could provide - and this was the hardest part of the whole
            task: to choose something from the broad variety of cool things.
          </StyledParagraph>
          <StyledParagraph>
            Initially I had like 3-4 ideas of what could I use to fuel my app,
            and for quite some time I was about to do a thing I called "Moody
            Chatter", which would combine two API queries: the one generating
            chat respones for a given prompt and the second one, which would
            determine the mood of the response and change site styling
            accordingly. And, in my opinion, this could've been a great project
            if only the I knew how to properly use the "mood endpoint". I don't
            know if this is the case with endpoint itself or was it due to my
            prompt, but I've always been getting some shades of color red, no
            matter if the message was happy, sad, cheerful or depressive. That's
            why I scraped that idea.
          </StyledParagraph>
          <StyledParagraph>
            At the same moment I decided that I won't be using the mood API I
            looked at the book I'm reading at the moment ("The Golden Pavillion"
            by Yukio Mishima, this is quite a decent writing, check it out!) and
            I thought "I wonder if this could generate some philosophy for me".
            And that was the moment I really got astounded. This thing is so
            good at creating philosophical quotes that it even understands the
            context of a provided philosopher! It's in no way perfect though, as
            it tends to be quite "extreme" in it's generations and it works
            better with more modern philosophers but It's still impressive work
            for sure. At that point I decided to give a mood API one more try,
            this time with the generated philosophical quotes, but I ended up
            getting the same results (shades of red) so it was the definitive
            end to the dynamic styling approach. I've decided to make a list selector
            for a Philosophers in the app because as I was testing the capabalities of
            the API I found out that there are some philosophers that don't work that well
            whilst there are some that work extraordinarly good.
          </StyledParagraph>
          <StyledParagraph>
            Overall I think that even though this is quite a simple, two-paged
            app I had the opportunity to work with some really cool and useful
            tools and technologies and I'm satisfied with a result and things I
            practiced.
          </StyledParagraph>
          <StyledParagraph>
            When it comes to some thoughts about AI itself I got to admit that
            seeing it in work was quite a developing experience which made me
            think that when I'll get some spare time I'll definetly want to try
            some AI stuff myself.
          </StyledParagraph>
          <StyledParagraph>
            There were also some things that made me question my current aproach
            to my work and development as a software developer as I've also
            fiddled with the engine responsible for code generation and
            translation (I believe it was called Codex?) and I was expecting
            that it would work well on some minor code pieces, generally
            speaking more like an interesting toy than a tool and I was so
            wrong. When I played with it in playground and it generated code I
            was astonished to see how good the code itself was. I can say that
            it was better than (for sure!) mine when I was starting to learn how
            to code or even when I was trying out my skills for the first times
            in some minor projects. This made me dig deeper into the topic and I
            even found out that there are some projects (also using OpenAI)
            which generate working React components (with states etc.)! I think
            that, considering this and believing that this is just a beggining,
            a work of a software developer will become much more "abstract" than
            it is nowadays because even if there will be AI capable of
            generating the codebase, there will always be a need for a higher
            instance which will grant the abstract layer over the project.
            Therefore I'm starting to think that my approach to learning new
            things and technologies should change with time.
          </StyledParagraph>
          <StyledParagraph>
            To sum everything up: I'm really happy that I could prepare this project as it was with a great value for me 
            (also outside of the professional side of it) and it stirred up my zeal to learn new things even more as well as 
            inspired to tackle the AI side of IT (hopefully in some friendly, professional environment 😉)! I hope you'll enjoy the app.
          </StyledParagraph>
        </ContentWrapper>
      </WelcomeWrapper>
      <Footer />
    </>
  );
};

export default OverviewContent;

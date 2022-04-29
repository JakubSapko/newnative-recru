import { Image } from "antd";
import styled from "styled-components";
import { useApiResponseContext } from "./components/ApiResponseContext";
import "./global.css";

// .quote {
//   font-size: 50px;
//   font-family: "Philosopher", sans-serif;
//   margin-top: 5%;
//   padding-top: 9%;
//   width: 80%;
//   padding-left: 5%;
// }
const Philosophers = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 50px;
  font-family: "Philosopher", sans-serif;
`;

const Quote = styled.p`
  color: white;
`;

const QuoteWrapper = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  margin-top: 1%;
  margin-left: 1%;
  margin-right: 1%;
`;

const PhotoWrapper = styled.div`
  display: flex;
  flex: 1;
  margin-right: 10%;
  justify-content: center;
  align-items: center;
`;

const QuoteFooter = styled.p`
  margin-left: auto;
  margin-bottom: -3%;
  margin-right: 7%;
  color: white;
`;

const PhilosopherSlideMock: React.FC = () => {
  const { data } = useApiResponseContext();

  
  if (!data) {
    return null;
  }

  const { philosopher, photo, quote } = data;

  return (
    <Philosophers>
      <QuoteWrapper>
        <Quote>{quote}</Quote>
        <QuoteFooter className="quoteFooter"> -{philosopher}</QuoteFooter>
      </QuoteWrapper>
      <PhotoWrapper>
        <Image preview={false} alt="plato" src={`assets/${photo}`} />
      </PhotoWrapper>
    </Philosophers>
  );
};

export default PhilosopherSlideMock;

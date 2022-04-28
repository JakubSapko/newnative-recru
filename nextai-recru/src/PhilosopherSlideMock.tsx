import {Image } from 'antd'
import { useApiResponseContext } from "./components/ApiResponseContext";
import "./global.css";

const PhilosopherSlideMock: React.FC = () => {
  const {data } = useApiResponseContext();

  if (!data) {
    return null;
  }

  const {philosopher, photo, quote } = data;


  return (
    <div className="">
      <p className="quote">{quote}</p>
      <p className="quoteFooter"> -{philosopher}</p>
      <Image alt="plato" src={`assets/${photo}`} className="photo" width={500} height={500} />
    </div>
  );
};

export default PhilosopherSlideMock;

import { useApiContext } from "../../components/ApiContext";
import { ApiResponseContextProvider } from "../../components/ApiResponseContext";
import Footer from "../../components/Footer";
import PhilosopherSlideMock from "../../PhilosopherSlideMock";
import MainForm from "./MainForm";
import Unauthorized from "./Unauthorized";



const MainAppContent: React.FC = () => {
  const { apiKey } = useApiContext();

  return (
    <>
      {apiKey ? (
        <ApiResponseContextProvider>
          <MainForm />
          <PhilosopherSlideMock />
        </ApiResponseContextProvider>
      ) : (
        <Unauthorized />
      )}
      <Footer />
    </>
  );
};

export default MainAppContent;

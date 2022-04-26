import { useApiContext } from "../../components/ApiContext";
import Footer from "../../components/Footer";
import AcessedApp from "./AcessedApp";
import Unauthorized from "./Unauthorized";

const MainAppContent: React.FC = () => {
  const { apiKey } = useApiContext();

  console.log("test");
  
  return (
    <>
      {apiKey ? <AcessedApp /> : <Unauthorized />}
      <Footer />
    </>
  );
};

export default MainAppContent;

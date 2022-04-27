import { useApiContext } from "../../components/ApiContext";
import Footer from "../../components/Footer";
import AcessedApp from "./AcessedApp/AcessedApp";
import Unauthorized from "./Unauthorized";

const MainAppContent: React.FC = () => {
  const { apiKey } = useApiContext();

  return (
    <>
      {apiKey ? <AcessedApp /> : <Unauthorized />}
      <Footer />
    </>
  );
};

export default MainAppContent;

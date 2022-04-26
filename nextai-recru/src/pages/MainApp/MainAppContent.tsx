import { useState } from "react";
import { useApiContext } from "../../components/ApiContext";
import Footer from "../../components/Footer";
import AcessedApp from "./AcessedApp";
import Unauthorized from "./Unauthorized";

const MainAppContent: React.FC = () => {

  const {apiKey} = useApiContext();


  const determineViewBasedOnKey = () => {
    console.log(apiKey);
    if (apiKey) {
      return <AcessedApp/>;
    }
    else {
      return <Unauthorized/>;
    }
  }
    return (
      <>
        {determineViewBasedOnKey()}
        <Footer />
      </>
    );
  };
  
  export default MainAppContent;
  
import React from "react";
import "antd/dist/antd.css";
import SiteLayout from "../../components/SiteLayout";
import NavMenu from "../../components/NavMenu";
import MainAppContent from "./MainAppContent";
import { ApiContextProvider } from "../../components/ApiContext";

const MainApp: React.FC = () => {
  return (
    <ApiContextProvider>
      <SiteLayout Header={<NavMenu />} Content={<MainAppContent />} />
    </ApiContextProvider>
  );
};

export default MainApp;

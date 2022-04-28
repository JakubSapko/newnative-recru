import React from "react";
import "antd/dist/antd.css";
import SiteLayout from "../../components/SiteLayout";
import NavMenu from "../../components/NavMenu";
import MainAppContent from "./MainAppContent";

const MainApp: React.FC = () => {
  return (
      <SiteLayout Header={<NavMenu />} Content={<MainAppContent />} />
  );
};

export default MainApp;

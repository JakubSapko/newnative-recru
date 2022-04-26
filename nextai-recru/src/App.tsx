import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";



const MainApp = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* <Route path="overview" element={<Overview />} />
          <Route path="login" element={<Login />} /> */}
        </Routes>
      </BrowserRouter>
  );
};

export default MainApp;

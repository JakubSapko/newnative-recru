import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Overview from "./pages/Overview/Overview";
import MainApp from "./pages/MainApp/MainApp";



const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="overview" element={<Overview />} />
          <Route path="app" element={<MainApp />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;

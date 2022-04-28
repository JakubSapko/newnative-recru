import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Overview from "./pages/Overview/Overview";
import MainApp from "./pages/MainApp/MainApp";
import PhilosopherSlideMock from "./PhilosopherSlideMock";
import { ApiContextProvider } from "./components/ApiContext";

const App = () => {
  return (
    <ApiContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="overview" element={<Overview />} />
          <Route path="app" element={<MainApp />} />
          <Route path="philo" element={<PhilosopherSlideMock />} />
        </Routes>
      </BrowserRouter>
    </ApiContextProvider>
  );
};

export default App;

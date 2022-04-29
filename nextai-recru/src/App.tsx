import { BrowserRouter, Routes, Route } from "react-router-dom";
import Overview from "./pages/Overview/Overview";
import MainApp from "./pages/MainApp/MainApp";
import { ApiContextProvider } from "./components/ApiContext";

const App = () => {
  return (
    <ApiContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="app" element={<MainApp />} />
        </Routes>
      </BrowserRouter>
    </ApiContextProvider>
  );
};

export default App;

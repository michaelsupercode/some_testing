import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Header } from "./components/Header/Header";
import { ProjectDetails } from "./pages/ProjectDetails/ProjectDetails";
import { Projects } from "./pages/Projects/Projects";
import { darkModeContext, iconStyleContext } from "./context/Context";
import { useState } from "react";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "wrapper dark" : "wrapper"}>
      <darkModeContext.Provider value={{ darkMode, setDarkMode }}>
        <iconStyleContext.Provider
          value={{
            light: "hsl(0, 0%, 100%)",
            dark: "hsl(0, 0%, 8%)",
            height: "25px",
            width: "25px"
          }}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetails />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </iconStyleContext.Provider>
      </darkModeContext.Provider>
    </div>
  );
};

export default App;

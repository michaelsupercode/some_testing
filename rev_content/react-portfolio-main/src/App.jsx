import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./components/pages/home/Home.jsx";
import Header from "./components/shared/header/Header";
import About from "./components/pages/aboutMe/About";
import Skills from "./components/pages/skills/Skills";
import Contact from "./components/pages/contact/Contact";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

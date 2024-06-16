import React from "react";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Techstack from "./pages/Techstack/Techstack";
import Project from "./pages/Projects/Project";
import Education from "./pages/Education/Education";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import MobileNav from "./components/MobileNav/MobileNav";
import "./App.css";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";

function App() {
  const [theme] = useTheme();
  return (
    <div className="app">
      <div id={theme}>
        <MobileNav />
        <Layout />
        <About />
        <Education />
        <Techstack />
        <Project />
        <Contact />
        <Footer />
      </div>
      <ScrollToTop smooth style={{ borderRadius: "80px" }} />
    </div>
  );
}

export default App;

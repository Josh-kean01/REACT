import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./routes/About";
import Home from "./routes/Home";
import Project from "./routes/Project";
import style from "./style.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <div className="asde">
        <Header
          setCurrentPage={setCurrentPage}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />
        {currentPage === "home" && <Home />}
        {currentPage === "about" && <About />}
        {currentPage === "project" && <Project />}
//         <Footer />
      </div>
    </div>
  );
};

export default App;

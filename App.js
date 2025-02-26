import React, { useState } from "react";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import ToggleTheme from "./ToggleTheme";
import "./index.css"; // Import styles for dark mode

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <ToggleTheme toggleTheme={toggleTheme} />
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

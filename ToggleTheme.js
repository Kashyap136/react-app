import React from "react";

function ToggleTheme({ toggleTheme }) {
  return (
    <button onClick={toggleTheme}>
      Toggle Dark Mode
    </button>
  );
}

export default ToggleTheme;

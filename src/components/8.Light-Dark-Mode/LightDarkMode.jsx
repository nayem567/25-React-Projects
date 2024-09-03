import React from "react";
import "./theme.css";
import useLocalStorage from "./useLocalStorage";

const LightDarkMode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const hanldeBtn = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  console.log(theme);

  return (
    <div className="dark-mode-container" data-theme={theme}>
      <p>Hello World</p>
      <button onClick={hanldeBtn}>Switch Theme</button>
    </div>
  );
};

export default LightDarkMode;

import React, { useEffect, useState } from "react";
import { ReactComponent as Sun } from "../assets/icon-sun.svg";
import { ReactComponent as Moon } from "../assets/icon-moon.svg";
import "./toggleIcon.css";

export default function ToggleSwitch() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const defaultDark = storedTheme === "dark" || (storedTheme === null && prefersDark);
    setIsDarkMode(defaultDark);
  }, []);

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
    setIsDarkMode(true);
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
    setIsDarkMode(false);
  };

  const toggleTheme = () => {
    if (isDarkMode) {
      setLight();
    } else {
      setDark();
    }
  };

  return (
    <div className="toggleSwitchContainer">
      <div onClick={toggleTheme}>{isDarkMode ? <Moon /> : <Sun />}</div>
    </div>
  );
}

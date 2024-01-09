import React from "react";
import { useTheme } from "./ThemeContext";

const ThemeToggleBtn: React.FC = (): JSX.Element => {
  const { isDarkMode, toggleTheme } = useTheme();

  const lightMode = <span class="material-symbols-outlined">light_mode</span>;
  const darkMode = <span class="material-symbols-outlined">dark_mode</span>;
  return (
    <button aria-label="Toggle theme" onClick={toggleTheme}>
      {isDarkMode ? lightMode : darkMode}
    </button>
  );
};

export default ThemeToggleBtn;

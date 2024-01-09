import React from "react";

const App: React.FC = (): JSX.Element => {
  const [isDark, setIsDark] = React.useState<boolean>(false);

  const lightThemeIcon = (
    <span className="material-symbols-outlined">light_mode</span>
  );
  const darkThemeIcon = (
    <span className="material-symbols-outlined">dark_mode</span>
  );

  const toggleTheme = (): void => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };
  return (
    <div>
      <button aria-label="Toggle theme" onClick={toggleTheme}>
        {isDark ? lightThemeIcon : darkThemeIcon}
      </button>
    </div>
  );
};

export default App;

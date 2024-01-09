import React from "react";

type ThemeProviderTypes = {
  children: string | JSX.Element | JSX.Element[] | React.ReactNode;
};

type ThemeContexttypes = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

export const ThemeContext = React.createContext<ThemeContexttypes>({
  isDarkMode: false,
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<ThemeProviderTypes> = ({
  children,
}: ThemeProviderTypes): JSX.Element => {
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false);

  const toggleTheme = (): void => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);

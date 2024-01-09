import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggleBtn from "./context/ThemeContextBtn";
import Main from "./components/Main/Main";

const App: React.FC = (): JSX.Element => {
  return (
    <ThemeProvider>
      <ThemeToggleBtn />
      <Main />
    </ThemeProvider>
  );
};
export default App;

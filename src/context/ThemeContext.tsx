import React from "react";

type ThemeContextTypes = {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
};

const ThemeContext: React.FC = ({
  children,
}: ThemeContextTypes): JSX.Element => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
};

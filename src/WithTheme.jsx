import React, { createContext, useContext, useReducer, useEffect } from 'react';

export const ThemeContext = createContext();

const lightTheme = {
  backgroundColor: '#ffffff',
  color: '#213547',
};

const darkTheme = {
  backgroundColor: '#242424',
  color: 'rgba(255, 255, 255, 0.87)',
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      const newTheme = state === lightTheme ? darkTheme : lightTheme;
      localStorage.setItem('theme', JSON.stringify(newTheme));
      return newTheme;
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }) => {
  const storedTheme = localStorage.getItem('theme');
  const initialTheme = storedTheme ? JSON.parse(storedTheme) : lightTheme;

  const [theme, dispatch] = useReducer(themeReducer, initialTheme);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

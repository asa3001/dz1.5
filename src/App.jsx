import React, { useEffect } from 'react';
import { useTheme } from './WithTheme';
import './App.css';

function App() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    console.log('Theme changed:', theme);
    console.log('Computed background color:', window.getComputedStyle(document.body).backgroundColor);
  }, [theme]);

  return (
    <div className="app-container" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <button onClick={toggleTheme} className="btn">
        Toggle Theme
      </button>
      <h1>Content</h1>
    </div>
  );
}

export default App;

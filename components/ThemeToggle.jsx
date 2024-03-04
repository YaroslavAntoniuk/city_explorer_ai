'use client';
import { useState } from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

const themes = {
  lofi: 'lofi',
  luxury: 'luxury',
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(themes.lofi);

  const toggleTheme = () => {
    const newTheme = theme === themes.luxury ? themes.lofi : themes.luxury;

    document.documentElement.setAttribute('data-theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <button onClick={toggleTheme} className="btn btn-sm btn-circle btn-outline">
      {theme === themes.lofi ? (
        <BsMoonFill className="h-4 w-4" />
      ) : (
        <BsSunFill className="h-4 w-4" />
      )}
    </button>
  );
};

export default ThemeToggle;

import React, { useEffect, useState } from 'react';
import { FaLightbulb } from 'react-icons/fa6';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    // <button onClick={toggleTheme} className='outline-none'>
    //   {theme === 'dark' ? <FaLightbulb/> : <FaLightbulb/>} 
    // </button>

    <FaLightbulb onClick={toggleTheme} size={20} className={`${theme === 'dark' ? 'text-yellow-400': 'text-black'} cursor-pointer`} />
  );
};

export default ThemeToggle;

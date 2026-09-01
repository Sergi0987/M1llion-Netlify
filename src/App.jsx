import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('m1_theme') || 'dark');

  useEffect(() => {
    localStorage.setItem('m1_theme', theme);
  }, [theme]);

  // The tab icon sits in the browser chrome, not on the page, so it follows the
  // browser's colour scheme rather than the site's own light/dark toggle — a
  // black mark on a dark tab bar would simply disappear.
  useEffect(() => {
    const link = document.getElementById('favicon');

    if (!link || typeof window.matchMedia !== 'function') {
      return undefined;
    }

    const query = window.matchMedia('(prefers-color-scheme: dark)');

    function apply() {
      link.href = query.matches ? '/favicon-dark.png' : '/favicon.png';
    }

    apply();
    query.addEventListener('change', apply);

    return () => query.removeEventListener('change', apply);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home theme={theme} setTheme={setTheme} />} />
    </Routes>
  );
}

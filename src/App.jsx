import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('m1_theme') || 'dark');

  useEffect(() => {
    localStorage.setItem('m1_theme', theme);
  }, [theme]);

  return (
    <Routes>
      <Route path="/" element={<Home theme={theme} setTheme={setTheme} />} />
    </Routes>
  );
}

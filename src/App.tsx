import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import './App.css';
import { ThemeContext } from './context/ThemeContext';
import { useLocalStorage } from './hooks/useLocalStorage';
import type { Theme } from './types/types';

function App() {
  const [theme, setTheme] = useLocalStorage<Theme>("theme", "Dark");

  useEffect(() => {
    const rootElement = document.getElementById('root')
    if (theme === "Light") {
      document.body.classList.add("light-mode");
      rootElement!.classList.add('light-mode');
    } else {
      document.body.classList.remove("light-mode");
      rootElement!.classList.remove('light-mode');
    }
  }, [theme]);

  function toggleTheme() {
    setTheme((prevTheme: Theme) => (prevTheme === "Light" ? "Dark" : "Light"));
  }

  return (
    <>
      <div>
        <ThemeContext value={{ theme, toggleTheme }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </ThemeContext>
      </div>
    </>
  )
}

export default App

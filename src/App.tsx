import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ProjectsPage } from './pages/ProjectsPage'
import './App.css'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>        
      </div>
    </>
  )
}

export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import AboutPage from './pages/AboutPage'
import ExperiencePage from './pages/ExperiencePage'
import EducationPage from './pages/EducationPage'
import CertificationsPage from './pages/CertificationsPage'
import SkillsPage from './pages/SkillsPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main style={{ paddingTop: '80px', minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App

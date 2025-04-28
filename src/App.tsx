import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import AboutPage from './components/aboutpage/AboutPage';
import ContactPage from './components/contactpage/Contactpage';
import JourneyPage from './components/jouneypage/Journeypage';
import ProjectPage from './components/projectpage/ProjectPage'; 

function App() {
 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/journey" element={<JourneyPage />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
    </Router>
  )
}

export default App

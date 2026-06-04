import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import CurrentProjects from "./components/CurrentProjects";
import Latest from "./components/Latest";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import TechStack from "./components/TechStack";
import ProjectPage from "./components/ProjectPage";

function ScrollHandler() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}

function App() {
  return (
    <div className="min-w-xs w-full bg-white">
      <ScrollHandler />
      <Header />
      <main className="min-w-xs min-h-svh">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <CurrentProjects />
              <Latest />
              <About />
              <TechStack />
              <Projects />
              <Connect />
            </>
          } />
          <Route path="/projects/:slug" element={<ProjectPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

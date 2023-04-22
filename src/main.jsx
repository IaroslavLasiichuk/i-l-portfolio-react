import React from 'react'
import ReactDOM from 'react-dom/client'
import Hero from './pages/Hero'
import Project from './pages/Project.jsx'
import Contact from './pages/Contact.jsx'
import Footer from './pages/Footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Hero />
    <Project />
    <Contact />
    <Footer />
  </React.StrictMode>,
)

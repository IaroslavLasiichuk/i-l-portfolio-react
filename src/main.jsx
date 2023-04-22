import React from 'react'
import ReactDOM from 'react-dom/client'
import Hero from './Hero.jsx'
import Project from './Project.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Hero />
    <Project />
    <Contact />
    <Footer />
  </React.StrictMode>,
)

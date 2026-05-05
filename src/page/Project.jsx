import React, { useEffect } from 'react'
import './Project.css'
import Aos from 'aos'
function Project() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: true
    })
  }, [])
  return (
    <div className="project" id="project">

      {/* <video autoPlay loop muted playsInline className="video1">
        <source src="project.mp4" type="video/mp4" />
      </video> */}
      <h1 className="title" data-aos="fade-right">My Projects</h1>

      <div data-aos="fade-down" className="project-container">

        <div className="project-card">
          <img data-aos="fade-left" src="logo1.png" alt="project" />
          <h3 data-aos="fade-right">Food</h3>
          <p data-aos="fade-left">React portfolio website with animations.</p>
          <a href="https://patelvishal12005-design.github.io/Food_ordering/" target="_blank" rel="noopener noreferrer">
            <button data-aos="fade-up" data-aos-delay="500">View Project</button>
          </a>
        </div>

        <div className="project-card">
          <img data-aos="fade-left" src="om-logo.svg" alt="Hari Om Engineering Works" height={100} />
          <h3 data-aos="fade-right">Hari Om Engineering</h3>
          <p data-aos="fade-left">Company website for Hari Om Engineering Works.</p>
          <a href="https://patelvishal12005-design.github.io/Hari_om/" target="_blank" rel="noopener noreferrer">
            <button data-aos="fade-up" data-aos-delay="500">View Project</button>
          </a>
        </div>

       <div className="project-card">
          <img src="p.png" alt="project"/>
          <h3>ERP</h3>
          <h5>Enterprise Resource Planning</h5>
          <p>ERP for Enterprise Resource Planning</p>
        <a href="https://patelvishal12005-design.github.io/erp-frontend/" target="_blank" rel="noopener noreferrer">
          <button>View Project</button>
        </a>
        </div>
      </div>

    </div>
  )
}

export default Project
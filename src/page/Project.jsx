import React, { useEffect } from 'react'
import './Project.css'
import Aos from 'aos'
function Project() {
  useEffect(()=>{
    Aos.init({
      duration:1500,
      once:true
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
          <img data-aos="fade-left" src="logo1.png" alt="project"/>
          <h3 data-aos="fade-right">Food</h3>
          <p data-aos="fade-left">React portfolio website with animations.</p>
          <button data-aos="fade-up" data-aos-delay="500" >View Project</button>
        </div>

        {/* <div className="project-card">
          <img src="p2.png" alt="project"/>
          <h3>Todo App</h3>
          <p>Task management app using JavaScript.</p>
          <button>View Project</button>
        </div>

        <div className="project-card">
          <img src="p3.png" alt="project"/>
          <h3>E-Commerce UI</h3>
          <p>Responsive shopping website design.</p>
          <button>View Project</button>
        </div> */}

      </div>

    </div>
  )
}

export default Project
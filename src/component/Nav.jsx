import React from 'react'
import './Nav.css'

function Nav() {
  return (
    <div className="nav">
      <nav className="navbar navbar-expand-lg p-0">
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">
            <img src="logo2.png" alt="logo" height={60} width={120} />
          </a>

          <button
            type="button"
            className="navbar-toggler "
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
          >
            <span className="navbar-toggler-icon "></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" href="#home">Home</a>
              <a className="nav-link" href="#aboutme">About Me</a>
              <a className="nav-link" href="#skill">Skill</a>
              <a className="nav-link" href="#project">Project</a>
              <a className="nav-link" href="#contactme">Contact Me</a>
            </div>

            <div className="media">
             <a href='http://instagram.com/patelvishal2005/' target='_blank' rel='noopener noreferrer'> <i className="fa-brands fa-instagram"></i> </a>
             <a href='https://www.linkedin.com/in/patel-vishal-2286903b3/' target='_blank' rel='noopener noreferrer'> <i className="fa-brands fa-linkedin"></i></a>
             <a href='https://github.com/patelvishal12005-design' target='_blank' rel='noopener noreferrer'> <i className="fa-brands fa-github"></i></a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav
import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
  return (
    <div className="nav">
      <nav className="navbar navbar-expand-lg p-0">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
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
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/aboutme">About Me</Link>
              <Link className="nav-link" to="/skill">Skill</Link>
              <Link className="nav-link" to="/contectme">Contact Me</Link>
              <Link className="nav-link" to="/Project">Project</Link>
            </div>

            <div className="mediya">
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-github"></i>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav
import React from 'react'
import Nav from './component/Nav'
import Home from './page/Home'
import Aboutme from './page/Aboutme'
import Skill from './page/Skill'
import Project from './page/Project'
import Contactme from './page/Contactme'

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <Aboutme />
      <Skill />
      <Project />
      <Contactme />
    </div>
  )
}

export default App

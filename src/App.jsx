import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './page/Home'
import Aboutme from './page/Aboutme'
import Skill from './page/Skill'
import Contactme from './page/Contactme'
import Project from './page/Project'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Skill' element={<Skill/>}/>
        <Route path='/aboutme' element={<Aboutme/>}/>
        <Route path='/Contectme' element={<Contactme/>}/>
        <Route path='/Project' element={<Project/>} />
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

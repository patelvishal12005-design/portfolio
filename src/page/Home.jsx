import React, { useEffect } from 'react'
import Nav from '../component/Nav'
import './Home.css'
import Aos from 'aos'
import { Link } from 'react-router-dom'
function Home() {
  useEffect(() => {
    Aos.init({
      duration:1500,
      once:true
    }
    )
  })
  return (
    <div>
      <Nav/>
        <video autoPlay loop muted playsInline className='video1'>
          <source src="hom1.mp4"></source></video>
      <div className="container justify-content-between d-flex">
      <div className="c2" data-aos="fade-right">
          <div className="text ms-3" data-aos="fade-down" >
          <h6><i class="fa-regular fa-star ms-3 pt-2"></i> Helo</h6>
        <h6 className=' ms-5'>I'm vishal</h6>
        </div>
      <p className='p1 font-extrabold'>Full-Stack <br/>web Developer</p>
      <p className='p2' >I am currently pursuing my studies and learning web development technologies such as HTML, CSS, JavaScript, and React to build modern and responsive websites.</p>
      <Link className=' nav-link' to='/Project'> <button className='btn1 view'> view projects <i class="fa-solid fa-arrow-right"></i> </button> </Link>
      <button className='btn1 download'><a href="patel vishal - Resume.pdf" download="FileName" class="download-btn">
    Download File
</a> <i class="fa-solid fa-arrow-down"></i></button>
      </div>
      <div className="c1" data-aos="fade-left">
         <img src="c21.png" alt="img" height={250} />
      </div>
      </div>
    </div>
  )
}

export default Home

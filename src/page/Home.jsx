import React, { useEffect } from 'react'
import './Home.css'
import Aos from 'aos'
function Home() {
  useEffect(() => {
    Aos.init({
      duration:1500,
      once:true
    }
    )
  }, [])
  return (
    <div id="home">
        <video autoPlay loop muted playsInline className='video1'>
          <source src="hom1.mp4"></source></video>
      <div className="container justify-content-between d-flex">
      <div className="c2" data-aos="fade-right">
          <div className="text ms-3" data-aos="fade-down" >
          <h6><i className="fa-regular fa-star ms-3 pt-2"></i> Helo</h6>
        <h6 className=' ms-5'>I'm vishal</h6>
        </div>
      <p className='p1 font-extrabold'>Full-Stack <br/>web Developer</p>
      <p className='p2' >I am currently pursuing my studies and learning web development technologies such as HTML, CSS, JavaScript, and React to build modern and responsive websites.</p>
      <a className=' nav-link' href='#project'> <button className='btn1 view'> view projects <i className="fa-solid fa-arrow-right"></i> </button> </a>
      <button className='btn1 download'><a href="patel vishal - Resume.pdf" download="FileName" className="download-btn">
    Download File
</a> <i className="fa-solid fa-arrow-down"></i></button>
      </div>
      <div className="c1" data-aos="fade-left">
         <img src="c21.png" alt="img" className="img-fluid" style={{ maxHeight: '250px' }} />
      </div>
      </div>
    </div>
  )
}

export default Home

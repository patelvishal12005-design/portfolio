import React, { useEffect } from 'react'
import './aboutme.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
function Aboutme() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true
    })
  }, [])
  return (
    <div id="aboutme">
      <div>
      {/* <video autoPlay loop muted playsInline className='video1'>
        <source src="abuot4.mp4"></source></video> */}
        <div>
      <div className="p" data-aos="zoom-in">
        <h2>About me</h2></div>
      <div className="container d-flex">
        <div className="c1" data-aos="fade-right">
          <img src="me.png" className='img1 img-fluid' alt="img" style={{ maxHeight: '250px' }} />
        </div>
        <div className="c2 p-4" data-aos="fade-left">
          <h2>PATEL VISHAL</h2>
          <div className="textcontainer d-flex ">
          <p>DATE OF BIRTH <br /><span className='text-white'>20/01/2005</span></p>
          <p className='p2' >PHONE <br /><span className='text-white'>+91-8320335694</span> </p>
          </div>
          <div className="textcontainer d-flex ">
          <p>EMAIL <br /><span className='text-white'>patelvishal12005@gmail.com</span></p>
          <p className='p3'>LOCATION <br /><span className='text-white'>KADI,GUJRAT,India</span> </p>
          </div>
          <p className='text-white' >I am a motivated web development student who enjoys creating responsive and user-friendly websites. I have experience with HTML, CSS, JavaScript, and React. I am always excited to learn new technologies and improve my development skills while building creative web projects. </p>
        </div>
      </div>
    </div>
        </div>
    </div>
  )
}

export default Aboutme

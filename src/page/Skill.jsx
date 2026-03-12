import React, { useEffect } from 'react'
import Nav from '../component/Nav'
import './Skill.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Skill() {

  useEffect(() => {
    Aos.init({
      duration:2000,
      once:true
    })
  }, [])

  return (
    <div className='skill'>
      <Nav/>

      <video autoPlay loop muted playsInline className='video1'>
        <source src="skill1.mp4"></source>
      </video>

      <div className="skill1">
        {/* AOS parent div par */}
       <div className="cantenarskill d-flex">
  <img src="html.png" alt="html" data-aos="zoom-in" data-aos-delay="50"/>
  <img src="css.png" alt="css" data-aos="zoom-in" data-aos-delay="200"/>
  <img src="js.png" alt="js" data-aos="zoom-in" data-aos-delay="400"/>

  <span>
    <p className='boot text-black' data-aos="zoom-in" data-aos-delay="600">Bootstrap</p>
    <img src="bootstrap.png" alt="bootstrap" className='bootimg' data-aos="zoom-in" data-aos-delay="800"/>
  </span>
</div>

<div className="cantenarskill1 d-flex">
  <img src="react.png" alt="React" data-aos="zoom-in" data-aos-delay="900"/>
  <img src="db.webp" alt="mongodb" data-aos="zoom-in" data-aos-delay="1100"/>

  <span>
    <img src="diang3.png" alt="django" data-aos="zoom-in" data-aos-delay="1400"/>
    <p className='boot ms-2 text-black' data-aos="zoom-in" data-aos-delay="1600">Django</p>
  </span>

  <img src="python.png" alt="python" data-aos="zoom-in" data-aos-delay="1800"/>
</div>     
 </div>

    </div>
  )
}

export default Skill
import React, { useEffect, useState } from 'react'
import Nav from '../component/Nav'
import './Contactme.css'
import Map from './Map'
import Aos from 'aos'

function Contactme() {

  useEffect(()=>{
    Aos.init({
      duration:1500,
      once:true
    })
  })

  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")
  // const [number, setNumber] = useState("")
  // const [error, setError] = useState("")

  // const handleSubmit = (e) => {
  //   e.preventDefault()

  //   if (name === "" || email === "" || number === "") {
  //     setError("Please fill all fields")
  //   } else {
  //     setError("")
  //     alert("Form Submitted Successfully")
  //   }
  // }

  return (
    <div>
      <Nav />

      <video autoPlay loop muted playsInline className="video1">
        <source src="abuot1.mp4" type="video/mp4" />
      </video>

      <div className="form d-flex">
        {/* <div className="me1 p-4" data-aos="fade-right">
          <br /> */}
          {/* <h1 className=' p-2' data-aos="fade-down" >CONTACTME</h1>
          <form onSubmit={handleSubmit}>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <label htmlFor='name' data-aos="fade-right" >Name:</label>
            <input
            data-aos="fade-left" data-aos-delay="600"
              id='name'
              type="text"
              placeholder='Enter Name'
              className='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            /><br /><br />

            <label htmlFor='email'data-aos="fade-down" data-aos-delay="100" >Email:</label>
            <input
              className='email'
              data-aos="fade-up"
              data-aos-delay="100"
              id='email'
              placeholder='Enter email'
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            /><br /><br />

            <label htmlFor='number' data-aos="fade-down"  >Number:</label>
            <input
              id='number'
              data-aos="fade-left"
              data-aos-delay="200"
              placeholder='Enter a number'
              type="number"
              className='number'
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            /><br /><br />
            <label htmlFor="user">User :</label>
            <input type="text" className='user' placeholder='Enter user qusen' name="user" id='user' /> <br /><br />
            <button type="submit" data-aos="fade-in" >Submit</button>

          </form> */}

        {/* </div> */}
        <div className="me2"data-aos-delay="200"data-aos="fade-left">
          <div className="Contectme">
            <p className='get m-4' data-aos="fade-down"> <i class="fa-solid fa-map-pin"></i> Get In Touch</p>
            <p data-aos="fade-up" data-aos-delay="200" > <i class="fa-solid fa-envelope" ></i>Email:patelvishal12005@gmail.com</p>
            <p data-aos="fade-down" data-aos-delay="200"> <i class="fa-solid fa-phone"></i> PHONE  : 8320335694</p>
            <p data-aos="fade-left" data-aos-delay="100" ><i class="fa-regular fa-id-badge"></i> Name   : Patel vishal Haresh bhai </p>
            <p data-aos="fade-right" data-aos-delay="100"> <i class="fa-solid fa-address-card"></i> ADDRESS: KADI MAHESHANA GUJRAT</p>
            <div className="map" data-aos="fade-up" data-aos-delay="200">
              {/* <h4 data-aos="fade-down" data-aos-delay="100">Map</h4> */}
             <Map/>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contactme
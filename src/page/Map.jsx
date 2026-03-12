import Aos from 'aos';
import React, { useEffect, useState } from 'react'
import './Map.css'
function Map() {
useEffect(()=>{
  Aos.init({
    duration:1500,
    once:true
  })
})
  return (
    <div>
      <h2 data-aos="fade-in" className='map' data-aos-delay="300">My Location</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58634.50548011314!2d72.29811210722634!3d23.291924542342503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c18078321e28f%3A0xdca9292f4989571c!2sKadi%2C%20Gujarat%20384440!5e0!3m2!1sen!2sin!4v1773165174306!5m2!1sen!2sin"
        width="300"
        data-aos="fade-down"
        data-aos-delay="500"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="kadi-map"
      ></iframe>

    </div>
  );
}

export default Map;
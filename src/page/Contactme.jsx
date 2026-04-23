import React, { useEffect, useState } from 'react';
import './Contactme.css';
import Map from './Map';
import Aos from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function Contactme() {

  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: true
    });
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [user, setUser] = useState(""); // Added state for user query
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !number || !user) {
      setError("Please fill all fields");
      return;
    }

    setError("");
    alert("Form Submitted Successfully");

    // Clear form after submission
    setName("");
    setEmail("");
    setNumber("");
    setUser("");
  };

  return (
    <div id="contactme">
      <div className="form d-flex">
        {/* Left Side - Form */}
        {/* <div className="me1 p-4" data-aos="fade-right">
          <h1 className="p-2" data-aos="fade-down">CONTACT ME</h1>
          <form onSubmit={handleSubmit}>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              placeholder="Enter Name"
              className="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              data-aos="fade-left"
              data-aos-delay="600"
            /><br /><br />

            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              placeholder="Enter Email"
              className="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              data-aos="fade-up"
              data-aos-delay="100"
            /><br /><br />

            <label htmlFor="number">Number:</label>
            <input
              id="number"
              type="tel"
              placeholder="Enter Phone Number"
              className="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              data-aos="fade-left"
              data-aos-delay="200"
            /><br /><br />

            <label htmlFor="user">Message:</label>
            <input
              id="user"
              type="text"
              className="user"
              placeholder="Enter your question"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            /><br /><br />

            <button type="submit" data-aos="fade-in">Submit</button>
          </form>
        </div> */}

        {/* Right Side - Contact Info */}
        <div className="me2" data-aos="fade-left" data-aos-delay="200">
          <div className="Contectme">
            <p className="get m-4" data-aos="fade-down">
              <i className="fa-solid fa-map-pin"></i> Get In Touch
            </p>
            <p data-aos="fade-up" data-aos-delay="200">
              <i className="fa-solid fa-envelope"></i> Email: patelvishal12005@gmail.com
            </p>
            <p data-aos="fade-down" data-aos-delay="200">
              <i className="fa-solid fa-phone"></i> Phone: 8320335694
            </p>
            <p data-aos="fade-left" data-aos-delay="100">
              <i className="fa-regular fa-id-badge"></i> Name: Patel Vishal Hareshbhai
            </p>
            <p data-aos="fade-right" data-aos-delay="100">
              <i className="fa-solid fa-address-card"></i> Address: Kadi, Mehsana, Gujarat
            </p>
{/* 
            <div className="map" data-aos="fade-up" data-aos-delay="200">
              <Map />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactme;
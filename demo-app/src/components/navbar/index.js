import React from 'react'


export default function navbar() {
   return (
     <div>
      <nav className="navbar navbar-expand-lg navbar-light" id="navbar1">
      <div className="container-fluid" id="navcontainer">
        <img src="img/logo1.png" alt="" className="logo"/>
        <div className="icon"></div>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
           <span className="navbar-toggler-icon"></span>
        </button>

        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
           
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body fw-bold" id="offnav">
              <a className="nav-link text-black" aria-current="page" id="word"  href="http://localhost:3000/#ourservice">Our Service</a>
              <a className="nav-link text-black" aria-current="page" id="word"  href="http://localhost:3000/#why-us">Why Us</a>
              <a className="nav-link text-black" aria-current="page" id="word"  href="http://localhost:3000/#testimoni">Testimonial</a>
              <a className="nav-link text-black" aria-current="page" id="word"  href="http://localhost:3000/#faq">FAQ</a>
              <button type="button" className="btn btn-nav fw-bold text-white" id="registerbtn">Register</button>
          </div>
        </div>
      </div>
    </nav>
     </div>
   )
 }
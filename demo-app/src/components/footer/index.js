

import React from 'react'

export default function footer() {
   return (
     <div>
    <section className="footer" id="ftone">
      <div className="container">
      <div className="row mt-5">
         <div className="col-md-4">
            <ul className="list-unstyled">
               <li>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</li>
               <li className="mt-2">binarcarrental@gmail.com</li>
               <li className="mt-2">081-233-334-808</li>
            </ul>
         </div>
         <div className="col-md-3">
         <ul className="list-unstyled fw-bold">
            <li>Our services</li>
            <li className="mt-1">Why Us</li>
            <li className="mt-1">Testimonial</li>
            <li className="mt-1">FAQ</li>
         </ul>
         </div>
         <div className="col-md-3" >
         <p>Connect With Us</p>
         
            <div className="list-group list-group-horizontal d-flex flex-row gap-2">
               <div>
               <div className="circle_footer" id="fttwo">
                  <img src="img/fi_facebook.png" alt=""/>
               </div>
               </div>
               <div>
               <div className="circle_footer" id='ftthree'>
                  <img src="img/fi_instagram.png" alt="" id='iconig'/>
               </div>
               </div>
               <div>
               <div className="circle_footer" id="ftfour">
                  <img src="img/fi_twitter.png" alt="" id='icontwit'/>
               </div>
               </div>
               <div>
               <div className="circle_footer" id="ftfour">
               <img src="img/fi_mail.png" alt="" id='icontwit'/>
               </div>
               </div>
               <div>
               <div className="circle_footer" id="ftfour">
                  <img src="img/fi_twitch.png" alt="" id='icontwit'/>
               </div>
               </div>
            </div>
            
            
         </div>
         <div className="col-md-2">
         <p>Copyright Binar 2022</p>
         <img src="img/Rectangle74.png" alt=""/>
         </div>
      </div>
      </div>
   </section>
     </div>
   )
 }
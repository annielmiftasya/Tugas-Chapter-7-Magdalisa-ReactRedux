
import React from 'react'
import { Link } from 'react-router-dom'

export default function hero() {
   return (
     <div>
     <section className="hero">
      <div className="container">
      <div className="row">
         <div className="hero-desc col-md-6 px-md-5">
            <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
            <p className="col-md-11">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
            <Link to="/cari">
            <button type="button" className="btn fw-bold text-white" id="herosewa">Mulai Sewa Mobil</button>
            </Link>
           
         </div> 
         <div className="col-md-6">
            <img src="img/bg.png" alt="hero" className="bg-biru"/>
            <img src="img/car1.png" alt="car" className="w-100 mobil"/>
         </div> 
      </div>
      </div>  
      </section>
     </div>
   )
 }
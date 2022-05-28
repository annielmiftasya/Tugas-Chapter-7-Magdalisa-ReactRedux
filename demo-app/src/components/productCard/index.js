import React from 'react'

export default function ProductCard({product}) {
  return (
    <div>  
         <div className="col">
            <div className="card" id="contentone">
                <img src={product.image} id="imgCar" alt="..."/> 
                <div className="card-body bg-white" id="card2">
                  <p className="card-text fw-bolder" id="input1">{product.manufacture}/{product.model}</p>
                  <p className="card-text fw-bold" id='fontharga'>Rp. {product.rentPerDay}/ hari</p>
                  <p className="card-text" id="card3">{product.description}</p>
                  
                  {/* <div className="d-flex">
                  <img src="img/fi_users.png"/>
                  <p className="card-text ms-3" id="input1">dengan sopir</p>
                  </div> */}
                  <div className="d-flex">
                  <img src="img/fi_users.png" alt="..."/>
                  <p className="card-text ms-3" id="input1">{product.capacity}</p>
                  </div>
                  <div className="d-flex pt-3">
                  <img src="img/fi_settings.png" alt="..."/>
                  <p className="card-text ms-3" id="input1">{product.transmission}</p>
                  </div>
                  <div className="d-flex pt-3 pb-4">
                  <img src="img/fi_calendar.png" alt="..."/>
                  <p className="card-text ms-3" id="input1">{product.year}</p>
                  </div>
  
                  <a href="/#" className="btn btn-primary" id="buttonatribut">Go somewhere</a>
                </div>
              </div>
            </div>

           
         </div>
      
  )
}

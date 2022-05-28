import React from 'react'


export default function whyus() {
   
   return (
     <div>
        <section id="why-us">

            <div className="container me-5 pt-3 mt-5 mb-5">
            <div className="judul">
                  <h1 className="fw-blod">Why Us?</h1>
                  <p className="mt-4">Mengapa harus pilih Binar Car Rental?</p>
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-4 mt-2 ">
               <div className="col">
                  <div className="card-why-us border border-dark rounded-3 p-4 ">
                  <div className="rounded-one">
                     <img src="img/fi_thumbs-up.png" alt=""  className="iconwhyus"/>
                  </div>
                
                  <div className="card-body-whyus">
                     <h6 className="card-title">Mobil Lengkap</h6>
                     <p className="card-text ">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                  </div>
                  </div>
               </div>
               <div className="col">
                  <div className="card-why-us border border-dark rounded-3 p-4">
                  <div className="rounded-two">
                        <img src="img/fi_tag.png" alt=""  className="iconwhyus"/>
                  </div>
                  <div className="card-body-whyus">
                     <h5 className="card-title">Harga Murah</h5>
                     <p className="card-text">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                  </div>
                  </div>
               </div>
               <div className="col">
                  <div className="card-why-us border border-dark rounded-3 p-4">
                  <div className="rounded-three">
                     <img src="img/fi_clock.png" alt="" className="iconwhyus"/>
                  </div>
                  <div className="card-body-whyus">
                     <h5 className="card-title">Layanan 24 Jam</h5>
                     <p className="card-text">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                  </div>
                  </div>
               </div>
               <div className="col">
                  <div className="card-why-us border border-dark rounded-3 p-4">
                  <div className="rounded-four">
                     <img src="img/fi_award.png" alt="" className="iconwhyus"/>
                  </div>
                  <div className="card-body-whyus">
                     <h5 className="card-title">Sopir Prefesional</h5>
                     <p className="card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                  </div>
                  </div>
               </div>
            </div>
            </div>
            </section>

      <section id="testimoni">
         <div className="container-fluid">
         <div className="text-center mt-5 pt-5">
            <h1 className="fw-bold" id='testi1'>Testimonial</h1>
            <p className="mt-3" id='testi2'>Berbagai review positif dari para pelanggan kami</p>
         </div> 

       

         </div>
      </section>

      <section className="sewa_mobil">
      <div className="container mt-md-5">
         <div className="row" id='sewa1'>
            <div className="col-md-12 mt-md-5 p-5 text-center text-white sewa_biru" id='sewa2'>
            <h1 className="fw-bold" id='sewa3'>Sewa Mobil di (Lokasimu) Sekarang</h1>
            <p className="mt-4" id='sewa4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <button type="button" className="btn fw-bold text-white mt-3" id='sewa5'>Mulai Sewa Mobil</button>
            
            </div>
         </div>
    
      </div>
      </section>

     <section id="faq">
     <div className="container mt-5 pt-5">
       <div className="row">
         <div className="col-md-5 mt-md-5">
            <h1 className="fw-bold" id='fontharga'>Frequently Asked Question</h1>
            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
         </div>
         <div className="col-md-7">         
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header1" id="headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Apa saja syarat yang dibutuhkan?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Berapa hari minimal sewa mobil lepas kunci?
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Berapa hari sebelumnya sabaiknya booking sewa mobil?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Apakah Ada biaya antar-jemput?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Bagaimana jika terjadi kecelakaan
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
          </div>
         </div>
       </div>
     </div>
   </section>
      
     </div>
   )
 }
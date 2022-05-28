import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import ProductCard from '../../components/productCard'
import React, {useEffect, useState} from 'react'
import getProductService from '../../service/getProduct'
import {useSelector} from 'react-redux'

export default function Search() {
  const counterState = useSelector((state) => state.counter)
  console.log( counterState,"ini state")
   const [products, setProducts] = useState([])
    const getProduct = async () => {
        const allProduct = await getProductService()
        setProducts(allProduct)
    }
    useEffect(() => {
      getProduct()
    }, [])


  const  tinput1=()=>{
      let inputValue = document.getElementById('input1').value
      return inputValue
   }
   const tinput2 =()=>{
      let inputValue = document.getElementById('input2').value
      return inputValue
   }
   const tinput3 =()=>{
      let inputValue = document.getElementById('input3').value
      return inputValue
   }
   const tinput4 =()=>{
      let inputValue = document.getElementById('input4').value
      return inputValue
   }
   var cobaForm = document.getElementById('form1')
   
   cobaForm?.addEventListener('submit', (e) => {
      e.preventDefault()
      filterCar(tinput1(),tinput2(),tinput3(),tinput4());
      
   }
   )
    const filterCar = (driver, tanggal, waktu, penumpang) => {
      const filteredData = products.filter((item) => (
        parseInt(penumpang) > 0 ? item.available.toString() === driver && item.capacity === parseInt(penumpang)
        && (new Date(item.availableAt) <= new Date(tanggal) )
       && new Date(item.availableAt).getHours() >= parseInt(waktu) 
       : item.available.toString() === driver && (new Date(item.availableAt) <= new Date(tanggal) )
       && new Date(item.availableAt).getHours() >= parseInt(waktu)

      ));
  
      setProducts(filteredData);
    };
  
   return (
     <div>
        <Navbar />
        <section className="hero">
      <div className="container">
        <div className="row">
          <div className="hero-desc col-md-6 px-md-5">
            <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
            <p className="col-md-11">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
         </div> 
          <div className="col-md-6">
            <img src="img/bg.png" alt="hero" className="bg-biru"/>
            <img src="img/car1.png" alt="car" className="w-100 mobil"/>
          </div> 
        </div>

        <div id="tophero">
         <div className="card-body shadow p-3 bg-body mb-5 ms-5 me-5 rounded">
           <form id="form1">
            <div className="row">
              <div className="col ms-2">
                <p className="mb-2">Tipe Driver</p>
                <div>
                  <select className="form-select"  id="input1">
                    <option hidden>Pilih Tipe Driver</option>
                    <option value="true">Dengan Sopir</option>
                    <option value="false">Tanpa Sopir(Lepas Kunci)</option>
                  </select>
                </div>
              
              </div>
              <div className="col">
                <p className="mb-2">Tanggal</p>
                 <input id="input2" className="form-control" type="date"/>
              </div>
              <div className="col">
                <p className="mb-2 input1">Waktu Jemput/Ambil</p>
                <select className="form-select" id="input3">
                    <option hidden>Pilih Waktu</option>
                    <option value="8">08.00</option>
                    <option value="9">09.00</option>
                    <option value="10">10.00</option>
                    <option value="11">11.00</option>
                  </select>
              
              </div>
              <div className="col">
                <p className="mb-2" id='w1'>Jumlah Penumpang (optional)</p>
               
                
                  <select id="input4" className="form-select" placeholder="Jumlah Penumpang">
                    <option value="0">Jumlah Penumpang</option>
                    <option value="2">2</option>
                    <option value="4">4</option>
                    <option value="6">6</option>

                  </select>
              </div>
              <div className="col-2">
                <button type="submit" id="submit" value="search"  className="btn btn-success fw-bold text-white mt-4">Cari Mobil</button>
              </div>
           </div>
           
           </form>
          
           
         </div>
       </div>
        
    
  
      </div>  
    </section>

    <section className="allcar1" id='allcar1'>
       <div className="container pb-5">
         <div className="row row-cols-3" id="bodyone">
         {
                   products.map((item, index) => <ProductCard key={index} product={item} />)
               }
               </div>
               </div>
            </section>

   
            <Footer />
     </div>
   )
 }
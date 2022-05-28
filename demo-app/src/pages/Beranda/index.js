import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import Hero from '../../components/hero'
import Whyus from '../../components/whyus'
import Ourservice from '../../components/ourservice'

import React from 'react'

export default function Beranda() {
   return (
     <div>
      <Navbar />
      
      <Hero />
      <Ourservice />
      <Whyus />
      <Footer />
     </div>
   )
 }

import React from 'react'
import NavbarApp from '../components/NavbarApp/NavbarApp'
import Footer from '../components/FooterApp/FooterApp'
import Carousel from '../components/CaruselApp/CaruselApp'
import Texto from '../components/TextApp/TextApp'
import CardsData from '../components/CardsApp/CardsData'

function Home() {
  return (
    <div>
      <NavbarApp/>
      <Carousel/>
      <Texto/>
      <CardsData/>
      <Footer/>

    </div>
  )
}

export default Home
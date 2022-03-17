import React from 'react'
import Navbar from '../components/Navbar'
import Introduction from '../components/Introduction'
import Pandaprice from '../components/Pandaprice'
import Trailer from '../components/Trailer'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div>
        <Navbar />
        <Introduction/>
        <Pandaprice />
        
        <Footer />
    </div>
  )
}

export default Home
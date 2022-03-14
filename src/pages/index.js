import React from 'react'
import Navbar from '../components/Navbar'
import Introduction from '../components/Introduction'
import Pandaprice from '../components/Pandaprice'


const Home = () => {
  return (
    <div>
        <Navbar />
        <Introduction/>
        <Pandaprice />
    </div>
  )
}

export default Home
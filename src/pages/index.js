import React, {useRef, useEffect, useState} from 'react'
import { useInView } from 'react-intersection-observer'
import Navbar from '../components/Navbar'
import Timer from '../components/Timer'
import Introduction from '../components/Introduction'
import Pandaprice from '../components/Pandaprice'
import Footer from '../components/Footer'
import Roadmap from '../components/Roadmap'
import Mintafter from '../components/Mintafter'
import Rarity from '../components/Rarity'
import Team from '../components/Team'
import RarityScale from '../components/RarityScale'
import Sidebar from '../components/Sidebar'
import '../components/styles/animation.scss';
import styles from '../components/styles/animation.scss';
import Separator from '../components/Separator'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  const {ref: progressRef, inView: progressIsVisible } = useInView();
  return (
    <div>
        <Sidebar toggle={toggle} isOpen={isOpen}/>
        <Navbar toggle={toggle} />
        <Timer />
        <Separator />
        <Introduction/>
        <Roadmap />
        <Pandaprice />
        <Rarity />
        <RarityScale />
        <Mintafter />
        <Team />
        <Footer />
    </div>
  )
}

export default Home
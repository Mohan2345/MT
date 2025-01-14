import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import Titlecards from '../../components/Titlecards/Titlecards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="Hero Image" className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt="hero title image" className='caption-img'/>
          <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="Play Btn" />Play</button>
            <button className='btn dak-btn'><img src={info_icon} alt="Info Btn" />More Info</button>
          </div>
          <Titlecards/>
        </div>
      </div>
      <div className="more-cards">
      <Titlecards title={"Blockbuster Movies"} category={"top_rated"}/>
      <Titlecards title={"Only On NetFlix"} category={"popular"}/>
      <Titlecards title={"Upcoming"} category={"upcoming"}/>
      <Titlecards title={"Top Pics For You"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home

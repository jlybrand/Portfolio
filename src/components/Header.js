import React from 'react'
import '../styles/header.css'
import CaricatureImg from '../images/caricature.jpg'
import Typewriter from './Typewriter'

function Header() {
  return (
    <header>
      <div className="image-wrap">
        <img className="header-image" src={CaricatureImg} alt="caricature"></img>
      </div>
      
      <div className=".typewriter-wrap">
        <Typewriter text={`Hi, I'm Jason.\nThanks for dropping in.\nI design, build, and maintain software applications.\nYou can check out some of my projects below.\n\nNote this site is under construction.`} />
      </div>
    </header>
  )
}

export default Header
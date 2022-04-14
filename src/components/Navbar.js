import React from "react"
import { useState } from "react"
import "../styles/navbar.css"

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className="navbar">
      <a href="/" className="brand-name">Jason Lybrand</a>
      <div
        className="hamburger-menu"
        onClick={() =>
          setIsNavExpanded(!isNavExpanded)
        }
      >
        <div className="menu-item"></div>
        <div className="menu-item"></div>
        <div className="menu-item"></div>
      </div>
      <div className="navmenu">
        <ul className={
          isNavExpanded ? "navlist expanded" : "navlist"
        }
        >
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar 
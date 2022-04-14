import React from "react"
import "../styles/linknav.css"

function LinkNav() {
  return (
    <div className="links">

      <a href="#" target="_blank">Contact Me</a>

      <a
        href="https://github.com/jlybrand"
        target="_blank" rel="noreferrer">
        My GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/jason-lybrand/"
        target="_blank"
        rel="noreferrer">
        My LinkedIn
      </a>

    </div>
  )
}

export default LinkNav 
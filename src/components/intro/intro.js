import React from "react"
import "./intro.css"
import Banner from "../../images/introbanner.png"

function Intro() {
  return (
    <div className="intro-div" style={{ backgroundImage: `url(${Banner})` }}>
      <p className="intro-text">
        Hello, I'm Josh Tripp. I'm a freelance web developer and I'd love to
        take your ideas and turn them into something you'll love.
      </p>
    </div>
  )
}

export default Intro

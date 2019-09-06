import React from "react"
import "./header.css"
import TextLoop from "react-text-loop"

import HeaderImage from "../../images/banner.jpg"
// import HeaderImage from "../../images/stars-header.jpg"

function Header() {
  return (
    <header
      style={{
        backgroundImage: `url(${HeaderImage})`,
      }}
      id="header">
      <div className="headerTextDiv">
        <h2 id="headerText">
          <TextLoop
            children={["Take your dreams", "and ideas", ""]}
            interval={[3000, 2000, 3000 * 500]}
          />
          <TextLoop
            children={["", "To the stars", ""]}
            interval={[5000, 3000, 3000 * 500]}
          />
          <TextLoop
            children={["", "With Amazing Design"]}
            interval={[9000, 3000 * 500]}
          />
        </h2>
      </div>
    </header>
  )
}

export default Header

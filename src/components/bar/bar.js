import React, { useEffect } from "react"
import "./bar.css"

function Bar() {
  useEffect(() => {
    const divs = document.querySelectorAll(".bar")

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.intersectionRatio >= 0.5) {
            entry.target.classList.add("bar-ani")
          } else {
            entry.target.classList.remove("bar-ani")
          }
        })
      },
      { threshold: 0.5 }
    )

    divs.forEach(div => {
      observer.observe(div)
    })
  })

  return (
    <div className="bar-div">
      <div className="bar bar1"></div>
      <div className="bar bar2"></div>
      <div className="bar bar3"></div>
    </div>
  )
}

export default Bar

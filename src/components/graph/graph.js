import React, { useEffect } from "react"
import "./graph.css"

function Graph() {
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
    <div className="graph">
      <div className="bar bar1"></div>
      <div className="bar bar2"></div>
      <div className="bar bar3"></div>
      <div className="bar bar4"></div>
      <div className="bar bar5"></div>
      <div className="bar bar6"></div>
      <div className="bar bar7"></div>
      <div className="bar bar8"></div>
      <div className="bar bar9"></div>
      <div className="bar bar10"></div>
      <div className="bar bar11"></div>
    </div>
  )
}

export default Graph

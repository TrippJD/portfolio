import React, { useEffect } from "react"
import "./cardHolder.css"
import Brain from "../../images/brain.png"
import Farm from "../../images/farm.png"
import Blog from "../../images/blog.png"

function CardHolder() {
  useEffect(() => {
    const divs = document.querySelectorAll(
      ".card, .card-img, .card-div, .card-text-container"
    )
    // console.log(divs)

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          console.log(entry)
          if (
            entry.intersectionRatio >= 0.5 &&
            entry.target.className === "card"
          ) {
            entry.target.classList.add("ani-shadow")
          } else if (
            entry.intersectionRatio >= 0.5 &&
            entry.target.className === "card-div"
          ) {
            entry.target.classList.add("ani-border")
          } else if (
            entry.intersectionRatio >= 0.5 &&
            entry.target.className === "card-img"
          ) {
            entry.target.classList.add("ani-brightness")
          } else if (
            entry.intersectionRatio >= 0.5 &&
            entry.target.className === "card-text-container"
          ) {
            entry.target.classList.add("ani-container")
          } else {
            entry.target.classList.remove(
              "ani-shadow",
              "ani-border",
              "ani-brightness",
              "ani-container"
            )
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
    <div className="cardHolder">
      <a
        href="https://rasmussenminihereford.com/"
        target="_blank"
        rel="noreferrer noopener">
        <div className="card">
          <div className="card-div">
            <img className="card-img" src={Farm} alt={"appsite"} />
            <div className="card-text-container">
              <h1>WordPress Site</h1>
              <p>
                This site was built with the WordPress CMS for a local cattle
                farmer. Contains main landing page, a contact page, and a news
                page that is linked to upload Facebook posts dynamically. Hosted
                on Blue Host.
              </p>
            </div>
          </div>
        </div>
      </a>
      <a
        href="https://brains-app.herokuapp.com/"
        target="_blank"
        rel="noreferrer noopener">
        <div className="card">
          <div className="card-div">
            <img className="card-img" src={Brain} alt={"appsite"} />
            <div className="card-text-container">
              <h1>Face Detection App</h1>
              <p>
                Web App designed to take photos from URLs and run face detection
                software on them displaying the results. Accompanied by a user
                login and user submission enumeration. Built with the React.js
                framework frontend and a custom Node.js backend API. Hosted on
                Heroku.
              </p>
            </div>
          </div>
        </div>
      </a>
      <a
        href="https://jdblog.netlify.com/"
        target="_blank"
        rel="noreferrer noopener">
        <div className="card">
          <div className="card-div">
            <img className="card-img" src={Blog} alt={"appsite"} />
            <div className="card-text-container">
              <h1>Gatsby Blog</h1>
              <p>
                Basic blog starter built with the super fast Gatsby framework.
                Hosted on Netlify.
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

export default CardHolder

// const observer = new IntersectionObserver(
//   entries => {
//     entries.forEach(entry => {
//       if (entry.intersectionRatio >= 0.5 && <div class="card"></div>) {
//         entry.target.classList.add("ani-shadow")
//       } else {
//         entry.target.classList.remove("ani-shadow")
//       }
//     })
//   },
//   { threshold: 0.5 }
// )

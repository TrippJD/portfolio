import React from "react"
import PropTypes from "prop-types"
// import { Link } from "gatsby"
// import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import Form from "../components/form/form"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <div className="site">
        <nav className="nav">
          <Form />
        </nav>
        <main>{children}</main>
        <footer>
          <h3>Design and development by Jd Tripp</h3>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

/* <Link className="nav-link" to="/">
<h2 className="nav-text">Get Started</h2>
</Link> */

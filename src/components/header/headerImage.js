import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HeaderImage = () => {
  const data = useStaticQuery(graphql`
    query HeaderImageQuery {
      file(relativePath: { eq: "stars-header.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.file.childImageSharp.fluid} />
}

export default HeaderImage

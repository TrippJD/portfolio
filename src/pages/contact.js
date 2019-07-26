import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Form1 from "../components/form1/form1"

const About = ({ location }) => (
  <Layout location={location}>
    <Form1 />
    <Link to="/">Homepage</Link>
  </Layout>
)

export default About

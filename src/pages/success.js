import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const Success = () => (
  <Layout>
    <h1 slyle={{ margin: "100px" }}>Success</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Success

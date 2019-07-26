import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/header/header"
import Intro from "../components/intro/intro"
import Headline from "../components/headline/headline"
import CardHolder from "../components/cardHolder/cardHolder"
import Bar from "../components/bar/bar"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Intro />
    <Headline />
    <CardHolder />
    <Bar />
  </Layout>
)

export default IndexPage

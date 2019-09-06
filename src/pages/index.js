import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/header/header"
import Intro from "../components/intro/intro"
import { Headline1, Headline2 } from "../components/headline/headline"
import CardHolder from "../components/cardHolder/cardHolder"
import Graph from "../components/graph/graph"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Intro />
    <Headline1 />
    <CardHolder />
    <Headline2 />
    <Graph />
  </Layout>
)

export default IndexPage

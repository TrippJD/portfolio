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
    <form name="contact" netlify netlify-honeypot="bot-field" hidden>
      <input type="text" name="name" />
      <input type="email" name="email" />
      <textarea name="message"></textarea>
    </form>
    <Header />
    <Intro />
    <Headline />
    <CardHolder />
    <Bar />
  </Layout>
)

export default IndexPage

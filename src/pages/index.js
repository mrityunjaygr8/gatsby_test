import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>in gatsby tut</p>
      <StaticImage
        alt="Clifford"
        src="../images/icon.png" />
    </Layout>
  )
}

export default IndexPage

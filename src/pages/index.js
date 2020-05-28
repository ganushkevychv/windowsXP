import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"
import BackgrondImage from "gatsby-background-image"
import "../styles/index.scss"
import { graphql } from "gatsby"

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
<BackgrondImage className="background"
fluid={props.data.windows.childImageSharp.fluid}>
<Footer/>
</BackgrondImage>
</Layout>
  
)

export default IndexPage

export const pageQuery = graphql`
query {
  windows: file(relativePath:{ eq: "windows.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1800) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;

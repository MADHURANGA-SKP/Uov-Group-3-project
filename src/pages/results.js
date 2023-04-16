import React, { useState } from "react"
import BackgroundImage from "gatsby-background-image"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"

const Results = ({ data }) => {
  const images = {
    menu: convertToBgImage(getImage(data.menu)),
  }
  return (
    <Layout className="bg-[#DFDCD2]">
      <SEO title="Home" />

      <section>
        <div className="flex justify-center   h-[95vh] mb-5">
          <BackgroundImage
            {...images.menu}
            className="h-full w-full"
          ></BackgroundImage>
        </div>
      </section>

      {/* <p><Link to="/page-2/">Go to page 2</Link></p>
    <p><Link to="/using-typescript/">Go to "Using TypeScript"</Link></p> */}
    </Layout>
  )
}

export default Results

export const query = graphql`
  query ContactImages {
    menu: file(relativePath: { eq: "menu.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1920, quality: 100, placeholder: BLURRED)
      }
    }
  }
`

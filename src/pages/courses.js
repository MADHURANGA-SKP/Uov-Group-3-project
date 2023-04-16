import React from "react"
import { convertToBgImage } from "gbimage-bridge"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Courses = ({ data }) => {
  const images = {
    home: convertToBgImage(getImage(data.home)),
  }
  return (
    <Layout>
      <SEO title="courses" />
      <section>
        <div className="flex justify-center   h-[95vh] mb-5">
          <BackgroundImage
            {...images.home}
            className="h-full w-full"
          ></BackgroundImage>
        </div>
      </section>
      {/* <p><Link to="/page-2/">Go to page 2</Link></p>
    <p><Link to="/using-typescript/">Go to "Using TypeScript"</Link></p> */}
    </Layout>
  )
}

export default Courses

export const query = graphql`
  query ContactImages {
    home: file(relativePath: { eq: "home.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1920, quality: 100, placeholder: BLURRED)
      }
    }
  }
`

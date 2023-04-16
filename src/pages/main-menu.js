import React from "react"
import { convertToBgImage } from "gbimage-bridge"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Mainmenu = ({ data }) => {
  const images = {
    home: convertToBgImage(getImage(data.home)),
  }
  return (
    <Layout>
      <SEO title="mainmenu" />
      <section>
        <div className="flex justify-center   h-[95vh] mb-5">
          <BackgroundImage {...images.home} className="h-full w-full">
            <div className="absolute bottom-11 left-0 right-0 justify-center">
              <div className="grid grid-cols-3 gap-4">
                <Link to="lectures">
                  <div className="rounded-lg bg-black/70 text-2xl text-white font-semibold hover:bg-white/70 hover:text-black transition duration-500 p-4 h-[150px] flex items-center justify-center">
                    Lectures
                  </div>
                </Link>
                <Link to="learningsystem">
                  <div className="rounded-lg bg-black/70 text-2xl text-white font-semibold hover:bg-white/70 hover:text-black transition duration-500 p-4 h-[150px] flex items-center justify-center">
                    Learning System
                  </div>
                </Link>
                <Link to="courses">
                  <div className="rounded-lg bg-black/70 text-2xl text-white font-semibold hover:bg-white/70 hover:text-black transition duration-500 p-4 h-[150px] flex items-center justify-center">
                    Courses
                  </div>
                </Link>
              </div>
            </div>
          </BackgroundImage>
        </div>
      </section>
      {/* <p><Link to="/page-2/">Go to page 2</Link></p>
    <p><Link to="/using-typescript/">Go to "Using TypeScript"</Link></p> */}
    </Layout>
  )
}

export default Mainmenu

export const query = graphql`
  query ContactImages {
    home: file(relativePath: { eq: "home.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1920, quality: 100, placeholder: BLURRED)
      }
    }
  }
`

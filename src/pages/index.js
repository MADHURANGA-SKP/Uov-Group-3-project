import React, { useState } from "react"
import BackgroundImage from "gatsby-background-image"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"

const IndexPage = ({ data }) => {
  const images = {
    header: convertToBgImage(getImage(data.header)),
  }
  return (
    <Layout className="bg-[#DFDCD2]">
      <SEO title="Home" />

      <section>
        <div className="flex justify-center   h-[95vh] mb-5">
          <BackgroundImage {...images.header} className="h-full w-full">
            <section>
              <div className="py-5 text-left p-5">
                <div className="text-6xl mb-1 mt-1 text-zinc-50 font-semibold">
                  It's your time.
                </div>
                <div className="text-4xl mb-2 mt-2 text-zinc-50 font-semibold">
                  Improve Your Knowldge.
                </div>
                <div className="text-3xl mb-2 mt-2 text-black font-semibold">
                  Learning is a life long journey that <br /> in fact we never
                  find the terminate.
                  <br /> Stop searching, Enjoy the process.
                </div>
              </div>
              <section>
                <div className="flex justify-start py-5 p-5">
                  <Link to="signup">
                    <button className="inline-block px-4 py-2 mt-4 text-4xl leading-none ease-in-out transision duration-400  text-zinc-50 font-semibold hover:text-slate-400 border border-black rounded hover:border-slate-400 hover:bg-white lg:mt-0">
                      Sign Up Free
                    </button>
                  </Link>
                </div>
              </section>
            </section>
          </BackgroundImage>
        </div>
      </section>

      {/* <p><Link to="/page-2/">Go to page 2</Link></p>
    <p><Link to="/using-typescript/">Go to "Using TypeScript"</Link></p> */}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query ContactImages {
    header: file(relativePath: { eq: "header.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1920, quality: 100, placeholder: BLURRED)
      }
    }
  }
`

import React, { useState } from "react"
import BackgroundImage from "gatsby-background-image"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"

//

const Signup = ({ data }) => {
  const images = {
    signup: convertToBgImage(getImage(data.signup)),
  }

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    faculty: "",
    academicYear: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  })

  const handleChange = event => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    // Perform form submission logic here
    console.log(formData)
    // Reset form data
    setFormData({
      firstName: "",
      lastName: "",
      faculty: "",
      academicYear: "",
      email: "",
      userName: "",
      password: "",
      confirmPassword: "",
    })
  }

  return (
    <Layout className="bg-[#DFDCD2]">
      <SEO title="signup" />
      <section>
        <div className="flex justify-center   h-[95vh] mb-5">
          <BackgroundImage {...images.signup} className="h-full w-full">
            <div>
              <h1 className="font-semibold mt-10 mb-10">Sign-Up Form</h1>
              <form onSubmit={handleSubmit}>
                <input
                  className="rounded-lg p-2 mt-1 mb-2  bg-black/70 z-10 text-slate-300"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                />
                <br />
                <input
                  className="rounded-lg p-2 mt-1 mb-2  bg-black/70 z-10 text-slate-300"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                />
                <br />
                <input
                  className="rounded-lg p-2 mt-1 mb-2  bg-black/70 z-10 text-slate-300"
                  type="text"
                  name="faculty"
                  value={formData.faculty}
                  onChange={handleChange}
                  placeholder="Faculty"
                  required
                />
                <br />
                <input
                  className="rounded-lg p-2 mt-1 mb-2  bg-black/70 z-10 text-slate-300"
                  type="text"
                  name="academicYear"
                  value={formData.academicYear}
                  onChange={handleChange}
                  placeholder="Academic Year"
                  required
                />
                <br />
                <input
                  className="rounded-lg p-2 mt-1 mb-2  bg-black/70 z-10 text-slate-300"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
                <br />
                <input
                  className="rounded-lg p-2 mt-1 mb-2  bg-black/70 z-10 text-slate-300"
                  type="text"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                  placeholder="Username"
                  required
                />
                <br />
                <input
                  className="rounded-lg p-2 mt-1 mb-2  bg-black/70 z-10 text-slate-300"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                />
                <br />
                <input
                  className="rounded-lg p-2 mt-1 mb-2  bg-black/70 z-10 text-slate-300"
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  required
                />
                <br />
                <button
                  type="submit"
                  className="mt-5 p-2 rounded-lg bg-black/70 text-white font-semibold hover:bg-white/70 hover:text-black ease-in-out transition duration-400"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </BackgroundImage>
        </div>
      </section>
      {/* <p><Link to="/page-2/">Go to page 2</Link></p>
    <p><Link to="/using-typescript/">Go to "Using TypeScript"</Link></p> */}
    </Layout>
  )
}

export default Signup

export const query = graphql`
  query ContactImages {
    signup: file(relativePath: { eq: "signup.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 1920, quality: 100, placeholder: BLURRED)
      }
    }
  }
`

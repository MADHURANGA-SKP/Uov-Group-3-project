import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"

function Header({ siteTitle }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSignIn = () => {
    // Perform sign-in logic here, e.g. sending data to a backend API
    // You can access the username and password values from the state variables
    console.log("Username:", username)
    console.log("Password:", password)
  }

  const [isExpanded, toggleExpansion] = useState(false)
  const [banner, setBanner] = useState(false)
  return (
    <div>
      <nav className="flex flex-wrap items-center justify-between p-6  bg-[#140740]">
        <div className="flex items-center flex-shrink-0 mr-6 text-white">
          <div
            style={{ maxWidth: `50px` }}
            className="flex gap-3 justify-start cursor-pointer"
          >
            <StaticImage src="../images/icon1.png" alt="Header icon" />
          </div>
          <span className="text-xl font-semibold tracking-tight">
            <div className="px-3 cursor-pointer"> {siteTitle}</div>
          </span>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => toggleExpansion(!isExpanded)}
            className="flex items-center px-3 py-2 text-white border border-white rounded hover:text-white hover:border-white"
          >
            <svg
              className="w-3 h-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <div
            className="text-sm lg:flex-grow flex justify-center
        "
          >
            <Link
              to={`/`}
              href="#responsive-header"
              className="block mt-4 mr-4 px-5 font-semibold text-white lg:inline-block lg:mt-0 hover:text-white cursor-pointer"
            >
              Home
            </Link>
            <Link
              // to={`/page-2`}
              className="block mt-4 mr-4 px-5 font-semibold text-white lg:inline-block lg:mt-0 hover:text-white cursor-pointer"
            >
              Past Papers
            </Link>
            <Link
              // to={`/page-2`}
              className="block mt-4 mr-4 px-5 font-semibold text-white lg:inline-block lg:mt-0 hover:text-white cursor-pointer"
            >
              Results
            </Link>
            <Link
              to="main-menu"
              className="block mt-4 mr-4 px-5 font-semibold text-white lg:inline-block lg:mt-0 hover:text-white cursor-pointer"
            >
              Courses
            </Link>
          </div>
          <div className="px-3">
            <div
              onClick={() => setBanner(true)}
              className="inline-block px-4 py-2 mt-4 text-sm font-semibold leading-none ease-in-out transision duration-400  bg-[#FF8E1B] text-white cursor-pointer  rounded hover:border-transparent hover:text-black hover:bg-white lg:mt-0"
            >
              Sign In
            </div>
          </div>
          <div className="px-3">
            <Link to="signup">
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="inline-block px-4 py-2 mt-4 text-sm font-semibold leading-none ease-in-out transision duration-400  bg-[#796756] text-white  cursor-pointer rounded hover:border-transparent hover:text-black hover:bg-white lg:mt-0"
              >
                Sign Up
              </a>
            </Link>
          </div>
        </div>
      </nav>
      {banner && (
        <div className="fixed w-full h-screen inset-0 flex items-center justify-center z-10">
          <div className="flex items-center justify-center">
            <div className="max-w-4xl rounded-3xl p-5 bg-black/70">
              <div>
                <form onSubmit={handleSignIn} className="p-5">
                  <label htmlFor="username" className="text-white flex gap-2">
                    Username :
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="p-2"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                  />
                  <br />
                  <label htmlFor="password " className="text-white flex gap-2">
                    Password :
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="p-2"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                  <br />
                </form>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClick={() => setBanner(false)}
                >
                  <Link to="main-menu">
                    <button
                      type="submit"
                      className=" p-2 rounded-lg bg-[#FF8E1B] text-white font-semibold hover:bg-white hover:text-black ease-in-out transision duration-400 "
                    >
                      Sign In
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

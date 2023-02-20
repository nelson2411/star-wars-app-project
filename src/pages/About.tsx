import React from "react"
import NavigationBar from "../components/navbar/NavigationBar"
import Footer from "../components/footer/Footer"

import about from "../data/about.json"

const About = () => {
  return (
    <>
      <NavigationBar />
      <div>
        <h1>About</h1>
        <h3>{about.author}</h3>
        <p>{about.about}</p>
      </div>
      <Footer />
    </>
  )
}

export default About

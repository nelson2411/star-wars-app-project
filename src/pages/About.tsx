import React from "react"
import NavigationBar from "../components/navbar/NavigationBar"
import Footer from "../components/footer/Footer"
import { AboutContainer } from "./About.styles"
import about from "../data/about.json"

const About = () => {
  return (
    <>
      <NavigationBar />
      <AboutContainer>
        <h1>About</h1>
        <h2>Project Name: {about.name}</h2>
        <h3>Author: {about.author}</h3>
        <p>About me: {about["about-me"]}</p>
        <p>{about.about}</p>
        <p>Tech Stack:</p>
        {about.technologies.map((technology, index) => (
          <p key={index}>{technology}</p>
        ))}
      </AboutContainer>
      <Footer />
    </>
  )
}

export default About

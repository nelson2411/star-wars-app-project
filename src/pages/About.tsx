import React from "react"
import NavigationBar from "../components/navbar/NavigationBar"
import Footer from "../components/footer/Footer"
import { AboutContainer } from "./About.styles"
import about from "../data/about.json"

const About = () => {
  return (
    <div>
      <NavigationBar />
      <AboutContainer>
        <h1 className="text-center">About</h1>
        <h2>Project Name: {about.name}</h2>
        <h3>Author: {about.author}</h3>
        <p className="my-4">About me: {about["about-me"]}</p>
        <p className="my-4">{about.about}</p>
        <p>Tech Stack:</p>
        <ul>
          {about.technologies.map((technology, index) => (
            <li key={index}>{technology}</li>
          ))}
        </ul>
        <p>GitHub Link: {about["gitHubLink"]}</p>
      </AboutContainer>
      <Footer />
    </div>
  )
}

export default About

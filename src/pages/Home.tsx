import React from "react"
import NavigationBar from "../components/navbar/NavigationBar"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import TableContent from "../components/table/Table"

function Home() {
  return (
    <>
      <NavigationBar />
      <Header />
      <TableContent />
      <Footer />
    </>
  )
}

export default Home

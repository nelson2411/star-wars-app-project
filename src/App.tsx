import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import NavigationBar from "./components/navbar/NavigationBar";
import TableContent from "./components/table/Table";
import Footer from "./components/footer/Footer";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Header />
      <TableContent />
      <Footer />
    </React.Fragment>
  );
}

export default App;

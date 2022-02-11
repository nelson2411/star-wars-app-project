import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import NavigationBar from "./components/navbar/NavigationBar";
import TableContent from "./components/table/Table";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Header />
      <TableContent />
    </React.Fragment>
  );
}

export default App;

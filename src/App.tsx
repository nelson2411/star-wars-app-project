import React from "react"
import Home from "./pages/Home"
import About from "./pages/About"
import { Route, Switch } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import "./App.css"

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </React.Fragment>
  )
}

export default App

/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Random from "./pages/Random"
import Saved from "./pages/Saved"

class App extends Component {
  render() {
    return (
    <Router>
      <div>
        <Nav />

        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/random'} component={Random} />
          <Route exact path={'/saved'} component={Saved} />
        </Switch>
      </div>
    </Router>
  );
    }
  }

export default App;

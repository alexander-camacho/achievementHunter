/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Nav from "./components/Nav"
import Random from "./pages/Random"

class App extends Component {
  render() {
    return (
    <Router>
      <div>
        <Nav />

        <Switch>
          <Route exact path={'/random'} component={Random} />
        </Switch>
      </div>
    </Router>
  );
    }
  }

export default App;

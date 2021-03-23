/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Random from "./pages/Random"
import Saved from "./pages/Saved"
import { StoreProvider } from "./utils/GlobalState";

const App = () => {
  return (
    <Router>
      <div>
        <StoreProvider>
          <Nav />

          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/random'} component={Random} />
            <Route exact path={'/saved'} component={Saved} />
          </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;

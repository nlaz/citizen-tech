import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import Home from "./Home";
import JobBoard from "./JobBoard";

class App extends Component {
  render() {
    return (
      <div className="helvetica dark-gray bg-washed-blue" style={{ minHeight: "100vh" }}>
        <div className="center">
          <HashRouter>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/jobs" exact component={JobBoard} />
            </Switch>
          </HashRouter>
        </div>
      </div>
    );
  }
}

export default App;

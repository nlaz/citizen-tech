import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Home";
import JobBoard from "./JobBoard";

class App extends Component {
  render() {
    return (
      <div className="helvetica dark-gray bg-washed-blue" style={{ minHeight: "100vh" }}>
        <div className="center">
          <BrowserRouter basename="/citizen-tech">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/jobs" exact component={JobBoard} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;

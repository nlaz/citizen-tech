import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Home";
import Header from "./Header";
import JobBoard from "./JobBoard";

class App extends Component {
  render() {
    return (
      <div
        className="helvetica ph3 ph7-ns pb6 dark-gray bg-washed-blue"
        style={{ minHeight: "100vh" }}
      >
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/jobs" exact component={JobBoard} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

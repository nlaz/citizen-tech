import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Home";
import JobBoard from "./jobs/JobBoard";
import JobBoardAbout from "./jobs/JobBoardAbout";
import GoogleAnalytics from "./components/GoogleAnalytics";

class App extends Component {
  render() {
    return (
      <div className="helvetica dark-gray bg-washed-blue" style={{ minHeight: "100vh" }}>
        <BrowserRouter>
          <div className="center" style={{ minHeight: "100vh" }}>
            <Route path="/" component={GoogleAnalytics} />

            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/jobs" exact component={JobBoard} />
              <Route path="/jobs/about" exact component={JobBoardAbout} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";

import * as api from "./apiActions";
import Header from "./Header";

class JobBoard extends Component {
  state = { jobs: [] };
  componentDidMount() {
    api
      .fetchJobs()
      .then(response => this.setState({ jobs: response }))
      .catch(error => console.error(error));
  }

  render() {
    const { jobs } = this.state;
    return (
      <div className="job-board">
        <div className="bg-green black bb b--dark-green">
          <div className="mw8 center">
            <Header />
            <div className="pv5 bt bw2 b--black mb3 ph1 bg-green black">
              <h1 className="f2 lh-title b mv0">Really Good Jobs</h1>
              <h2 className="f4 lh-title mv0">
                A curated list of socially responsible job listings.
              </h2>
            </div>
          </div>
        </div>
        <div className="mw8 center ph1">
          {jobs.map(item => (
            <div key={item.id} className="pv4 bb">
              <span className="green b">{item.org_type}</span>
              <h4 className="f3 b ma0">{item.title}</h4>
              <h5 className="f4 fw4 ma0 pa0">{item.organization}</h5>
              <p className="lh-copy">{item.statement}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default JobBoard;

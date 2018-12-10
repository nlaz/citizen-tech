import React, { Component } from "react";

import * as api from "./apiActions";
import Header from "./Header";

const PAGE_SIZE = 15;

function Pagination({ items, active, pageSize, onSelect }) {
  const numPages = Math.ceil(items.length / pageSize);
  console.log(numPages);
  return (
    <div className="f4 flex b">
      {[...new Array(numPages)].map((_, index) => (
        <div
          key={index}
          onClick={() => onSelect(index)}
          className={active === index ? "pa2 green" : "pa2"}
          style={{ cursor: "pointer" }}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
}

class JobBoard extends Component {
  state = { jobs: [], page: 0 };

  componentDidMount() {
    api
      .fetchJobs()
      .then(response => this.setState({ jobs: response }))
      .catch(error => console.error(error));
  }

  onPageSelect = page => {
    this.setState({ page });
    window.scrollTo(0, 0);
  };

  render() {
    const { jobs, page } = this.state;
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
          {jobs.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE).map(item => (
            <div key={item.id} className="pv4 bb">
              <span className="green b">{item.org_type}</span>
              <h4 className="f3 b ma0">{item.title}</h4>
              <h5 className="f4 fw4 ma0 pa0">{item.organization}</h5>
              <p className="lh-copy">{item.statement}</p>
            </div>
          ))}

          <div className="mv3 flex justify-center items-center">
            <Pagination
              items={jobs}
              active={page}
              pageSize={PAGE_SIZE}
              onSelect={this.onPageSelect}
            />
          </div>

          <div className="bg-light-green b--dark-green pa4 mt6 mb5">
            <form
              action="https://space.us17.list-manage.com/subscribe/post?u=6ba21cd3bc4ade157639edfbd&amp;id=dc859dd739"
              method="post"
              className="mw6 center pv4"
              target="_blank"
              noValidate
            >
              <h3 className="f4 ma0">Citizen Tech Newsletter</h3>
              <p className="f5 lh-copy ma0 mb3">
                Join our community newsletter to hear how to get more involved with socially
                important work.
              </p>
              <label className="f5 b lh-copy">Join newsletter</label>
              <div className="flex">
                <input
                  type="email"
                  name="EMAIL"
                  placeholder="Email address"
                  className="f6 b--solid b--dark-gray bg-washed-blue w-100 pa2"
                />
                <button
                  type="submit"
                  className="f6 b b--solid b--dark-gray bg-washed-blue ml1 ph3 bw1 bg-animate hover-bg-dark-gray hover-washed-blue"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mw8 center pv4 ph1 flex justify-between black-80 bt b--black-80">
          <span className="f5 b">Citizen Tech © 2018</span>
          <span className="f5 b">Contact</span>
        </div>
      </div>
    );
  }
}

export default JobBoard;

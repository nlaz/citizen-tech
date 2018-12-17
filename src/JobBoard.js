import React, { Component } from "react";
import ta from "time-ago";
import { Icon, Dropdown, Placeholder } from "semantic-ui-react";

import { stateOptions, roleOptions } from "./common";
import emptyImage from "./undraw_empty.svg";
import * as api from "./apiActions";
import Header from "./Header";
import Pagination from "./Pagination";

const PAGE_SIZE = 15;

const SORT_OPTIONS = {
  CREATED_AT: "Recent",
  ALPHA: "A → Z",
  ALPHA_REVERSE: "Z → A",
};

class JobBoard extends Component {
  state = {
    jobs: [],
    results: [],
    page: 0,
    stateFilter: "",
    roleFilter: "",
    isLoading: true,
    sort: SORT_OPTIONS.CREATED_AT,
  };

  componentDidMount() {
    api
      .fetchJobs()
      .then(response => this.setState({ jobs: response, results: response, isLoading: false }))
      .catch(error => console.error(error));
  }

  onPageSelect = page => {
    this.setState({ page });
    window.scrollTo(0, 0);
  };

  handleChange = (e, { value, name }) => this.setState({ [name]: value });

  handleSearch = e => {
    e.preventDefault();
    this.setState({ isLoading: true });
    const { jobs, stateFilter, roleFilter } = this.state;
    const results = jobs
      .filter(el => (stateFilter ? el.state === stateFilter : true))
      .filter(el => el.role_types && (roleFilter ? el.role_types.indexOf(roleFilter) > -1 : true));
    setTimeout(() => this.setState({ results, page: 0, isLoading: false }), 300);
  };

  getSortedResults = (items, sort) => {
    switch (sort) {
      case SORT_OPTIONS.CREATED_AT:
        return [...items].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      case SORT_OPTIONS.ALPHA:
        return [...items].sort((a, b) => {
          const x = a.organization.toLowerCase();
          const y = b.organization.toLowerCase();
          return x < y ? -1 : x > y ? 1 : 0;
        });
      case SORT_OPTIONS.ALPHA_REVERSE:
        return [...items].sort((a, b) => {
          const x = b.organization.toLowerCase();
          const y = a.organization.toLowerCase();
          return x < y ? -1 : x > y ? 1 : 0;
        });
      default:
        return items;
    }
  };

  render() {
    const { results, page, sort, isLoading } = this.state;

    const sortedResults = this.getSortedResults(results, sort);

    return (
      <div className="job-board">
        <div className="bg-green black bb b--dark-green">
          <div className="mw8 center">
            <Header />
            <div className="pt5 bt bw2 b--black mb3 ph3 ph2-l relative">
              <h1 className="f2 lh-title b mv0">Better Fucking Jobs.</h1>
              <h2 className="f4 lh-title mv0 normal">
                A curated list of jobs good for you and society.
              </h2>
              <form
                className="flex flex-column flex-row-ns mt4 mb4
                 items-end"
                onSubmit={this.handleSearch}
              >
                <div className="fl w-100 w-50-ns pb2 pr1-ns flex flex-column">
                  <label className="f6 b lh-copy ph1">Role</label>
                  <Dropdown
                    search
                    selection
                    clearable
                    placeholder="Any"
                    name="roleFilter"
                    value={this.state.roleFilter}
                    onChange={this.handleChange}
                    options={roleOptions}
                    style={{
                      background: "transparent",
                      border: ".125rem solid black",
                      borderRadius: "0",
                    }}
                  />
                </div>
                <div className="fl w-100 w-40-ns pr1-ns pb2 flex flex-column">
                  <label className="f6 b lh-copy ph1">Location</label>
                  <Dropdown
                    search
                    selection
                    clearable
                    fluid
                    placeholder="Any"
                    name="stateFilter"
                    value={this.state.stateFilter}
                    onChange={this.handleChange}
                    options={stateOptions}
                    style={{
                      background: "transparent",
                      border: ".125rem solid black",
                      borderRadius: "0",
                    }}
                  />
                </div>
                <button
                  className="fl w-100 w-20-m w-10-ns b--black pa2 mt1 mt0-ns mb2 bg-transparent black b hover-bg-black hover-green"
                  style={{ height: "39.5px", borderWidth: ".125rem" }}
                  type="submit"
                >
                  {isLoading ? (
                    <span className="flex justify-center items-center">
                      <Icon name="spinner" loading />
                      <span className="dn-ns">Searching...</span>
                    </span>
                  ) : (
                    "Search"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mw8 center">
          <div className="flex justify-between items-end pb2 pt3 ph3">
            <span className="f5 green b">{results.length} results </span>
            <Dropdown
              name="sort"
              text={`Sort: ${sort}`}
              value={sort}
              onChange={this.handleChange}
              options={Object.keys(SORT_OPTIONS).map(el => ({
                key: el,
                value: SORT_OPTIONS[el],
                text: SORT_OPTIONS[el],
              }))}
            />
          </div>

          {sortedResults.length > 0 ? (
            <div className="bt">
              {sortedResults.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE).map(item => (
                <a
                  href={item.link}
                  key={item.id}
                  className="dark-gray hover-bg-washed-green bg-animate hover-dark-gray pv4 bb ph3 db"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="green b">{item.org_type}</span>
                  <h4 className="f3 b ma0">{item.title}</h4>
                  <h5 className="f4 fw4 ma0 pa0 mid-gray">{item.organization}</h5>
                  <div className="flex flex-wrap mb3">
                    {item.createdAt && (
                      <div className="mr3 pt2">
                        <Icon name="clock" />
                        <span className="gray">{ta.ago(item.createdAt)}</span>
                      </div>
                    )}
                    {item.location && (
                      <div className="mr3 pt2">
                        <Icon name="map marker alternate" />
                        <span className="gray">{item.location}</span>
                      </div>
                    )}
                    {item.employment_type && (
                      <div className="mr3 pt2">
                        <Icon name="briefcase" />
                        <span className="gray">{item.employment_type.join(", ")}</span>
                      </div>
                    )}
                    {item.salary && (
                      <div className="mr3 pt2">
                        <Icon name="usd" className="green" />
                        <span className="gray">{item.salary}</span>
                      </div>
                    )}
                  </div>
                  {item.description && (
                    <p className="lh-copy">
                      <b>Description:</b> {item.description}
                    </p>
                  )}
                </a>
              ))}
            </div>
          ) : (
            <div className="bt">
              {isLoading ? (
                <div>
                  <div className="pv4 ph2 bb b--light-gray">
                    <Placeholder>
                      <Placeholder.Line />
                      <Placeholder.Line />
                      <Placeholder.Line />
                      <Placeholder.Line />
                      <Placeholder.Line />
                    </Placeholder>
                  </div>
                  <div className="pv4 ph2 bb b--light-gray">
                    <Placeholder>
                      <Placeholder.Line />
                      <Placeholder.Line />
                      <Placeholder.Line />
                      <Placeholder.Line />
                      <Placeholder.Line />
                    </Placeholder>
                  </div>
                </div>
              ) : (
                <div className="pv5 center">
                  <div className="mw5 center">
                    <img src={emptyImage} alt="Empty view" />
                  </div>
                  <h4 className="f4 b lh-title tc ma0 mt4">No results found</h4>
                  <h5 className="f4 normal gray lh-title tc ma0">
                    Try different criteria and search again.
                  </h5>
                </div>
              )}
            </div>
          )}

          <div className="mv3 flex justify-center items-center">
            <Pagination
              items={results}
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

        <div className="mw8 center pv4 ph3 ph2-l flex justify-between black-80 bt b--black-80">
          <span className="f5 b">Citizen Tech © 2018</span>
          <a href="mailto:hey@citizen.tech" className="f5 b black-80 hover-black">
            Contact
          </a>
        </div>
      </div>
    );
  }
}

export default JobBoard;

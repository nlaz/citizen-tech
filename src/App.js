import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div
        className="helvetica ph3 ph5-ns pv6 dark-gray bg-washed-blue"
        style={{ minHeight: "100vh" }}
      >
        <div className="measure center">
          <h1 className="f1 lh-title mv1 mr3 dib">Citizen Tech</h1>
          <b className="dib">0.0.1</b>
          <h2 className="f5 lh-copy pb3 ma0 bb">To build socially responsible technologists.</h2>
          <p className="f5 lh-copy">
            Citizen tech is an agency for social and civic tech projects. It also provides a
            community for anyone interested in civic and social participation. Our mission is to
            connect professionals with socially important work.
          </p>
          <p className="f5 lh-copy">
            <b>Want to get involved?</b> Signing up for the newsletter below is a good place to get
            started.
          </p>

          <form
            action="https://space.us17.list-manage.com/subscribe/post?u=6ba21cd3bc4ade157639edfbd&amp;id=dc859dd739"
            method="post"
            className="pv4"
            target="_blank"
            noValidate
          >
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
    );
  }
}

export default App;

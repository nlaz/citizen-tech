import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="helvetica ph5 pv6 dark-gray bg-washed-blue" style={{ height: "100vh" }}>
        <div className="measure center">
          <h1 className="f1 lh-title mv1 mr3 dib">Citizen Tech</h1>
          <b className="dib">0.0.1</b>
          <h2 className="f5 lh-copy pb3 ma0 bb">To build socially responsible technologists.</h2>
          <p className="f5 lh-copy">
            The debug module is commented out at the bottom of the src/tachyons.css file. If you
            uncomment it a 1px outline will be placed on every element on the page. Each element has
            a different color outline. The purpose of this is to help distinguish elements that are
            close together by giving them different colors. This has been helpful at times when the
            outlines are overlapping by 1 or 2 pixels and it’s hard to tell where one element ends
            and the other begins.
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

import React from 'react';

function Newsletter() {
  return (
    <div className="bg-light-green b--dark-green pa4 mt6">
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
  );
}

export default Newsletter;

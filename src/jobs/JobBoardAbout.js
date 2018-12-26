import React from "react";
import Header from "../components/Header";

const Anchor = ({ to, children, className }) => (
  <a
    href={to}
    className={className || "b dark-green underline-hover hover-dark-green"}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

const Emoji = ({ value }) => (
  <span role="img" aria-label={value}>
    {value}
  </span>
);

function JobBoardAbout() {
  return (
    <div className="job-board bg-light-green black pb5" style={{ minHeight: "100vh" }}>
      <div className="bg-light-green bb b--light-green">
        <div className="mw8 center">
          <Header />
          <div className="pv5 bt bw2 b--black mb3 ph3 ph2-l">
            <h1 className="f2 lh-title black">About</h1>
            <p className="f3 lh-copy">
              <b>Welcome.</b> My name is{" "}
              <Anchor to="https://twitter.com/nikolazaris" className="black underline hover-black">
                Niko
              </Anchor>
              . I created this job board to help technologists find better work. Better work means
              jobs that are both good for you and good for society.
            </p>
          </div>
        </div>
      </div>
      <div className="mw8 center ph3 ph2-l">
        <h3 className="f3">Why?</h3>
        <p className="f4 lh-copy">
          The point of this job board is to help technologists find more satisfying work. This job
          board is for people that want to feel comfortable with the work they do. To be included in
          this job board, the job listing must be focused on a pressing social issue with the
          opportunity for real positive change.
        </p>
        <p className="f4 lh-copy">
          It contains a mixture of advocacy, service, philanthropy, international development,
          social enterprise, corporate social responsibility, and government improvement.
        </p>
        <h3 className="f3">Even Better Job Boards</h3>
        <p className="f4 lh-copy">
          This job board was inspired by and created from this collection of even better job boards.
          Check them out and consider bookmarking them.
        </p>
        <ul className="f4 lh-copy ml0 pl4">
          <li>
            Code for America's{" "}
            <Anchor to="https://jobs.codeforamerica.org/">Public Interest Tech Job Board</Anchor>
          </li>
          <li>
            80,000 Hours'{" "}
            <Anchor to="https://80000hours.org/job-board/">High Impact Job Board</Anchor>
          </li>
          <li>
            <Anchor to="https://twitter.com/mollieruskin">Mollie</Anchor> &{" "}
            <Anchor to="https://twitter.com/SFath">Sarah</Anchor>
            's <Anchor to="https://www.designgigsforgood.org/">Design Gigs for Good</Anchor>
          </li>
          <li>
            <Anchor to="https://twitter.com/@chris_whong">Chris Whong</Anchor>
            's <Anchor to="https://civicjobs.nyc/">NYC Civic Jobs</Anchor>
          </li>
        </ul>
        <h3 className="f3 mt4">
          Questions <Emoji value="🙋" />
        </h3>
        <p className="f4 lh-copy">
          I am always happy to answer your questions and suggestions over{" "}
          <Anchor to="https://twitter.com/nikolazaris">twitter</Anchor> or{" "}
          <Anchor to="mailto:niko@citizen.tech">email</Anchor>, too.
        </p>
      </div>
    </div>
  );
}

export default JobBoardAbout;

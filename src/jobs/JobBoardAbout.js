import React from "react";
import { Icon } from "semantic-ui-react";
import Header from "../components/Header";

const Anchor = ({ to, children }) => (
  <a
    href={to}
    className="b dark-green underline-hover hover-dark-green"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

function JobBoardAbout() {
  return (
    <div className="job-board bg-light-green black" style={{ minHeight: "100vh" }}>
      <div className="bg-light-green bb b--light-green">
        <div className="mw8 center">
          <Header />
          <div className="pv5 bt bw2 b--black mb3 ph3 ph2-l">
            <h1 className="f2 lh-title black">About</h1>
            <p className="f3 lh-copy">
              This job board is designed to help techologists find better work. Better work means
              being good for you and good for society.
            </p>
          </div>
        </div>
      </div>
      <div className="mw8 center ph3 ph2-l">
        <h3 className="f3">What's the point?</h3>
        <p className="f4 lh-copy">
          The point of this job board is to help technologists find more satisfying work. This job
          board is for people that want to feel ethically comfortable with the work they do. To be
          included in this job board, the job must be focussed on a pressing social issue with the
          opportunity for real positive change.
        </p>
        <p className="f4 lh-copy">
          It contains a mixture of advocacy, service, philanthropy, international development,
          social enterprise, corporate social responsibility, and government improvement.
        </p>
        <h3 className="f3">Even Better Job Boards</h3>
        <p className="f4 lh-copy">
          This job board was inspired and helped by this collection of even better job boards. Check
          them out and consider bookmarking them.
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
        <h3 className="f3 mt4">Who made this?</h3>
        <p className="f4 lh-copy">
          <Anchor to="http://citizen.tech">Citizen Tech</Anchor> and its job board was created by{" "}
          <Anchor to="https://twitter.com/nikolazaris">Niko Lazaris</Anchor> to help other
          designers, developers, and product managers. It is{" "}
          <Anchor to="https://github.com/nlaz/citizen-tech">
            <Icon name="github" size="small" className="dark-green" />
            open source
          </Anchor>{" "}
          if you are curious.
        </p>
        <p className="f4 lh-copy">
          I'm happy to answer your questions over{" "}
          <Anchor to="https://twitter.com/nikolazaris">twitter</Anchor> or{" "}
          <Anchor to="mailto:hey@citizen.tech">email</Anchor>, too.
        </p>
      </div>
    </div>
  );
}

export default JobBoardAbout;

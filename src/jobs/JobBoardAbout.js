import React from "react";
import Header from "../components/Header";

function JobBoardAbout() {
  return (
    <div className="job-board bg-light-green dark-gray" style={{ minHeight: "100vh" }}>
      <div className="bg-light-green bb b--light-green">
        <div className="mw8 center">
          <Header />
          <div className="pv5 bt bw2 b--black mb3 ph3 ph2-l">
            <h1 className="f2 lh-title black">About</h1>
            <p className="f4 lh-copy">
              This job board is focused on helping technologists find satisfying work. It contains a
              mixture of advocacy, service, philanthropy, international development, social
              enterprise, corporate social responsibility, and government improvement.
            </p>
          </div>
        </div>
      </div>
      <div className="mw8 center ph3 ph2-l">
        <div className="mw7">
          <h3 className="f3">What's the point?</h3>
          <p className="f4 lh-copy">
            It contains a mixture of advocacy, service, philanthropy, international development,
            social enterprise, corporate social responsibility, and government improvement.
          </p>
          <h3 className="f3">Where do these jobs come from?</h3>
          <p className="f4 lh-copy">
            These It contains a mixture of advocacy, service, philanthropy, international
            development, social enterprise, corporate social responsibility, and government
            improvement.
          </p>
        </div>
      </div>
    </div>
  );
}

export default JobBoardAbout;

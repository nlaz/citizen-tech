import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Icon } from "semantic-ui-react";

function Header(props) {
  const isJobBoard = props.match.path === "/jobs";
  return (
    <div className="flex justify-between items-center b pv3 ph3 ph2-l">
      <div className="f4 b">
        <Link to="/" className="link dark-gray hover-dark-gray">
          Citizen Tech
        </Link>
      </div>
      <div className="f5 b lh-title flex">
        <Link to="/resources" className="link dark-gray hover-dark-gray underline-hover mr3 mr4-ns">
          Resources
        </Link>
        {isJobBoard && (
          <a
            href="https://airtable.com/shrAPBjzRwAcDHBui"
            className="link dark-gray hover-dark-gray underline-hover mr3 mr4-ns flex items-center"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Icon name="plus" size="small" />
            <span>Add Job</span>
          </a>
        )}
        <Link to="/jobs" className="link dark-gray hover-dark-gray underline-hover">
          Job Board
        </Link>
      </div>
    </div>
  );
}

export default withRouter(Header);

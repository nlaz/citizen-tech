import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between items-center b pv3 ph1">
      <div className="f4 b">
        <Link to="/" className="link dark-gray">
          Citizen Tech
        </Link>
      </div>
      <div className="f5 b lh-title">
        <Link to="/jobs" className="link dark-gray underline-hover">
          Job Board
        </Link>
      </div>
    </div>
  );
}

export default Header;

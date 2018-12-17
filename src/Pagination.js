import React from "react";
import cx from "classnames";

function Pagination({ items, active, pageSize, onSelect }) {
  const numPages = Math.min(Math.ceil(items.length / pageSize), 12);
  return (
    <div className="f4 flex b">
      {[...new Array(numPages)].map((_, index) => (
        <div
          key={index}
          onClick={() => onSelect(index)}
          className={cx("pa2", {
            green: items.length > 0 && active === index,
            "moon-gray": items.length === 0,
          })}
          style={{ cursor: "pointer" }}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
}

export default Pagination;

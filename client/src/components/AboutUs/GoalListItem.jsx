import React from "react";

const GoalListItem = ({ title }) => {
  return (
    <li className="flex items-center gap-3 py-3">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.2062 8.11206L9.20212 12.1137L6.79492 9.71373"
          stroke="#90BF22"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="0.996094"
          y="0.995972"
          width="18.0075"
          height="18.0075"
          rx="5"
          stroke="#90BF22"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {title}
    </li>
  );
};

export default GoalListItem;

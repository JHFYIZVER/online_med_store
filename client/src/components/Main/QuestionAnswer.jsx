import React from "react";

const QuestionAnswer = ({ title }) => {
  return (
    <li className="flex items-center gap-4 text-[18px]">
      <svg
        width="26"
        height="19"
        viewBox="0 0 26 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.1237 0L8.30928 15.3562L1.87629 9.10959L0 10.9966L8.30928 19L26 1.82192L24.1237 0Z"
          fill="#32FF3B"
        />
      </svg>
      {title}
    </li>
  );
};

export default QuestionAnswer;

import React from "react";

const PrevBtn = ({devicePage, deviceSetPage}) => {
  return (
    <button
      onClick={() => devicePage > 1 && deviceSetPage(devicePage - 1)}
      className="rounded-[15px] bg-green max-w-[45px] w-full h-[45px] flex items-center justify-center"
    >
      <svg
        width="6"
        height="8"
        viewBox="0 0 6 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.46761 4.00002L5.12261 1.34502C5.41341 1.05249 5.41341 0.580051 5.12261 0.287523C4.98179 0.145538 4.79009 0.0656738 4.59011 0.0656738C4.39013 0.0656738 4.19844 0.145538 4.05761 0.287523L0.877611 3.46752C0.735626 3.60835 0.655762 3.80004 0.655762 4.00002C0.655762 4.2 0.735626 4.3917 0.877611 4.53252L4.05761 7.75002C4.19915 7.89041 4.39076 7.96868 4.59011 7.96752C4.78946 7.96868 4.98107 7.89041 5.12261 7.75002C5.41341 7.45749 5.41341 6.98505 5.12261 6.69252L2.46761 4.00002Z"
          fill="white"
        />
      </svg>
    </button>
  );
};

export default PrevBtn;

import React from "react";

const NextBtn = ({devicePage, deviceTotalCount, deviceLimit, deviceSetPage}) => {
  return (
    <button
      onClick={() =>
         devicePage < Math.ceil(deviceTotalCount / deviceLimit) &&
        deviceSetPage(devicePage + 1)
      }
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
          d="M3.53239 4.00002L0.877387 1.34502C0.586594 1.05249 0.586594 0.580051 0.877387 0.287523C1.01821 0.145538 1.20991 0.0656738 1.40989 0.0656738C1.60987 0.0656738 1.80156 0.145538 1.94239 0.287523L5.12239 3.46752C5.26437 3.60835 5.34424 3.80004 5.34424 4.00002C5.34424 4.2 5.26437 4.3917 5.12239 4.53252L1.94239 7.75002C1.80085 7.89041 1.60924 7.96868 1.40989 7.96752C1.21054 7.96868 1.01893 7.89041 0.877387 7.75002C0.586594 7.45749 0.586594 6.98505 0.877387 6.69252L3.53239 4.00002Z"
          fill="white"
        />
      </svg>
    </button>
  );
};

export default NextBtn;

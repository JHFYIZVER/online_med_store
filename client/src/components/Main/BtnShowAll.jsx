import React from "react";
import { Link } from "react-router-dom";
import { CATEGORY_ROUTE } from "../../utils/const";
const BtnShowAll = () => {
  return (
    <button className="btn-show-all flex bg-[#51A594] py-3 text-white items-center gap-6 px-8 mt-10 rounded-tl-[4px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[4px] z-10">
      <Link to={CATEGORY_ROUTE}>Смотреть все</Link>
      <svg
        width="24"
        height="8"
        viewBox="0 0 16 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="arrow-icon"
      >
        <path d="M15 4H4V1" stroke="white" />
        <path d="M14.5 4H3.5H0" stroke="white" />
        <path
          d="M15.8536 4.35355C16.0488 4.15829 16.0488 3.84171 15.8536 3.64645L12.6716 0.464466C12.4763 0.269204 12.1597 0.269204 11.9645 0.464466C11.7692 0.659728 11.7692 0.976311 11.9645 1.17157L14.7929 4L11.9645 6.82843C11.7692 7.02369 11.7692 7.34027 11.9645 7.53553C12.1597 7.7308 12.4763 7.7308 12.6716 7.53553L15.8536 4.35355ZM15 4.5L15.5 4.5L15.5 3.5L15 3.5L15 4.5Z"
          fill="white"
        />
      </svg>
    </button>
  );
};

export default BtnShowAll;

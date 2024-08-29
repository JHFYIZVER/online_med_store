import React from "react";
import { Link } from "react-router-dom";
import { CATEGORY_ROUTE } from "../../utils/const";
const BtnShowAll = () => {
  return (
    <button className="flex bg-[#51A594] py-3 text-white items-center gap-6 px-8 mt-10 rounded-tl-[4px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[4px] z-10">
      <Link to={CATEGORY_ROUTE}>Смотреть все</Link>
      <svg
        width="42"
        height="15"
        viewBox="0 0 42 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 6.5C0.447715 6.5 0 6.94772 0 7.5C0 8.05228 0.447715 8.5 1 8.5V6.5ZM41.7071 8.20711C42.0976 7.81658 42.0976 7.18342 41.7071 6.79289L35.3431 0.428932C34.9526 0.0384078 34.3195 0.0384078 33.9289 0.428932C33.5384 0.819457 33.5384 1.45262 33.9289 1.84315L39.5858 7.5L33.9289 13.1569C33.5384 13.5474 33.5384 14.1805 33.9289 14.5711C34.3195 14.9616 34.9526 14.9616 35.3431 14.5711L41.7071 8.20711ZM1 8.5H41V6.5H1V8.5Z"
          fill="white"
        />
      </svg>
    </button>
  );
};

export default BtnShowAll;

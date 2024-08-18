import React from "react";

const ButtonForm = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#3D8072] text-white py-[15px] rounded-[5px] max-w-[300px] w-full my-[20px]"
    >
      {title}
    </button>
  );
};

export default ButtonForm;

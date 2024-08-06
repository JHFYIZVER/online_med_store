import React from "react";

const ModalInput = ({ placeholder, type }) => {
  return (
    <input
      className="border border-[#EAEAEA] py-4 pl-12 max-w-[440px] w-full rounded-xl text-[#A5A5A5] outline-none"
      placeholder={placeholder}
      type={type ? type : "text"}
    />
  );
};

export default ModalInput;

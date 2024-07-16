import React from "react";

const InputForm = ({ placeholder, type, autoComplete }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      autoComplete={autoComplete}
      className="rounded-[5px] p-[14px] border my-[15px] border-[#EAEAEA] text-[#3D3D3D] w-full min-w-[300px]"
    />
  );
};

export default InputForm;

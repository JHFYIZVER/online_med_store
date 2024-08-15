import React from "react";

const InputForm = ({ value, onChange, placeholder, type, autoComplete }) => {
  return (
    <input
      type={type ? type : "text"}
      placeholder={placeholder}
      autoComplete={autoComplete}
      value={value}
      onChange={onChange}
      className="rounded-[5px] p-[14px] border my-[15px] border-[#EAEAEA] text-[#3D3D3D] max-w-[380px] w-full outline-none"
    />
  );
};

export default InputForm;

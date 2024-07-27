import React from "react";

const AdvantagesBlock = ({ src, title, disription, clazz }) => {
  return (
    <div className="flex flex-col items-center justify-between max-w-[370px] w-full max-h-[180px] h-full bg-white rounded-[20px] relative">
      <img src={src} alt="discountTag" className={`absolute ${clazz}`} />
      <div
        className={`flex flex-col items-center justify-center pt-[72px] pb-[30px] px-[48px] text-[18px] ${clazz}`}
      >
        <h2 className="text-[#555555] font-bold">{title}</h2>
        <p className="text-center max-w-[270px] text-[#7A7A7A]">{disription}</p>
      </div>
    </div>
  );
};

export default AdvantagesBlock;

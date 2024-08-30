import React from 'react';

const Advantages = ({img, title, discription}) => {
   return (
      <div className="advantages-list-item max-w-[446.6px] w-full bg-[#F2F7EB]/40 border flex flex-col items-center gap-2 py-[20px]">
          <img src={img} alt="AdvantagesImg" />
          <h2 className="font-bold text-xl">{title}</h2>
          <p className="text-center text-lg max-w-[310px] leading-[22px]">
            {discription}
          </p>
        </div>
   );
};

export default Advantages;
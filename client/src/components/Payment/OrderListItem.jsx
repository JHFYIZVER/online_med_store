import React from "react";

const OrderListItem = ({ id, price, name, img, count }) => {
  return (
    <div className="flex items-center w-full bg-[#FBFBFB] mb-2">
      <div className="flex items-center gap-4 flex-[60%]">
        <img
          className="max-w-[70px] w-full max-h-[70px] h-full"
          src={import.meta.env.VITE_API_URL + img}
          alt="deviceImg"
        />
        <h2 className="flex flex-col text-[#3D3D3D] font-medium max-w-[220px]">
          {name}
          <span className="text-[#727272]">ID:{id}</span>
        </h2>
      </div>
      <p className="flex flex-[20%]">{count}</p>
      <p className="text-darkGreen font-bold flex-[20%]">{price} ₽</p>
    </div>
  );
};

export default OrderListItem;

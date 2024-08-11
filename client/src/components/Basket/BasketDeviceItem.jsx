import React, { useContext } from "react";
import deliteItemImg from "../../assets/img/Basket/deliteItem.svg";
import { Context } from "../../main";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../../utils/const";

const BasketDeviceItem = ({
  id,
  price,
  name,
  img,
  count,
  idProduct,
  deliteItem,
  changeCount,
}) => {
  const { basket } = useContext(Context);
  const navigate = useNavigate();
  basket.setTotalPrice(price * count);
  return (
    <div className="flex items-center max-w-[790px] w-full bg-[#FBFBFB] my-2 rounded-md">
      <div
        onClick={() => navigate(DEVICE_ROUTE + "/" + id)}
        className="flex items-center gap-4 flex-[40%] cursor-pointer"
      >
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
      <p className="text-[#727272] flex-[20%]">{price}</p>
      <p className="flex-[20%]">{count}</p>
      <p className="text-darkGreen flex-[10%]">{price * count}</p>
      <button className="flex-[10%]" onClick={() => deliteItem(idProduct)}>
        <img src={deliteItemImg} alt="deliteItem" />
      </button>
    </div>
  );
};
export default BasketDeviceItem;

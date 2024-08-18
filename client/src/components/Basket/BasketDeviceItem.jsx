import React, { useContext, useState, useEffect } from "react";
import deliteItemImg from "../../assets/img/Basket/deliteItem.svg";
import { Context } from "../../main";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../../utils/const";
import { Skeleton } from "@mui/material";

const BasketDeviceItem = ({
  id,
  price,
  name,
  img,
  count,
  idProduct,
  deliteItem,
  changeCount,
  loading,
}) => {
  const { basket } = useContext(Context);
  const [basketCount, setBasketCount] = useState(count);
  const navigate = useNavigate();

  useEffect(() => {
    basket.setTotalPrice(
      basket.basket.reduce((acc, item) => acc + item.device.price, 0)
    );
  }, [basket.basket]);

  const setIncrease = async () => {
    setBasketCount(basketCount + 1);
    await basket.setTotalPrice(basket.totalPrice + price);
    await basket.setTotalCount(basket.totalCount + 1);
    await changeCount(idProduct, basketCount + 1);
  };

  const setDecrease = async () => {
    const totalPrice =
      basket.totalPrice - price <= 0 ? 0 : basket.totalPrice - price;
    const totalCount = basket.totalCount - 1 <= 0 ? 0 : basket.totalCount - 1;

    if (basketCount - 1 <= 0) {
      setBasketCount(0);
      await deliteItem(idProduct);
    } else {
      setBasketCount(basketCount - 1);
      await changeCount(idProduct, basketCount - 1);
    }
    await basket.setTotalCount(totalCount);
    await basket.setTotalPrice(totalPrice);
  };

  return (
    <div className="flex items-center max-w-[790px] w-full bg-[#FBFBFB] my-2 rounded-md">
      {!loading ? (
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
      ) : (
        <Skeleton animation="wave" variant="rectangle" width={70} height={70} />
      )}
      <p className="text-[#727272] flex-[20%]">{price}</p>
      <div className="flex flex-[20%] gap-2">
        <button
          onClick={setDecrease}
          className="text-white text-xl bg-darkGreen rounded-full w-[20px] h-[20px] flex items-center justify-center"
        >
          -
        </button>
        <p>{basketCount}</p>
        <button
          onClick={setIncrease}
          className="text-white text-xl bg-darkGreen rounded-full w-[20px] h-[20px] flex items-center justify-center"
        >
          +
        </button>
      </div>
      <p className="text-darkGreen flex-[10%]">{price * basketCount}</p>
      <button className="flex-[10%]" onClick={() => deliteItem(idProduct)}>
        <img src={deliteItemImg} alt="deliteItem" />
      </button>
    </div>
  );
};
export default BasketDeviceItem;

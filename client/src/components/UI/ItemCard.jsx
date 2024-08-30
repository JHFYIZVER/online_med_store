import React from "react";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../../utils/const";
import Skeleton from "@mui/material/Skeleton";

const ItemCard = ({ device, loading }) => {
  const navigate = useNavigate();

  if (!device) {
    return null;
  }

  return (
    <div className="item-card flex flex-col rounded-[24px] bg-white items-center justify-between max-w-[240px] pb-5 w-full min-h-[400px] max-h-[400px]">
      <div className="bg-card bg-green rounded-t-[24px] relative h-[144px] w-full">
        {!loading ? (
          <img
            className="absolute top-[-30px] right-5 cursor-pointer max-w-[190px] max-h-[190px] w-full "
            onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}
            src={import.meta.env.VITE_API_URL + device.img}
            alt="cardImg"
          />
        ) : (
          <Skeleton
            variant="circular"
            animation="wave"
            height={140}
            width={140}
            style={{ marginLeft: "auto", marginRight: "auto" }}
          />
        )}
      </div>
      {!loading ? (
        <div className="max-w-[240px] w-full text-center px-5 flex flex-col gap-2">
          <h4 className="font-semibold text-[16px]">{device.nameType}</h4>
          <h3 className="font-semibold text-[24px] leading-[25px]">
            {device.name}
          </h3>
          <div className="text-[#828282] text-[12px] max-h-[50px] overflow-hidden">
            {device.shortDescription}
          </div>
        </div>
      ) : (
        <>
          <Skeleton
            variant="rectangle"
            animation="wave"
            height={10}
            width={100}
          />
          <Skeleton
            variant="rectangle"
            animation="wave"
            height={20}
            width={200}
          />
          <Skeleton
            variant="rectangle"
            animation="wave"
            height={40}
            width={150}
          />
        </>
      )}

      {!loading ? (
        <div className="px-5 w-full">
          <button   onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)} className="py-[15px] text-white bg-green rounded-xl w-full ">
            {device.price} ₽ - Купить
          </button>
        </div>
      ) : (
        <Skeleton variant="rounded" animation="wave" height={50} width={210} />
      )}
    </div>
  );
};

export default ItemCard;

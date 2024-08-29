import React from "react";
import cardImg from "../../../assets/img/Card_img.png";
import "./EquipmentCard.scss"

const EquipmentCard = () => {
  return (
    <div className="card flex flex-col rounded-[24px] bg-[#51A594] p-[20px] items-center justify-between max-w-[280px] w-full min-h-[400px]">
      <div className="flex flex-col items-center">
        <h3 className="font-semibold text-[24px] text-white pb-[20px]">
          Хирургия
        </h3>
        <div className="card-img bg-[#3D8072] rounded-[20px] max-w-[190px] w-full">
          <img src={cardImg} alt="card-item" />
        </div>
      </div>
      <button className="py-[15px] text-[#6EAF7E] bg-white rounded-xl w-full">
        Подробнее
      </button>
    </div>
  );
};

export default EquipmentCard;

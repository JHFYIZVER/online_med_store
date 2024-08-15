import React from "react";
import emptyBasket from "../../assets/img/Basket/emptyBasket.svg";
import { useNavigate } from "react-router-dom";
import { CATEGORY_ROUTE } from "../../utils/const";

const NoItems = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-[1110px] w-full mx-auto mb-20 bg-white rounded-xl flex flex-col items-center justify-center py-8 gap-3">
      <img src={emptyBasket} alt="emptyBasket" />
      <h2 className="text-[#282739] font-bold text-2xl">Ваша корзина пуста</h2>
      <p className="text-sm">Добавьте в нее товары из каталога</p>
      <button className="bg-darkGreen text-white px-9 py-3 rounded-[5px]" onClick={() => navigate(CATEGORY_ROUTE)}>
        Перейти в каталог
      </button>
    </div>
  );
};

export default NoItems;

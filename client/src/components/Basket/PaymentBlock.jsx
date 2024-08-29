import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../../main";
import { useNavigate } from "react-router-dom";
import { PAYMENT_ROUTE } from "../../utils/const";

const PaymentBlock = observer(() => {
  const { basket } = useContext(Context);
  const navigate = useNavigate();
  return (
    <div className="payment-block flex flex-col max-w-[330px] w-full right-0">
      <h1 className="text-[#3D3D3D] font-black text-[18px]">Корзина</h1>
      <hr className="bg-[#46A358]/50" />
      <p className="py-3">Промокод</p>
      <div className="relative">
        <input
          type="text"
          placeholder="Введите промокод..."
          className="p-3 border rounded-l-[5px] border-darkGreen outline-none"
        />
        <button className="absolute bg-darkGreen hover:bg-[#3a694c] transition-all text-white h-full px-5 rounded-r-[5px]">
          Применить
        </button>
      </div>
      <div className="pt-5 text-[#3D3D3D]">
        <div className="flex justify-between py-2">
          <p>Промежуточная стоимость:</p>
          <p>{basket.totalPrice}</p>
        </div>
        <div className="flex justify-between py-2">
          <p>Скидка:</p>
          <p>0</p>
        </div>
        <div className="flex justify-between py-2">
          <p>Доставка:</p>
          <p>500₽</p>
        </div>
      </div>
      <div className="flex justify-between py-7">
        <p className="text-[#3D3D3D] font-bold">Итого</p>
        <p className="text-darkGreen font-black text-[18px]">
          {basket.totalPrice + 500}₽
        </p>
      </div>
      <button
        onClick={() => navigate(PAYMENT_ROUTE)}
        className="bg-darkGreen hover:bg-[#3a694c] transition-all text-white h-full px-4 rounded-[5px] py-3"
      >
        Перейти к оплате
      </button>
    </div>
  );
});

export default PaymentBlock;

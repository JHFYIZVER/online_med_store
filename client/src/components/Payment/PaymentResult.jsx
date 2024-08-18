import React, { useContext } from "react";
import { Context } from "../../main";
import { observer } from "mobx-react-lite";
import ButtonForm from "../UI/ButtonForm";
import { Checkbox } from "@mui/material";
import ModalStore from "../../store/ModalStore";
import ModalOrder from "../UI/Modals/ModalOrder";

const Modal = new ModalStore();

const PaymentResult = observer(() => {
  const { basket } = useContext(Context);
  return (
    <div className="flex flex-col sticky right-12 mb-6 max-w-[285px] max-h-[360px] w-full p-5 bg-white rounded-md">
      <span>Итого</span>
      <h1 className="text-[#282739] font-bold text-2xl">
        {basket.totalPrice} ₽
      </h1>
      <hr />
      <p className="flex items-center justify-between py-2 text-[#282739]">
        Стоимость товаров <span>{basket.totalPrice} ₽</span>
      </p>
      <p className="flex items-center justify-between py-2 text-[#282739]">
        Сумма скидки <span>0 ₽</span>
      </p>
      <hr />
      <ButtonForm onClick={() => Modal.setIsOpen(true)} title={"Подтвердить заказ"} />
      <label className="flex gap-2 items-start text-xs">
        <Checkbox />
        <p>
          Нажимая на кнопку, вы соглашаетесь на обработку персональных данных.
        </p>
      </label>
      <ModalOrder {...Modal} />
    </div>
  );
});

export default PaymentResult;

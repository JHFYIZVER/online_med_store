import React, { useContext } from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import thanks from "../../Payment/thanks.svg";
import OrderList from "../../Payment/OrderList";
import { Context } from "../../../main";
import ButtonForm from "../ButtonForm";
import { useNavigate } from "react-router-dom";
import { MAIN_ROUTE } from "../../../utils/const";

const ModalOrder = ({ isOpen, setIsOpen }) => {
  const { basket } = useContext(Context);
  const navigate = useNavigate();
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          static
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-50"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50"
          />
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel
              as={motion.div}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-xl relative w-full space-y-4 flex flex-col items-center bg-white border-[#3D8072] border-b-[10px] max-h-[calc(100vh-40px)] overflow-y-auto"
            >
              <DialogTitle className=" flex flex-col items-center text-base font-medium text-[#727272] bg-[#46A358]/10 w-full p-8 gap-2 border border-b">
                <img src={thanks} alt="thanks" />
                Ваш заказ оформлен!
              </DialogTitle>
              <ul className="flex justify-between gap-8 text-[#727272] ">
                <li className="flex flex-col items-start">
                  Номер заказа
                  <span className="font-bold text-[#727272]">19586687</span>
                </li>
                <li className="flex flex-col items-start">
                  Дата
                  <span className="font-bold text-[#727272]">15 Sep, 2024</span>
                </li>
              </ul>
              <div className="w-full border-t py-2 px-8">
                <h3 className="font-bold">Детали заказа</h3>
                <div className="flex font-medium border-b">
                  <h4 className="flex-[60%]">Товар</h4>
                  <h4 className="flex-[20%]">Кол-во</h4>
                  <h4 className="flex-[20%]">Цена</h4>
                </div>
              </div>
              <OrderList />
              <div className="flex gap-4 flex-col border-b px-8 w-full ">
                <p className="flex items-center gap-5 justify-end">
                  Доставка <span>500₽</span>
                </p>
                <p className="font-bold flex items-center gap-5 justify-end">
                  Итог
                  <span className="text-darkGreen">
                    {basket.totalPrice + 500}₽
                  </span>
                </p>
              </div>
              <Description className="px-8 text-center text-[#727272]">
                В настоящее время ваш заказ обрабатывается. Вскоре вы получите
                электронное письмо с подтверждением заказа и ожидаемой датой
                доставки ваших товаров.
              </Description>
              <div className="max-w-[160px] w-full">
                <ButtonForm
                  onClick={() => {
                    basket.setBasket([]);
                    setIsOpen(false)
                    navigate(MAIN_ROUTE);
                  }}
                  title={"На главную"}
                />
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-5"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.17007 3.17007C3.39682 2.94331 3.76447 2.94331 3.99122 3.17007L9 8.17884L14.0088 3.17007C14.2355 2.94331 14.6032 2.94331 14.8299 3.17007C15.0567 3.39682 15.0567 3.76447 14.8299 3.99122L9.82116 9L14.8299 14.0088C15.0567 14.2355 15.0567 14.6032 14.8299 14.8299C14.6032 15.0567 14.2355 15.0567 14.0088 14.8299L9 9.82116L3.99122 14.8299C3.76447 15.0567 3.39682 15.0567 3.17007 14.8299C2.94331 14.6032 2.94331 14.2355 3.17007 14.0088L8.17884 9L3.17007 3.99122C2.94331 3.76447 2.94331 3.39682 3.17007 3.17007Z"
                    fill="#3D8072"
                  />
                </svg>
              </button>
            </DialogPanel>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default ModalOrder;

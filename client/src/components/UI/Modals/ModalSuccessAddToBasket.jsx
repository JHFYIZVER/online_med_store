import React from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { BASKET_ROUTE } from "../../../utils/const";

const ModalSuccessAddToBasket = ({ isOpen, setIsOpen, name }) => {
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
              className="max-w-xl relative w-full space-y-4 rounded-3xl flex flex-col items-center bg-white p-12"
            >
              <DialogTitle className="text-2xl font-medium text-[#313131]">
                Товар в корзине!
              </DialogTitle>
              <Description className="text-center max-w-xs text-[#7A7A7A]">
              {name} успешно добавлен в вашу корзину!
              </Description>

              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate(BASKET_ROUTE);
                }}
                className="flex items-center justify-center gap-3 text-white bg-darkGreen rounded-[20px] max-w-[240px] w-full py-4 absolute -bottom-5"
              >
                Перейти в корзину
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full bg-[#D9D9D9] max-w-12 w-full flex items-center justify-center h-12 absolute -top-8 -right-6 shadow-[0_0_30px_rgba(255,255,255,0.8)] "
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.46436 12.5357L13.071 1.92908M13.071 12.5357L2.46436 1.92908"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
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

export default ModalSuccessAddToBasket;

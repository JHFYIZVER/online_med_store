import React from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { observer } from "mobx-react-lite";
import person from "./person.svg";
import tel from "./tel.svg";
import coment from "./coment.svg";
import ModalInput from "./ModalInput";

const ModalContactUs = observer(({ setIsOpen, isOpen }) => {
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
                Связатся с нами
              </DialogTitle>
              <Description className="text-center max-w-xs text-[#7A7A7A]">
                Оставьте свои данные и наш специалист обязательно свяжемся с
                Вами в течение дня
              </Description>
              <div className="max-w-[440px] w-full relative">
                <img
                  className="absolute left-5 top-[22px]"
                  src={person}
                  alt="person"
                />
                <ModalInput placeholder={"Ваше имя"} />
              </div>
              <div className="max-w-[440px] w-full relative">
                <img
                  className="absolute left-5 top-[22px]"
                  src={tel}
                  alt="tel"
                />
                <ModalInput placeholder={"Ваш телефон"} />
              </div>
              <div className="max-w-[440px] w-full relative">
                <img
                  className="absolute left-5 top-[22px]"
                  src={coment}
                  alt="coment"
                />
                <textarea
                  className="border border-[#EAEAEA] py-4 pl-12 max-w-[440px] resize-none h-[100px] w-full rounded-xl outline-none"
                  placeholder="Дополнительные комментарии"
                ></textarea>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-3 text-white bg-darkGreen rounded-[20px] max-w-[240px] w-full py-4 absolute -bottom-5"
              >
                Отправить
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.00760714 0L0 5.33332L6.85714 6.85714L0 8.38096L0.00760714 13.7143L16 6.85714L0.00760714 0Z"
                    fill="white"
                  />
                </svg>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full bg-[#D9D9D9] max-w-12 w-full flex items-center justify-center h-12 absolute -top-8 -right-3 shadow-[0_0_30px_rgba(255,255,255,0.8)] "
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
});

export default ModalContactUs;

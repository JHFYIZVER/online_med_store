import React from "react";
import ModalStore from "../store/ModalStore";
import CreateDevice from "../components/UI/modalsAdmin/CreateDevice";
import CreateType from "../components/UI/modalsAdmin/CreateType";
import { observer } from "mobx-react-lite";

const ModalDevice = new ModalStore();
const ModalType = new ModalStore();

const Admin = observer(() => {
  return (
    <div className="container flex flex-col items-center justify-between max-w-[1000px] w-full mx-auto text-white bg-zinc-400 p-14">
      <h1 className="uppercase p-10 text-[50px]">админ панель</h1>
      <button
        onClick={() => ModalDevice.setIsOpen(true)}
        className="max-w-[300px] w-full bg-darkGreen  rounded-[10px] py-[20px] my-7"
      >
        Добавиь устройство
      </button>
      <button
        onClick={() => ModalType.setIsOpen(true)}
        className="max-w-[300px] w-full bg-darkGreen rounded-[10px] py-[20px]"
      >
        Добавить категорию
      </button>
      <CreateDevice {...ModalDevice} />
      <CreateType {...ModalType} />
    </div>
  );
});

export default Admin;

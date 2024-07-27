import React, { useContext, useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import InputForm from "../InputForm";
import { Context } from "../../../main";
import { createDevice, fetchType } from "../../../http/deviceApi";
import { observer } from "mobx-react-lite";

const CreateDevice = observer(({ isOpen, setIsOpen }) => {
  const { device } = useContext(Context);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetchType().then((data) => device.setTypes(data));
  }, []);

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };

  const deliteInfo = (number) => {
    setInfo(info.filter((item) => item.number !== number));
  };

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  const changeInfo = (key, value, number) => {
    setInfo(
      info.map((i) => (i.number === number ? { ...i, [key]: value } : i))
    );
  };

  const addDevice = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("img", file);
    formData.append("typeId", device.selectedType.id);
    console.log(info.length);
    formData.append("info", JSON.stringify(info));
    createDevice(formData).then((data) => setIsOpen(false));
  };

  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={() => setIsOpen(false)}
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black bg-opacity-50">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full flex flex-col items-center max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            <DialogTitle as="h3" className="text-base/7 font-medium text-white">
              Создать устройство
            </DialogTitle>
            <form action="" className="flex flex-col">
              <InputForm
                placeholder={"Введите название"}
                type={"text"}
                autoComplete="new-category"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <InputForm
                placeholder={"Введите цену"}
                type={"number"}
                autoComplete="new-price"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
              <InputForm
                type={"file"}
                autoComplete="new-category"
                onChange={selectFile}
              />
              <Menu>
                <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                  {device.selectedType.name || "Выберете тип"}
                </MenuButton>

                <MenuItems
                  transition
                  anchor="bottom end"
                  className="w-fit z-30 origin-top-right rounded-xl border border-white/5 bg-slate-200 p-1 text-sm/6 text-green transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                >
                  {device.types.map((type) => (
                    <MenuItem
                      key={type.id}
                      onClick={() => device.setSelectedType(type)}
                    >
                      <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/40">
                        {type.name}
                      </button>
                    </MenuItem>
                  ))}
                </MenuItems>
              </Menu>
              <button
                className="flex items-center p-3 text-white border border-green"
                onClick={(e) => e.preventDefault(addInfo())}
              >
                Добавить новое свойство
              </button>
              {info.map((item) => (
                <div className="flex items-center gap-2" key={item.number}>
                  <InputForm
                    placeholder={"Введите название свойства"}
                    type={"text"}
                    autoComplete="new-property"
                    value={item.title}
                    onChange={(e) =>
                      changeInfo("title", e.target.value, item.number)
                    }
                  />
                  <InputForm
                    placeholder={"Введите описание свойства"}
                    type={"text"}
                    autoComplete="new-property"
                    value={item.description}
                    onChange={(e) =>
                      changeInfo("description", e.target.value, item.number)
                    }
                  />
                  <button
                    onClick={() => deliteInfo(item.number)}
                    className="border border-red-500 text-white"
                  >
                    Удалить
                  </button>
                </div>
              ))}
            </form>
            <div className="mt-4">
              <Button
                className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                onClick={() => addDevice()}
              >
                Добавить
              </Button>
              <button
                className="absolute right-4 top-4"
                onClick={() => setIsOpen(false)}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.170067 0.170067C0.396823 -0.056689 0.764467 -0.056689 0.991223 0.170067L6 5.17884L11.0088 0.170067C11.2355 -0.056689 11.6032 -0.056689 11.8299 0.170067C12.0567 0.396823 12.0567 0.764467 11.8299 0.991223L6.82116 6L11.8299 11.0088C12.0567 11.2355 12.0567 11.6032 11.8299 11.8299C11.6032 12.0567 11.2355 12.0567 11.0088 11.8299L6 6.82116L0.991223 11.8299C0.764467 12.0567 0.396823 12.0567 0.170067 11.8299C-0.056689 11.6032 -0.056689 11.2355 0.170067 11.0088L5.17884 6L0.170067 0.991223C-0.056689 0.764467 -0.056689 0.396823 0.170067 0.170067Z"
                    fill="#fff"
                  />
                </svg>
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
});

export default CreateDevice;

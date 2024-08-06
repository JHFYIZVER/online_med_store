import ButtonForm from "./UI/ButtonForm";
import InputForm from "./UI/InputForm";

import { Dialog, DialogTitle, DialogPanel } from "@headlessui/react";
import { useContext, useState } from "react";
import { login, registration } from "../http/userApi";
import { observer } from "mobx-react-lite";
import { Context } from "../main";

const RegisterModal = observer(({ setIsOpen, isOpen }) => {
  const [isRegister, setIsRegister] = useState(true);
  const [authEmail, setAuthEmail] = useState("");
  const [authPassword, setAuthPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user } = useContext(Context);

  const click = async (e) => {
    try {
      e.preventDefault();
      let data;
      if (isRegister) {
        data = await registration(name, email, password);
      } else {
        data = await login(authEmail, authPassword);
      }
      user.setUser(data);
      user.setIsAuth(true);
      user.setIsName(data.name);
      setIsOpen(false);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <div className="baground-popup bg-black bg-opacity-50 fixed left-0 right-0 top-0 bottom-0 flex items-center justify-center z-10">
        <DialogPanel className="popup relative bg-white flex justify-center flex-col py-[50px] border-[#3D8072] border-b-[10px] max-w-[500px] w-full overflow-y-auto ">
          <div className="title-popup flex items-center justify-center gap-[10px] mb-[50px] text-[20px] font-medium">
            <DialogTitle
              className={
                isRegister
                  ? "text-[#3D3D3D] cursor-pointer"
                  : "text-[#3D8072] cursor-pointer"
              }
              onClick={() => {
                setIsRegister(false);
              }}
            >
              Логин
            </DialogTitle>
            <span>I</span>
            <DialogTitle
              className={
                !isRegister
                  ? "text-[#3D3D3D] cursor-pointer"
                  : "text-[#3D8072] cursor-pointer"
              }
              onClick={() => {
                setIsRegister(true);
              }}
            >
              Регистрация
            </DialogTitle>
          </div>
          <div className="content flex flex-col items-center justify-center">
            {isRegister ? (
              <>
                <h3>Введите почту и пароль для регистрации.</h3>
                <form
                  className="flex flex-col items-center justify-center"
                  action=""
                >
                  <InputForm
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Имя"
                    type="text"
                    autoComplete="username"
                  />
                  <InputForm
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail"
                    type="email"
                    autoComplete="email"
                  />
                  <InputForm
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Пароль"
                    type="password"
                    autoComplete="new-password"
                  />
                  <ButtonForm onClick={click} title={"Регистрация"} />
                  <span>Регистрация с помощью</span>
                </form>
              </>
            ) : (
              <>
                <h3>Введите имя пользователя и пароль для входа.</h3>
                <form
                  className="flex flex-col items-center justify-center"
                  action=""
                >
                  <InputForm
                    value={authEmail}
                    onChange={(e) => setAuthEmail(e.target.value)}
                    placeholder="E-mail"
                    type="email"
                    autoComplete="email"
                  />
                  <InputForm
                    value={authPassword}
                    onChange={(e) => setAuthPassword(e.target.value)}
                    placeholder="Пароль"
                    type="password"
                    autoComplete="new-password"
                  />
                  <ButtonForm onClick={click} title={"Войти"} />
                  <span>Войти с помощью</span>
                </form>
              </>
            )}
          </div>
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
                fill="#3D8072"
              />
            </svg>
          </button>
        </DialogPanel>
      </div>
    </Dialog>
  );
});

export default RegisterModal;

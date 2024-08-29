import React, { useContext, useEffect, useState } from "react";
import Logo from "../UI/Logo";
import RegisterModal from "../Form";
import ModalStore from "../../store/ModalStore";
import { Link } from "react-router-dom";
import {
  ABOUT_US_ROUTE,
  CONTACT_ROUTE,
  CATEGORY_ROUTE,
  ADMIN_ROUTE,
  MAIN_ROUTE,
} from "../../utils/const";
import { observer } from "mobx-react-lite";
import { Context } from "../../main";
import { useNavigate } from "react-router-dom";
import { check } from "../../http/userApi";
import HeaderContactInfo from "./HeaderContactInfo";
import HeaderBasket from "./HeaderBasket";
import { Skeleton } from "@mui/material";
import "./Header.scss";


const Modal = new ModalStore();

const Header = observer(() => {
  const { user } = useContext(Context);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const clazz = "open ";
  const clazzSecond =
    "header-bar flex items-center justify-between px-[40px] py-[20px] h-[100px] mx-auto text-white text-[20px] max-w-[1440px]";
  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    localStorage.removeItem("token");
    navigate(MAIN_ROUTE);
  };

  useEffect(() => {
    check()
      .then((data) => {
        if (data) {
          user.setUserId(data.id);
          user.setIsRole(data.role);
          user.setIsName(data.email);
        }
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <header>
        <div className="header-wrapper bg-white">
          <div className="header-upper flex items-center justify-between gap-5 px-[40px] py-[20px] h-[100px] max-w-[1440px] w-full mx-auto ">
            <Logo />
            <HeaderContactInfo />
            <span
              onClick={() => setIsOpen(!isOpen)}
              className={isOpen ? clazz + " menu-btn" : "menu-btn"}
            ></span>
          </div>
        </div>
        <div className="header-wrapper bg-green">
          <div className={isOpen ? clazz + clazzSecond : clazzSecond}>
            <nav className="header-nav-bar max-w-[700px] w-full">
              <ul
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between "
              >
                <Link to={"/"} className="cursor-pointer">
                  Главная
                </Link>
                <Link to={ABOUT_US_ROUTE} className="cursor-pointer">
                  О нас
                </Link>
                <Link to={CATEGORY_ROUTE} className="cursor-pointer">
                  Оборудование
                </Link>
                {!isLoading ? (
                  user.isAuth ? (
                    <>
                      {user.role === "ADMIN" ? (
                        <>
                          <a
                            onClick={() => navigate(ADMIN_ROUTE)}
                            className="cursor-pointer"
                          >
                            Админ панель
                          </a>
                          <a onClick={logOut} className="cursor-pointer">
                            Выйти
                          </a>
                        </>
                      ) : (
                        <>
                          <a
                            onClick={() => navigate(MAIN_ROUTE)}
                            className="cursor-pointer"
                          >
                            {user.name}
                          </a>
                          <a onClick={logOut} className="cursor-pointer">
                            Выйти
                          </a>
                        </>
                      )}
                    </>
                  ) : (
                    <a
                      onClick={() => Modal.setIsOpen(true)}
                      className="cursor-pointer"
                    >
                      Регистрация
                    </a>
                  )
                ) : (
                  <Skeleton animation="wave" height={20} width={80} />
                )}
                <Link to={CONTACT_ROUTE} className="cursor-pointer">
                  Контакты
                </Link>
              </ul>
            </nav>
            <HeaderBasket setIsOpen={setIsOpen} />
          </div>
        </div>
      </header>
      <RegisterModal {...Modal} />
      <div
        onClick={() => setIsOpen(false)}
        className={isOpen ? "background open" : "background"}
      ></div>
    </>
  );
});

export default Header;

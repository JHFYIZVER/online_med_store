import React, { useContext, useEffect } from "react";
import Logo from "./UI/Logo";
import RegisterModal from "./Form";
import ModalStore from "../store/ModalStore";
import { Link } from "react-router-dom";
import {
  ABOUT_US_ROUTE,
  CONTACT_ROUTE,
  CATEGORY_ROUTE,
  ADMIN_ROUTE,
  MAIN_ROUTE,
} from "../utils/const";
import { observer } from "mobx-react-lite";
import { Context } from "../main";
import { useNavigate } from "react-router-dom";
import { check } from "../http/userApi";

const Modal = new ModalStore();

const Header = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    localStorage.removeItem("token");
    navigate(MAIN_ROUTE);
  };

  useEffect(() => {
    check().then((data) => {
      if (data) {
        user.setIsRole(data.role);
      }
    });
  }, []);

  return (
    <>
      <header>
        <div className="header-upper flex items-center justify-between px-[40px] py-[20px] h-[100px] max-w-[1440px] w-full mx-auto">
          <Logo />
          <div className="header-contact-info flex items-center justify-between gap-[17px] max-w-[740px] w-full">
            <div className="flex items-center gap-[15px]">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="18" cy="18" r="17.5" stroke="#757575" />
                <path
                  d="M14.7693 25.2237C14.7693 25.6512 15.1137 25.9978 15.5385 25.9978C15.9633 25.9978 16.3077 25.6512 16.3077 25.2237H14.7693ZM15.5385 22.921L14.7698 22.8914C14.7694 22.9013 14.7693 22.9111 14.7693 22.921H15.5385ZM18 20.6194L17.9729 21.393C17.991 21.3936 18.009 21.3936 18.0271 21.393L18 20.6194ZM20.4615 22.921H21.2307C21.2307 22.9111 21.2305 22.9013 21.2302 22.8914L20.4615 22.921ZM19.6923 25.2237C19.6923 25.6512 20.0367 25.9978 20.4615 25.9978C20.8863 25.9978 21.2307 25.6512 21.2307 25.2237H19.6923ZM15.5385 24.4496C15.1137 24.4496 14.7693 24.7962 14.7693 25.2237C14.7693 25.6512 15.1137 25.9978 15.5385 25.9978V24.4496ZM20.4615 25.9978C20.8863 25.9978 21.2307 25.6512 21.2307 25.2237C21.2307 24.7962 20.8863 24.4496 20.4615 24.4496V25.9978ZM15.5385 25.9978C15.9633 25.9978 16.3077 25.6512 16.3077 25.2237C16.3077 24.7962 15.9633 24.4496 15.5385 24.4496V25.9978ZM14.9231 25.2237V24.4496C14.9141 24.4496 14.9051 24.4497 14.896 24.45L14.9231 25.2237ZM11.2308 21.7702H10.4616C10.4616 21.78 10.4618 21.7898 10.4622 21.7996L11.2308 21.7702ZM12 14.8489C12 14.4214 11.6557 14.0748 11.2308 14.0748C10.806 14.0748 10.4616 14.4214 10.4616 14.8489H12ZM8.33731 15.8897C7.98579 16.1298 7.89425 16.6112 8.13284 16.965C8.37143 17.3187 8.8498 17.4107 9.2013 17.1707L8.33731 15.8897ZM11.6628 15.4894C12.0143 15.2493 12.1059 14.7679 11.8673 14.4142C11.6287 14.0605 11.1503 13.9683 10.7988 14.2084L11.6628 15.4894ZM10.7988 14.2084C10.4473 14.4485 10.3558 14.9299 10.5943 15.2836C10.8329 15.6373 11.3113 15.7295 11.6628 15.4894L10.7988 14.2084ZM16.5805 11.1952L16.1632 10.545C16.1583 10.5482 16.1533 10.5514 16.1485 10.5548L16.5805 11.1952ZM19.4195 11.1952L19.8515 10.5548C19.8467 10.5514 19.8417 10.5482 19.8368 10.545L19.4195 11.1952ZM24.3372 15.4894C24.6888 15.7295 25.1671 15.6373 25.4057 15.2836C25.6442 14.9299 25.5527 14.4485 25.2012 14.2084L24.3372 15.4894ZM20.4615 24.4496C20.0367 24.4496 19.6923 24.7962 19.6923 25.2237C19.6923 25.6512 20.0367 25.9978 20.4615 25.9978V24.4496ZM21.0769 25.2237L21.104 24.45C21.095 24.4497 21.0859 24.4496 21.0769 24.4496V25.2237ZM24.7692 21.7702L25.5379 21.7996C25.5382 21.7898 25.5384 21.78 25.5384 21.7702H24.7692ZM25.5384 14.8489C25.5384 14.4214 25.194 14.0748 24.7692 14.0748C24.3444 14.0748 24 14.4214 24 14.8489H25.5384ZM26.7989 17.1697C27.1505 17.4098 27.6289 17.3175 27.8673 16.9637C28.1058 16.6099 28.0141 16.1285 27.6625 15.8886L26.7989 17.1697ZM25.2012 14.2084C24.8496 13.9684 24.3711 14.0606 24.1326 14.4144C23.8941 14.7682 23.9856 15.2494 24.3372 15.4894L25.2012 14.2084ZM16.3077 25.2237V22.921H14.7693V25.2237H16.3077ZM16.3072 22.9506C16.341 22.0582 17.0861 21.3615 17.9729 21.393L18.0271 19.8458C16.2928 19.7844 14.8361 21.1464 14.7698 22.8914L16.3072 22.9506ZM18.0271 21.393C18.9139 21.3615 19.659 22.0582 19.6928 22.9506L21.2302 22.8914C21.164 21.1464 19.7072 19.7844 17.9729 19.8458L18.0271 21.393ZM19.6923 22.921V25.2237H21.2307V22.921H19.6923ZM15.5385 25.9978H20.4615V24.4496H15.5385V25.9978ZM15.5385 24.4496H14.9231V25.9978H15.5385V24.4496ZM14.896 24.45C13.3535 24.5047 12.058 23.2929 11.9995 21.7409L10.4622 21.7996C10.5528 24.2044 12.5602 26.082 14.9502 25.9972L14.896 24.45ZM12 21.7702V14.8489H10.4616V21.7702H12ZM9.2013 17.1707L11.6628 15.4894L10.7988 14.2084L8.33731 15.8897L9.2013 17.1707ZM11.6628 15.4894L17.0125 11.8358L16.1485 10.5548L10.7988 14.2084L11.6628 15.4894ZM16.9979 11.8455C17.6079 11.449 18.3921 11.449 19.0021 11.8455L19.8368 10.545C18.7188 9.81834 17.2812 9.81834 16.1632 10.545L16.9979 11.8455ZM18.9875 11.8358L24.3372 15.4894L25.2012 14.2084L19.8515 10.5548L18.9875 11.8358ZM20.4615 25.9978H21.0769V24.4496H20.4615V25.9978ZM21.0498 25.9972C23.4399 26.082 25.4472 24.2044 25.5379 21.7996L24.0005 21.7409C23.942 23.2929 22.6464 24.5047 21.104 24.45L21.0498 25.9972ZM25.5384 21.7702V14.8489H24V21.7702H25.5384ZM27.6625 15.8886L25.2012 14.2084L24.3372 15.4894L26.7989 17.1697L27.6625 15.8886Z"
                  fill="black"
                />
              </svg>
              <h2 className="flex flex-col">
                ул. Шилова 35а
                <span className="text-[14px] text-[#585858]">
                  Чита, Россия, 672038
                </span>
              </h2>
            </div>
            <div className="flex items-center gap-[15px]">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="18" cy="18" r="17.5" stroke="#757575" />
                <path
                  d="M18 13.5556V18H20.6667M26 18C26 22.4183 22.4183 26 18 26C13.5817 26 10 22.4183 10 18C10 13.5817 13.5817 10 18 10C22.4183 10 26 13.5817 26 18Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h2 className="flex flex-col">
                График работы
                <span className="text-[14px] text-[#585858]">
                  Пн-Пт: 08.00 до 17.00
                </span>
              </h2>
            </div>
            <div className="flex items-center gap-[15px]">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="18" cy="18" r="17.5" stroke="#757575" />
                <path
                  d="M9.11108 12.3246L16 17.7292C17.1852 18.6591 18.8148 18.6591 20 17.7292L26.8889 12.3246"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25.7778 10H10.2222C8.99492 10 8 11.0407 8 12.3246V23.9475C8 25.2313 8.99492 26.272 10.2222 26.272H25.7778C27.0051 26.272 28 25.2313 28 23.9475V12.3246C28 11.0407 27.0051 10 25.7778 10Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <h2 className="flex flex-col">
                E-mail
                <span className="text-[14px] text-[#585858]">
                  info@zabmedsnab.ru
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="wrapper bg-green">
          <div className="header-bar flex items-center justify-between px-[40px] py-[20px] h-[100px] mx-auto text-white text-[20px] max-w-[1440px]">
            <nav className="header-nav-bar max-w-[700px] w-full">
              <ul className="flex items-center justify-between ">
                <Link to={"/"} className="cursor-pointer">
                  Главная
                </Link>
                <Link to={ABOUT_US_ROUTE} className="cursor-pointer">
                  О нас
                </Link>
                <Link to={CATEGORY_ROUTE} className="cursor-pointer">
                  Оборудование
                </Link>
                {user.isAuth ? (
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
                          {user.role}
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
                )}
                <Link to={CONTACT_ROUTE} className="cursor-pointer">
                  Контакты
                </Link>
              </ul>
            </nav>
            <div className="header-basket flex items-center gap-[15px]">
              <p>Корзина</p>
              <svg
                width="29"
                height="27"
                viewBox="0 0 29 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.7522 7.25822C28.6583 7.14035 28.5413 7.04564 28.4093 6.98072C28.2772 6.91579 28.1334 6.88222 27.9879 6.88234H22.9174C22.6757 4.97824 21.7908 3.23157 20.4268 1.96607C19.0627 0.70057 17.312 0.00205829 15.4991 0H13.5009C11.688 0.00205829 9.93728 0.70057 8.57323 1.96607C7.20917 3.23157 6.32427 4.97824 6.08256 6.88234H1.01211C0.866564 6.88222 0.722752 6.91579 0.590732 6.98072C0.458711 7.04564 0.341669 7.14035 0.247794 7.25822C0.15067 7.37564 0.0792543 7.51437 0.0386629 7.66448C-0.00192849 7.81458 -0.0106905 7.97234 0.0130044 8.12646L2.67561 24.1676C2.81191 24.9653 3.20916 25.6865 3.79755 26.2046C4.38594 26.7226 5.1278 27.0042 5.89273 27H23.1073C23.8703 27.0002 24.6092 26.7162 25.1946 26.1974C25.78 25.6787 26.1746 24.9583 26.3094 24.1623L28.987 8.12646C29.0107 7.97234 29.0019 7.81458 28.9613 7.66448C28.9207 7.51437 28.8493 7.37564 28.7522 7.25822ZM13.5009 2.11764H15.4991C16.7826 2.11847 18.0253 2.5954 19.0117 3.46571C19.9981 4.33603 20.6659 5.5448 20.8993 6.88234H8.10074C8.33411 5.5448 9.0019 4.33603 9.98829 3.46571C10.9747 2.5954 12.2174 2.11847 13.5009 2.11764ZM24.3462 23.7917C24.2925 24.0983 24.1391 24.3752 23.9128 24.5744C23.6865 24.7737 23.4015 24.8826 23.1073 24.8823H5.89273C5.60311 24.8848 5.32167 24.7806 5.09658 24.5874C4.87149 24.3943 4.71675 24.1242 4.65883 23.8235L2.20104 8.99998H26.799L24.3462 23.7917Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </header>
      <RegisterModal {...Modal} />
    </>
  );
});

export default Header;

import React from "react";
import ButtonForm from "../components/UI/ButtonForm";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="flex items-center justify-center flex-col gap-4">
      <h1 className="text-[#3D8072] text-[140px] font-bold">404</h1>
      <h2 className="text-[#333333] text-[18px] font-semibold">
        К сожалению, запрашиваемая вами страница не найдена.
      </h2>
      <p className="text-[#333333] text-[14px] max-w-[400px] text-center">
        Неправильно набран адрес или такой страницы на сайте больше не
        существует.
      </p>
      <NavLink to="/">
        <button className="bg-darkGreen text-white px-5 py-4 rounded-[5px] mb-[50px]">
          ПЕРЕЙТИ НА ГЛАВНУЮ
        </button>
      </NavLink>
    </main>
  );
};

export default NotFound;

import React from "react";
import ButtonForm from "../components/UI/ButtonForm";

const NotFound = () => {
  return (
    <main className="flex items-center justify-center flex-col gap-4">
      <h1 className="text-[#3D8072] text-[140px]">404</h1>
      <h2 className="text-[#333333] text-[18px]">
        К сожалению, запрашиваемая вами страница не найдена.
      </h2>
      <p className="text-[#333333] text-[14px] max-w-[400px] text-center">
        Неправильно набран адрес или такой страницы на сайте больше не
        существует.
      </p>
      <ButtonForm title={"ПЕРЕЙТИ НА ГЛАВНУЮ"} />
    </main>
  );
};

export default NotFound;

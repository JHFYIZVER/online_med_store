import React from "react";
import Advantages from "./Advantages";
import question from "../../assets/img/About_us/question.svg";
import speed from "../../assets/img/About_us/speed.svg";
import safety from "../../assets/img/About_us/safety.svg";
import quality from "../../assets/img/About_us/quality.svg";
import care from "../../assets/img/About_us/care.svg";
import help from "../../assets/img/About_us/help.svg";

const AdvantagesList = () => {
  return (
    <>
      <Advantages
        img={question}
        title={"Решаем любые вопросы"}
        discription={
          "ДО и ПОСЛЕ поставки, работаем не до склада, а до конечного использования товара."
        }
      />
      <Advantages
        img={care}
        title={"Заботимся о клиенте"}
        discription={
          "Для нас Важно что, получит лечебное учреждение от использования поставленных нами товаров."
        }
      />
      <Advantages
        img={help}
        title={"Помощь"}
        discription={"В получении необходимого результата."}
      />
      <Advantages
        img={safety}
        title={"Безопасность"}
        discription={"Безопасное использования для Вас и Ваших пациентов."}
      />
      <Advantages
        img={speed}
        title={"Скорость работы"}
        discription={"Поставляем продукцию в кратчайшие сроки."}
      />
      <Advantages
        img={quality}
        title={"Гарантируем качество товара"}
        discription={
          "Предлагаем полную поддержку и решение любых возможных проблем с продукцией после покупки."
        }
      />
    </>
  );
};

export default AdvantagesList;

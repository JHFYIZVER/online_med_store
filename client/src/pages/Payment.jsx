import React, { useState } from "react";
import BreadCrumbs from "../components/UI/BreadCrumbs";
import InputForm from "../components/UI/InputForm";
import { observer } from "mobx-react-lite";
import { Radio, RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import PaymentResult from "../components/Payment/PaymentResult";

const shippingMethod = [
  {
    name: "Самовывоз из магазина",
    text: "ул. Шилова 35а. Пн - Пт 08:00 - 17:00.",
  },
  {
    name: "Служба доставки CDEK",
    text: "Регионы России. Стоимость уточняйте у менеджера + 7 (3022) 40-09-22",
  },
];

const Payment = observer(() => {
  const [selected, setSelected] = useState(shippingMethod[0]);
  return (
    <main className="max-w-[1440px] mx-auto relative">
      <BreadCrumbs title={"Оплата"} />
      <div className="flex justify-between">
        <div>
          <section className="px-[50px] max-w-[860px] w-full">
            <h2 className="text-xl font-bold my-7">
              <span className="text-darkGreen">Шаг 1.</span> Выберите способ
              доставки
            </h2>
            <RadioGroup
              by="name"
              value={selected}
              onChange={setSelected}
              aria-label="Server size"
              className="flex gap-5 pb-7 flex-wrap"
            >
              {shippingMethod.map((plan) => (
                <Radio
                  key={plan.name}
                  value={plan}
                  className="group flex flex-col gap-8 max-w-[240px] w-full cursor-pointer rounded-lg bg-white py-4 px-5 transition focus:outline-none data-[checked]:border data-[checked]:border-darkGreen"
                >
                  <div className="flex gap-3 items-center justify-between">
                    <CheckCircleIcon className="size-6 fill-darkGreen opacity-0 transition group-data-[checked]:opacity-100" />
                    <h2 className="font-bold">{plan.name}</h2>
                  </div>
                  <p className="text-[#5D6C7B] text-xs">{plan.text}</p>
                </Radio>
              ))}
            </RadioGroup>
          </section>
          {selected !== shippingMethod[0] ? (
            <>
              <section className="px-[50px] max-w-[760px] w-full">
                <h2 className="text-xl font-bold mb-7">
                  <span className="text-darkGreen">Шаг 2.</span> Укажите адрес
                  доставки
                </h2>
                <form
                  className="flex flex-wrap gap-8 max-w-[860px] w-full"
                  action=""
                >
                  <div className="flex flex-wrap gap-8 max-w-[860px] w-full">
                    <label className="flex flex-col max-w-[314px] w-full">
                      <span>Город/населенный пункт*</span>
                      <InputForm placeholder={"Например, Воронеж"} />
                    </label>
                    <label className="flex flex-col max-w-[314px] w-full">
                      <span>Название улицы*</span>
                      <InputForm placeholder={"Например, Сурганова"} />
                    </label>
                  </div>
                  <div className="flex flex-wrap gap-8 max-w-[860px] w-full">
                    <label className="flex flex-col max-w-[141px] w-full">
                      <span>Номер дома*</span>
                      <InputForm
                        type={"number"}
                        placeholder={"Введите число"}
                      />
                    </label>
                    <label className="flex flex-col max-w-[141px] w-full">
                      <span>Корпус</span>
                      <InputForm
                        type={"number"}
                        placeholder={"Введите число"}
                      />
                    </label>
                    <label className="flex flex-col max-w-[141px] w-full">
                      <span>Квартира</span>
                      <InputForm
                        type={"number"}
                        placeholder={"Введите число"}
                      />
                    </label>
                    <label className="flex flex-col max-w-[141px] w-full">
                      <span>Индекс</span>
                      <InputForm type={"number"} placeholder={"______"} />
                    </label>
                  </div>
                </form>
              </section>
              <section className="px-[50px] max-w-[760px] w-full">
                <h2 className="text-xl font-bold my-7">
                  <span className="text-darkGreen">Шаг 3.</span> Укажите данные
                  получателя
                </h2>
                <form
                  className="flex flex-wrap max-w-[860px] w-full gap-8"
                  action=""
                >
                  <label className="flex flex-col max-w-[314px] w-full">
                    <span>Ваша фамилия</span>
                    <InputForm placeholder={"Введите фамилию"} />
                  </label>
                  <label className="flex flex-col max-w-[314px] w-full">
                    <span>Ваше имя</span>
                    <InputForm placeholder={"Введите имя"} />
                  </label>
                  <label className="flex flex-col max-w-[314px] w-full">
                    <span>Ваш телефон</span>
                    <InputForm
                      type={"number"}
                      placeholder={"+7 (___) __ - __ - __"}
                    />
                  </label>
                  <label className="flex flex-col max-w-[314px] w-full">
                    <span>Ваш email</span>
                    <InputForm type={"email"} placeholder={"Введите email"} />
                  </label>
                  <label className="flex w-full flex-col">
                    <span>Комментрий</span>
                    <textarea
                      placeholder="Оставьте пожелание или комментарий к заказу "
                      className="border border-[#EAEAEA] p-[14px] max-w-[760px] resize-none min-h-[120px] w-full rounded-l outline-none"
                    ></textarea>
                  </label>
                </form>
              </section>
              <section className="px-[50px] max-w-[760px] w-full pb-8">
                <h2 className="text-xl font-bold my-7">
                  <span className="text-darkGreen">Шаг 4.</span> Выберите способ
                  оплаты доставки
                </h2>
                <div className="flex flex-col gap-8 max-w-[240px] w-full cursor-pointer rounded-lg bg-white py-4 px-5">
                  <h2 className="flex gap-3 font-bold">
                    <CheckCircleIcon className="size-6 fill-darkGreen" />
                    Наложенный платеж
                  </h2>
                  <p className="text-[#5D6C7B] text-xs">
                    После оформления заказа с вами свяжется менеджер
                  </p>
                </div>
              </section>
            </>
          ) : (
            <></>
          )}
        </div>
        <PaymentResult />
      </div>
    </main>
  );
});

export default Payment;

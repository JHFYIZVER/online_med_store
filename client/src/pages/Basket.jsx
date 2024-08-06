import React, { useContext, useEffect } from "react";
import BreadCrumbs from "../components/UI/BreadCrumbs";
import { observer } from "mobx-react-lite";
import { Context } from "../main";

const Basket = observer(() => {
  const { user, basket } = useContext(Context);
  

  return (
    <main>
      <BreadCrumbs title={"Корзина"} />
      <div className="flex items-start justify-between p-[50px]">
        <table className="max-w-[790px] w-full">
          <thead className="text-[#3D3D3D] text-left border-b border-[#46A358]/50 font-black ">
            <tr className="p-3">
              <th className="w-[300px]">Товар</th>
              <th className="w-[150px]">Цена</th>
              <th className="w-[200px]">Кол-во</th>
              <th className="w-[100px]">Итог</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-[#FBFBFB]">
              <td className="flex items-center gap-4">
                <img
                  className="max-w-[70px] w-full h-[70px] bg-black"
                  src=""
                  alt="device"
                />
                <div className="flex flex-col items-start">
                  <h2>Barberton Daisy</h2>
                  <span>ID: 1995751877966</span>
                </div>
              </td>
              <td>1000</td>
              <td>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => basket.setDecrease(1)}
                    className="rounded-full bg-darkGreen flex items-center justify-center text-white max-w-[22px] w-full"
                  >
                    -
                  </button>
                  {basket.count}
                  <button
                    onClick={() => basket.setIncrease(1)}
                    className="rounded-full bg-darkGreen flex items-center justify-center text-white max-w-[22px] w-full"
                  >
                    +
                  </button>
                </div>
              </td>
              <td>1000</td>
              <td className="text-center">
                <button>
                  <svg
                    width="19"
                    height="21"
                    viewBox="0 0 19 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.8889 8.55408C15.8889 16.5731 17.0432 20.1979 9.27942 20.1979C1.51466 20.1979 2.69276 16.5731 2.69276 8.55408"
                      stroke="#727272"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.3653 5.47979H1.21484"
                      stroke="#727272"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.7148 5.47979C12.7148 5.47979 13.2434 1.71408 9.28911 1.71408C5.33578 1.71408 5.86435 5.47979 5.86435 5.47979"
                      stroke="#727272"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex flex-col max-w-[330px] w-full right-0">
          <h1 className="text-[#3D3D3D] font-black text-[18px]">Корзина</h1>
          <hr className="bg-[#46A358]/50" />
          <p className="py-3">Промокод</p>
          <div className="relative">
            <input
              type="text"
              placeholder="Введите промокод..."
              className="p-3 border rounded-l-[5px] border-darkGreen"
            />
            <button className="absolute bg-darkGreen hover:bg-[#3a694c] transition-all text-white h-full px-5 rounded-r-[5px]">
              Применить
            </button>
          </div>
          <div className="pt-5 text-[#3D3D3D]">
            <div className="flex justify-between py-2">
              <p>Промежуточная стоймость:</p>
              <p>$2,683.00</p>
            </div>
            <div className="flex justify-between py-2">
              <p>Скидка:</p>
              <p>(-) 00.00</p>
            </div>
            <div className="flex justify-between py-2">
              <p>Доставка:</p>
              <p>$16.00</p>
            </div>
          </div>
          <div className="flex justify-between py-7">
            <p className="text-[#3D3D3D] font-bold">Итого</p>
            <p className="text-darkGreen font-black text-[18px]">$2,699.00</p>
          </div>
          <button className="bg-darkGreen hover:bg-[#3a694c] transition-all text-white h-full px-4 rounded-[5px] py-3">
            Перейти к оплате
          </button>
        </div>
      </div>
    </main>
  );
});

export default Basket;

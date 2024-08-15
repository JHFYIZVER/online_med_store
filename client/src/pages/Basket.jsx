import React, { useContext, useEffect, useState } from "react";
import BreadCrumbs from "../components/UI/BreadCrumbs";
import PaymentBlock from "../components/Basket/PaymentBlock";
import BasketList from "../components/Basket/BasketList";
import { observer } from "mobx-react-lite";
import { Context } from "../main";
import { fetchBasket } from "../http/basketApi";
import NoItems from "../components/Basket/NoItems";

const Basket = observer(() => {
  const { user, basket } = useContext(Context);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (user.isAuth) {
      fetchBasket(user.userId + 2)
        .then((data) => {
          basket.setBasket(data);
        })
        .catch((e) => {
          alert("Ошибка при получении корзины");
          console.log(e);
        })
        .finally(() => setLoading(false));
    }
  }, []);

  return (
    <main className="max-w-[1440px] mx-auto">
      <BreadCrumbs title={"Корзина"} />
      {basket.basket.length && !loading ? (
        <div className="flex items-start justify-between p-[50px]">
          <div className="max-w-[790px] w-full">
            <ul className="flex w-full font-black text-[#3D3D3D] border-b">
              <li className="flex-[40%]">Товар</li>
              <li className="flex-[20%]">Цена</li>
              <li className="flex-[20%]">Кол-во</li>
              <li className="flex-[20%]">Итог</li>
            </ul>
            <BasketList loading={loading} />
          </div>
          <PaymentBlock />
        </div>
      ) : (
        <NoItems />
      )}
    </main>
  );
});

export default Basket;

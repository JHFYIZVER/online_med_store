import React, { useContext } from "react";
import BasketDeviceItem from "./BasketDeviceItem";

import { observer } from "mobx-react-lite";
import { Context } from "../../main";
import { updateBasket } from "../../http/basketApi";
import { deleteBasket } from "../../http/basketApi";
import Carcass from "./Carcass";

const BasketList = observer(({ loading }) => {
  const { basket } = useContext(Context);

  const deleteItemsFromBasket = (idProduct) => {
    const index = basket.basket.findIndex((item) => item.id === idProduct);
    if (index !== -1) {
      const newBasket = [...basket.basket];
      newBasket.splice(index, 1);
      basket.setBasket(newBasket);
      deleteBasket({ id: idProduct }).catch((e) => {
        alert("Возникла ошибка при удалении товара");
        console.log(e);
      });
    }
  };

  const changeCount = async (id, count) => {
    await updateBasket({ id, count }).catch((e) => {
      alert("Возникла обшибка при изменении количества товара");
      console.log(e);
    });
  };

  return (
    <div className="flex flex-col">
      {!loading ? (
        <div className="flex flex-col">
          {basket.basket.map((item) => (
            <BasketDeviceItem
              key={item.id}
              count={item.count}
              idProduct={item.id}
              deliteItem={deleteItemsFromBasket}
              changeCount={changeCount}
              {...item.device}
            />
          ))}
        </div>
      ) : (
        <Carcass />
      )}
    </div>
  );
});

export default BasketList;

import React, { useContext } from "react";
import BasketDeviceItem from "./BasketDeviceItem";
import Skeleton from "@mui/material/Skeleton";
import { observer } from "mobx-react-lite";
import { Context } from "../../main";
import { updateBasket } from "../../http/basketApi";
import { deleteBasket } from "../../http/basketApi";

const BasketList = observer(({ loading }) => {
  const { basket } = useContext(Context);

  const changeCount = async (id, count) => {
    await updateBasket({ id, count }).catch((e) => {
      alert("Возникла обшибка при изменении количества товара");
      console.log(e);
    });
  };

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

  return (
    <div className="flex flex-col">
      {!loading ? (
        <div className="flex flex-col">
          {basket.basket.map((item) => (
            <BasketDeviceItem
              key={item.id}
              count={item.count}
              idProduct={item.id}
              loading={loading}
              deliteItem={deleteItemsFromBasket}
              changeCount={changeCount}
              {...item.device}
            />
          ))}
        </div>
      ) : (
        <>
          <Skeleton
            variant="rounded"
            animation="wave"
            width={710}
            height={70}
            style={{ marginTop: 10 }}
          />
          <Skeleton
            variant="rounded"
            animation="wave"
            width={710}
            height={70}
            style={{ marginTop: 10 }}
          />
          <Skeleton
            variant="rounded"
            animation="wave"
            width={710}
            height={70}
            style={{ marginTop: 10 }}
          />
        </>
      )}
    </div>
  );
});

export default BasketList;

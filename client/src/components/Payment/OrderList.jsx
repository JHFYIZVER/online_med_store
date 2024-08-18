import React, { useContext } from "react";
import { Context } from "../../main";
import OrderListItem from "./OrderListItem";

const OrderList = () => {
  const { basket } = useContext(Context);

  if (!basket.basket) {
    return "Сосни хуйца";
  }

  return (
    <div className="flex flex-col w-full px-8">
      {basket.basket.map((item) => (
        <OrderListItem key={item.id} count={item.count} {...item.device} />
      ))}
    </div>
  );
};

export default OrderList;

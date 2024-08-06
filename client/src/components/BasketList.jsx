import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../main";
import BasketDeviceItem from "./BasketDeviceItem";

const BasketList = observer(() => {
  const { basket } = useContext(Context);
  return (
    <tbody>
      {basket.basket.map((device) => {
        <BasketDeviceItem key={device.id} />;
      })}
    </tbody>
  );
});

export default BasketList;

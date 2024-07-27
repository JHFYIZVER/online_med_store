import React, { useContext } from "react";
import ItemCard from "./UI/ItemCard";
import { Context } from "../main";
import { observer } from "mobx-react-lite";

const DeviceList = observer(() => {
  const { device } = useContext(Context);
  return (
    <div className="flex flex-wrap gap-12">
      {device.devices.map((device) => (
        <ItemCard key={device.id} device={device} />
      ))}
    </div>
  );
});

export default DeviceList;

import React, { useContext } from "react";
import ItemCard from "../UI/ItemCard";
import { Context } from "../../main";
import { observer } from "mobx-react-lite";
import { Skeleton } from "@mui/material";

const DeviceList = observer(({ loading }) => {
  const { device } = useContext(Context);
  return (
    <div className="flex flex-wrap gap-12">
      {!loading ? (
        device.devices.map((device) => (
          <ItemCard loading={loading} key={device.id} device={device} />
        ))
      ) : (
        <Skeleton animation="wave" variant="rounded" width={280} height={400} />
      )}
    </div>
  );
});

export default DeviceList;

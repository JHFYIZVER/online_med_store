import React, { useContext, useEffect, useState } from "react";
import CategoryList from "../components/UI/CategoryList";
import BreadCrumbs from "../components/UI/BreadCrumbs";
import DeviceList from "../components/Device/DeviceList";
import { observer } from "mobx-react-lite";
import { Context } from "../main";
import { fetchDevice, fetchType } from "../http/deviceApi";
import Pages from "../components/UI/Pages";
import PrevBtn from "../components/UI/Pagination/PrevBtn";
import NextBtn from "../components/UI/Pagination/NextBtn";

const Shop = observer(() => {
  const { device } = useContext(Context);
  const [isLoading, setIsLoaing] = useState(true);

  useEffect(() => {
    fetchType().then((data) => device.setTypes(data));
    fetchDevice(null, 1, 6)
      .then((data) => {
        device.setDevices(data.rows);
        device.setTotalCount(data.count);
      })
      .catch((e) => {
        alert(e);
        console.log(e);
      })
      .finally(() => setIsLoaing(false));
  }, []);

  useEffect(() => {
    fetchDevice(device.selectedType.id, device.page, device.limit)
      .then((data) => {
        device.setDevices(data.rows);
        device.setTotalCount(data.count);
      })
      .catch((e) => {
        alert(e);
        console.log(e);
      });
  }, [device.selectedType, device.page]);

  return (
    <main className="max-w-[1440px] mx-auto">
      <BreadCrumbs title={"Оборудование"} />
      <div className="flex gap-10 px-[50px]">
        <CategoryList />
        <DeviceList loading={isLoading} />
      </div>
      <div className="pagination mx-auto flex items-center justify-between max-w-[360px] py-[80px]">
        <PrevBtn devicePage={device.page} deviceSetPage={device.setPage} />
        <Pages />
        <NextBtn
          devicePage={device.page}
          deviceTotalCount={device.totalCount}
          deviceLimit={device.limit}
          deviceSetPage={device.setPage}
        />
      </div>
    </main>
  );
});

export default Shop;

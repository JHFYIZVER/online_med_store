import React, { useContext, useEffect } from "react";
import CategoryList from "../components/UI/CategoryList";
import BreadCrumbs from "../components/UI/BreadCrumbs";
import DeviceList from "../components/DeviceList";
import { observer } from "mobx-react-lite";
import { Context } from "../main";
import { fetchDevice, fetchType } from "../http/deviceApi";
import Pages from "../components/Pages";

const Shop = observer(() => {
  const { device } = useContext(Context);

  useEffect(() => {
    fetchType().then((data) => device.setTypes(data));
    fetchDevice(null, 1, 1).then((data) => {
      device.setDevices(data.rows);
      device.setTotalCount(data.count);
    });
  }, []);

  useEffect(() => {
    fetchDevice(device.selectedType.id, device.page, 9).then((data) => {
      device.setDevices(data.rows);
      device.setTotalCount(data.count);
    });
  }, [device.selectedType, device.page]);

  return (
    <main className="max-w-[1440px] mx-auto">
      <BreadCrumbs title={"Оборудование"} />
      <div className="flex gap-10 px-[50px]">
        <CategoryList />
        <DeviceList />
      </div>
      <div className="pagination mx-auto flex items-center justify-between max-w-[360px] py-[80px]">
        <button
          onClick={() => device.page > 1 && device.setPage(device.page - 1)}
          className="rounded-[15px] bg-green max-w-[45px] w-full h-[45px] flex items-center justify-center"
        >
          <svg
            width="6"
            height="8"
            viewBox="0 0 6 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.46761 4.00002L5.12261 1.34502C5.41341 1.05249 5.41341 0.580051 5.12261 0.287523C4.98179 0.145538 4.79009 0.0656738 4.59011 0.0656738C4.39013 0.0656738 4.19844 0.145538 4.05761 0.287523L0.877611 3.46752C0.735626 3.60835 0.655762 3.80004 0.655762 4.00002C0.655762 4.2 0.735626 4.3917 0.877611 4.53252L4.05761 7.75002C4.19915 7.89041 4.39076 7.96868 4.59011 7.96752C4.78946 7.96868 4.98107 7.89041 5.12261 7.75002C5.41341 7.45749 5.41341 6.98505 5.12261 6.69252L2.46761 4.00002Z"
              fill="white"
            />
          </svg>
        </button>
        <Pages />
        <button
          onClick={() => device.page < Math.ceil(device.totalCount / device.limit) && device.setPage(device.page + 1)}

          className="rounded-[15px] bg-green max-w-[45px] w-full h-[45px] flex items-center justify-center"
        >
          <svg
            width="6"
            height="8"
            viewBox="0 0 6 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.53239 4.00002L0.877387 1.34502C0.586594 1.05249 0.586594 0.580051 0.877387 0.287523C1.01821 0.145538 1.20991 0.0656738 1.40989 0.0656738C1.60987 0.0656738 1.80156 0.145538 1.94239 0.287523L5.12239 3.46752C5.26437 3.60835 5.34424 3.80004 5.34424 4.00002C5.34424 4.2 5.26437 4.3917 5.12239 4.53252L1.94239 7.75002C1.80085 7.89041 1.60924 7.96868 1.40989 7.96752C1.21054 7.96868 1.01893 7.89041 0.877387 7.75002C0.586594 7.45749 0.586594 6.98505 0.877387 6.69252L3.53239 4.00002Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </main>
  );
});

export default Shop;

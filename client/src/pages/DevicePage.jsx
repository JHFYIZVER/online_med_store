import React, { useContext, useEffect, useState } from "react";
import BreadCrumbs from "../components/UI/BreadCrumbs";
import { useParams } from "react-router-dom";
import { oneFetchDevice } from "../http/deviceApi";
import { observer } from "mobx-react-lite";
import { Context } from "../main";
import { createBasket, fetchBasket, updateBasket } from "../http/basketApi";
import { check } from "../http/userApi";

const DevicePage = observer(() => {
  const [device, setDevice] = useState({ info: [] });
  const { basket } = useContext(Context);
  const { id } = useParams();
  useEffect(() => {
    oneFetchDevice(id).then((data) => setDevice(data));
  }, []);

  const addDeviceInBasket = async () => {
    const { id } = await check();
    let basketData = await fetchBasket(id + 2); // id + 2 - это id корзины, все из-за ебучего рассинхрона, с которым я еблася 3 дня
    if (!basketData) {
      basketData = await createBasket();
    }
    const existingBasketDevice = basketData.find(
      (item) => item.deviceId === device.device.id
    );

    if (existingBasketDevice) {
      await updateBasket({
        id: existingBasketDevice.id,
        count: existingBasketDevice.count + 1,
      }).then(() => {
        fetchBasket(id + 2).then((data) => {
          basket.setBasket(data);
        });
      });
      return;
    }
    await createBasket({ deviceId: device.device.id, basketId: id + 2 })
      .then(() => {
        fetchBasket(id + 2).then((data) => {
          basket.setBasket(data);
        });
      })
      .catch((e) => {
        alert(e.response.data.message);
        console.log(e);
      });
  };

  if (!device.device) {
    return <div>Loading...</div>;
  }

  return (
    <main className="max-w-[1440px] mx-auto">
      <BreadCrumbs title={device.device.name} />
      <section className="flex gap-24 px-[50px]">
        <div>
          <img
            className="w-[450px] h-[490px] bg-gray-400"
            src={import.meta.env.VITE_API_URL + device.device.img}
            alt="product-image"
          />
        </div>
        <div className="max-w-[600px] w-full flex flex-col gap-3">
          <h1 className="text-[48px] font-semibold text-[#282739]">
            {device.device.name}
          </h1>
          <div className="flex items-center justify-between max-w-[280px] w-full">
            <span className="flex items-center gap-3 text-[#282739]">
              <svg
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="4.5" cy="4.5" r="4.5" fill="#75D14A" />
              </svg>
              В наличии
            </span>
            <span>ID: {device.device.id}</span>
          </div>
          <hr className="bg-[#3D8072]/50" />
          <div className="discription">
            <h2 className="text-[#3D3D3D] pb-3 font-medium">
              Короткое описание
            </h2>
            <p className="text-[#727272]">{device.device.shortDescription}</p>
          </div>
          <div className="flex items-center gap-7">
            <div className="flex items-center gap-7">
              <button className="text-white text-2xl bg-darkGreen rounded-full w-[30px] h-[30px] flex items-center justify-center">
                -
              </button>
              <span className="text-[#3D3D3D] text-2xl">1</span>
              <button className="text-white text-2xl bg-darkGreen rounded-full w-[30px] h-[30px] flex items-center justify-center">
                +
              </button>
            </div>
            <button
              onClick={addDeviceInBasket}
              className="bg-darkGreen text-white uppercase px-9 py-3 rounded-[5px]"
            >
              Купить
            </button>
          </div>
          <div className="flex flex-col">
            <p className="text-[#727272]">
              <span className="text-[#ACACAC] pr-1">Теги: </span>Медтехника,
              Тонометры, Здоровье
            </p>
            <p className="text-[#727272]">
              <span className="text-[#ACACAC] pr-1">Категория: </span>
              {device.device.nameType}
            </p>
          </div>
        </div>
      </section>
      <div className="full-disription-product px-[50px] py-[40px]">
        <h2 className="font-bold text-darkGreen text-[17px]">Характеристики</h2>
        <div className="text-[#727272]">
          {device.info.map((info) => (
            <p className="py-2" key={info.id}>
              <span className="font-bold">{info.title}</span> -{" "}
              {info.description}
            </p>
          ))}
        </div>
      </div>
    </main>
  );
});

export default DevicePage;

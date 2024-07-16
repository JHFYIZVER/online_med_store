import { makeAutoObservable } from "mobx";

class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Хирургия" },
      { id: 2, name: "Лаборатория" },
    ];
    this._tags = [
      { id: 1, name: "Популярные" },
      { id: 2, name: "Новинки" },
      { id: 3, name: "Рекомендуемые" },
    ];
    this._devices = [
      {
        id: 1,
        name: "Omron M2 Basic",
        price: 4152,
        img: "https://www.ixbt.com/img/n1/news/2021/0/8/iphone-12-pro-max-1-large.jpg",
      },
    ];
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setTags(tags) {
    this._tags = tags;
  }

  setDevices(devices) {
    this._devices = devices;
  }

  get types() {
    return this._types;
  }

  get tags() {
    return this._tags;
  }

  get devices() {
    return this._devices;
  }
}

export default DeviceStore;

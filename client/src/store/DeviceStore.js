import { makeAutoObservable } from "mobx";

class DeviceStore {
  constructor() {
    this._types = [];
    this._tags = [
      { id: 1, name: "Популярные" },
      { id: 2, name: "Новинки" },
      { id: 3, name: "Рекомендуемые" },
    ];
    this._devices = [];
    this._selectedType = {};
    makeAutoObservable(this);
  }

  setTypes = (types) => {
    this._types = types;
  };

  setTags = (tags) => {
    this._tags = tags;
  };

  setDevices = (devices) => {
    this._devices = devices;
  };

  setSelectedType = (type) => {
    this._selectedType = type;
  };

  get types() {
    return this._types;
  }

  get tags() {
    return this._tags;
  }

  get devices() {
    return this._devices;
  }

  get selectedType() {
    return this._selectedType;
  }
}

export default DeviceStore;

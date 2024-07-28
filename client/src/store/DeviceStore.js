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
    this._selectedSort = {};
    this._page = 1;
    this._totalCount = 0;
    this._limit = 1;
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

  setPage = (page) => {
    this._page = page;
  };

  setSelectedSort = (sort) => {
    this._selectedSort = sort;
  };

  setSelectedType = (type) => {
    this.setPage(1);
    this._selectedType = type;
  };
  setTotalCount = (count) => {
    this._totalCount = count;
  };

  setLimit = (limit) => {
    this._limit = limit;
  };

  get selectedSort() {
    return this._selectedSort;
  }

  get page() {
    return this._page;
  }

  get totalCount() {
    return this._totalCount;
  }

  get limit() {
    return this._limit;
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

  get selectedType() {
    return this._selectedType;
  }
}

export default DeviceStore;

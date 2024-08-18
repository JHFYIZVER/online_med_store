import { makeAutoObservable } from "mobx";

class BasketStore {
  constructor() {
    this._basket = [];
    this._totalPrice = 0;
    this._totalCount = 0;
    this._count = 1;
    makeAutoObservable(this);
  }

  setBasket = (basket) => {
    this._basket = basket;
  };

  setTotalPrice = (totalPrice) => {
    this._totalPrice = totalPrice;
  };

  setTotalCount = (totalCount) => {
    this._totalCount = totalCount;
  };

  setCount = (count) => {
    this._count = count;
  };


  get basket() {
    return this._basket;
  }

  get totalPrice() {
    return this._totalPrice;
  }

  get totalCount() {
    return this._totalCount;
  }

  get count() {
    return this._count;
  }
}

export default BasketStore;

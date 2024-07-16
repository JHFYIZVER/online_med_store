import { makeAutoObservable } from "mobx";

class ModalStore {
  constructor() {
    this.isOpen = false;
    makeAutoObservable(this);
  }

  setIsOpen = (bool) => {
    this.isOpen = bool;
  }
}

export default  ModalStore;

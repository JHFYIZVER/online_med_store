import { makeAutoObservable } from "mobx";

class UserStore {
  constructor() {
    this._isAuth = false;
    this._user = {};
    this._role = "";
    makeAutoObservable(this);
  }

  setIsAuth = (bool) => {
    this._isAuth = bool;
  };

  setIsRole = (role) => {
    this._role = role;
  }

  setUser = (user) => {
    this._user = user;
  };

  get isAuth() {
    return this._isAuth;
  }

  get user() {
    return this._user;
  }

  get role() {
    return this._role;
  }
}

export default UserStore;

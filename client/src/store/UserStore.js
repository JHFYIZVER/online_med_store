import { makeAutoObservable } from "mobx";

class UserStore {
  constructor() {
    this._isAuth = false;
    this._user = {};
    this._role = "";
    this._name = "";
    makeAutoObservable(this);
  }

  setIsAuth = (bool) => {
    this._isAuth = bool;
  };

  setIsRole = (role) => {
    this._role = role;
  };

  setIsName = (name) => {
    this._name = name;
  };

  setUser = (user) => {
    if (typeof user !== "boolean") {
      this._user = user;
    }
  };

  setUserId = (id) => {
    this._user.id = id;
  };

  get isAuth() {
    return this._isAuth;
  }

  get user() {
    return this._user;
  }

  get userId() {
    return this._user.id;
  }

  get role() {
    return this._role;
  }
  get name() {
    return this._name;
  }
}

export default UserStore;

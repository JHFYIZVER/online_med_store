import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import UserStore from "./store/UserStore.js";
import DeviceStore from "./store/DeviceStore.js";

import { BrowserRouter } from "react-router-dom";
import { createContext } from "react";

import "./index.css";
export const Context = createContext(null);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Context.Provider
    value={{
      user: new UserStore(),
      device: new DeviceStore(),
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context.Provider>
);

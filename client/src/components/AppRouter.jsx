import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routs";
import UserStore from "../store/UserStore";

const User = new UserStore();
console.log(User);

const AppRouter = () => {
  const isAuth = User.isAuth;

  return (
    <>
      <Routes>
        {isAuth &&
          authRoutes.map(({ path, Component }) => {
            return (
              <Route key={path} path={path} element={<Component />} exact />
            );
          })}
        {publicRoutes.map(({ path, Component }) => {
          return <Route key={path} path={path} element={<Component />} exact />;
        })}
      </Routes>
    </>
  );
};

export default AppRouter;

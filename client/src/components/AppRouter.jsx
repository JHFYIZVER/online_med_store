import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routs";
import { Context } from "../main";
import { observer } from "mobx-react-lite";

const AppRouter = observer(() => {
  const { user } = useContext(Context);
  return (
    <>
      <Routes>
        {user.isAuth &&
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
});

export default AppRouter;

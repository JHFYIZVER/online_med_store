import React from "react";
import { Route, Router, redirect } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routs";

const AppRouter = () => {
  const isAuth = false;
  return (
    <Router>
      {isAuth &&
        authRoutes.map(({ path, Component }) => {
          return <Route key={path} path={path} Component={Component} exact />;
        })}
      {publicRoutes.map(({ path, Component }) => {
        return <Route key={path} path={path} Component={Component} exact />;
      })}
    </Router>
  );
};

export default AppRouter;

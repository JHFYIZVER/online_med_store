import React from "react";
import breadCrumbs from "../../assets/img/bread_crumbs.svg";
import { NavLink } from "react-router-dom";

const BreadCrumbs = ({ title }) => {
  return (
    <div className="bread-crumbs flex items-center gap-4 px-[50px] py-[30px]">
      <NavLink to={"/"}>
        <img src={breadCrumbs} alt="bread-crumbs" />
      </NavLink>
      <span className="bg-black h-[1px] w-5"></span>
      <span className="text-[#3F3F3F]">{title}</span>
    </div>
  );
};

export default BreadCrumbs;

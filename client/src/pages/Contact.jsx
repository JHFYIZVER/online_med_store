import React from "react";
import BreadCrumbs from "../components/UI/BreadCrumbs";
import bgImg from "../assets/img/background_img.png";
import Map from "../components/Map";
import ContactInfo from "../components/ContactInfo";

const Contact = () => {
  return (
    <main>
      <BreadCrumbs title={"Контакты"} />
      <div className="flex items-start justify-between p-[50px]">
        <ContactInfo />
        <img
          className="absolute bottom-[-205px] left-0"
          src={bgImg}
          alt="bgImg"
        />
        <Map />
      </div>
    </main>
  );
};

export default Contact;

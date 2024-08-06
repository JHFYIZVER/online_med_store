import React from "react";
import BreadCrumbs from "../components/UI/BreadCrumbs";
import bgImg from "../assets/img/background_img.png";
import Map from "../components/Contact/Map";
import ContactInfo from "../components/Contact/ContactInfo";

const Contact = () => {
  return (
    <main>
      <BreadCrumbs title={"Контакты"} />
      <div className="flex relative items-start justify-between p-[50px] max-w-[1440px] mx-auto">
        <ContactInfo />
        <img
          className="absolute bottom-0 left-0"
          src={bgImg}
          alt="bgImg"
        />
        <Map />
      </div>
    </main>
  );
};

export default Contact;

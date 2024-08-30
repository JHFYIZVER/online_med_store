import React from "react";
import BreadCrumbs from "../../components/UI/BreadCrumbs";
import nurseMain from "../../assets/img/About_us/nurse1.png";
import nurseGoal from "../../assets/img/About_us/nurse2.png";
import SubTitle from "../../components/AboutUs/SubTitle";
import GoalListItem from "../../components/AboutUs/GoalListItem";
import AdvantagesList from "../../components/AboutUs/AdvantagesList";
import ModalStore from "../../store/ModalStore";
import ModalContactUs from "../../components/UI/Modals/ModalContactUs";
import EmblaCarousel from "../../components/UI/AboutdUsCarousel/EmblaCarousel";
import SLIDES from "../../components/AboutUs/data";

import { observer } from "mobx-react-lite";
import "../../components/UI/AboutdUsCarousel/embla.css";
import "./AboutUs.scss";

const Modal = new ModalStore();
const OPTIONS = {};

const AboutUs = observer(() => {
  return (
    <main>
      <BreadCrumbs title={"О нас"} />
      <section className="main-information px-[50px] flex justify-between max-w-[1440px] mx-auto">
        <div className="main-information-text max-w-[700px] w-full">
          <h1 className="italic text-[74px] py-3">ЗабайкалМедснаб:</h1>
          <SubTitle />
          <p className="text-xl py-9 max-w-[630px]">
            Основным направлением нашей деятельности является обеспечение
            медицинских учреждений всеми необходимыми изделиями медицинского
            назначения, оборудованием, расходными материалами и др.
          </p>
          <button
            onClick={() => Modal.setIsOpen(true)}
            className="flex items-center justify-center gap-3 text-white bg-darkGreen rounded-[20px] max-w-[240px] w-full py-4"
          >
            Связаться с нами
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.436662 6.75462C0.153997 5.9911 -0.050691 5.21133 0.0110404 4.38283C0.0500286 3.87274 0.241721 3.43737 0.615358 3.07998C1.02149 2.69659 1.40487 2.29371 1.8045 1.90383C2.32434 1.39048 2.9774 1.39373 3.49724 1.90383C3.81889 2.21899 4.1373 2.54064 4.4557 2.86229C4.76436 3.17095 5.07626 3.47961 5.38492 3.79151C5.92751 4.3406 5.93076 4.98065 5.38817 5.52649C4.99829 5.91637 4.61165 6.3095 4.21527 6.69289C4.11131 6.79361 4.10156 6.87808 4.15679 7.00479C4.41671 7.62861 4.7936 8.18419 5.21597 8.70403C6.06722 9.75022 7.02893 10.6794 8.17583 11.3975C8.42276 11.5502 8.69243 11.6639 8.9491 11.8036C9.08231 11.8751 9.17003 11.8523 9.27725 11.7419C9.66388 11.3422 10.0603 10.9491 10.4566 10.556C10.9765 10.0426 11.6263 10.0394 12.1461 10.556C12.7829 11.1863 13.4165 11.8198 14.0468 12.4567C14.5764 12.9895 14.5732 13.6425 14.0403 14.1786C13.6797 14.5425 13.2995 14.8869 12.9616 15.2671C12.4678 15.8194 11.844 16.0013 11.1357 15.9623C10.1025 15.9071 9.15054 15.5627 8.23106 15.1176C6.19068 14.1266 4.4492 12.7523 2.99039 11.0173C1.91172 9.73072 1.02149 8.33364 0.436662 6.75462ZM15.2425 7.91777C15.6605 7.91777 16.0033 7.57778 15.9638 7.16156C15.6052 3.38074 12.5862 0.361691 8.80533 0.00310174C8.38911 -0.0363747 8.04912 0.306344 8.04912 0.724436C8.04912 1.14253 8.38957 1.47678 8.8048 1.5256C11.7503 1.8719 14.095 4.21658 14.4413 7.16208C14.4901 7.57731 14.8244 7.91777 15.2425 7.91777ZM11.5678 7.16611C11.6541 7.57519 11.9847 7.91777 12.4028 7.91777C12.8209 7.91777 13.1657 7.57685 13.1042 7.16331C12.7748 4.94877 11.0181 3.1921 8.80358 2.86268C8.39003 2.80116 8.04912 3.14599 8.04912 3.56408C8.04912 3.98217 8.3917 4.31276 8.80078 4.39908C9.47533 4.5414 10.0946 4.8753 10.5931 5.37379C11.0916 5.87227 11.4255 6.49156 11.5678 7.16611Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <div className="main-information-img relative max-w-[615px] w-full flex justify-center">
          <img className="relative z-[1]" src={nurseMain} alt="Nurse" />
          <div className="bg-nurse rounded-t-[260px] absolute bottom-0 right-0 max-w-[630px] w-full max-h-[350px] h-full bg-white/50"></div>
        </div>
      </section>
      <section className="advantages-list grid grid-cols-3 max-w-[1340px] pb-5 w-full mx-auto">
        <AdvantagesList />
      </section>
      <section className="our-goal gap-10 px-[50px] max-w-[1440px] mx-auto flex justify-between items-center">
        <img src={nurseGoal} alt="nurseGoal" />
        <div className="max-w-[700px] w-full flex flex-col justify-between gap-9">
          <h2 className="font-bold text-[40px]">Наша цель</h2>
          <p className="font-bold text-[24px] max-w-[500px]">
            Создать условия лечебным учреждениям для выполнения ими{" "}
            <span className="text-darkGreen">качественной</span> и{" "}
            <span className="text-darkGreen">безопасной</span> работы
          </p>
          <div className="goal-list flex justify-between gap-4 text-lg max-w-[700px] w-full">
            <ul>
              <GoalListItem title={"Скорость работы"} />
              <GoalListItem title={"Широкий выбор"} />
              <GoalListItem title={"Соответствие стандартам"} />
            </ul>
            <ul>
              <GoalListItem title={"Конкурентоспособные цены"} />
              <GoalListItem title={"Надежная цепочка поставок"} />
              <GoalListItem title={"Отличное обслуживание клиентов"} />
            </ul>
          </div>
        </div>
      </section>
      <section className="news p-[50px] mb-14 bg-[#272728]">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-bold text-white text-[40px] pb-8">Новости</h2>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
      </section>
      <ModalContactUs {...Modal} />
    </main>
  );
});

export default AboutUs;

import discountTag from "../assets/img/Main/tag_discount.png";
import reputation from "../assets/img/Main/lvl_up.png";
import basket from "../assets/img/Main/basket.png";
import AdvantagesBlock from "../components/UI/AdvantagesBlock";
import EmblaCarousel from "../components/UI/Carousel/EmblaCarousel";
import EquipmentCard from "../components/UI/EquipmentCard";
import medPersonal from "../assets/img/Main/med_personal_main.png";
import bgImg from "../assets/img/background_img.png";
import ModalStore from "../store/ModalStore";
import ModalContactUs from "../components/UI/Modals/ModalContactUs";
import QuestionAnswer from "../components/Main/QuestionAnswer";
import BtnShowAll from "../components/Main/BtnShowAll";

import { observer } from "mobx-react-lite";
import "../components/UI/Carousel/embla.css";

const OPTIONS = {};
const SLIDE_COUNT = 2;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Modal = new ModalStore();

const MainPage = observer(() => {
  return (
    <main>
      <section className="section-carousel bg-[#F5FFF1] p-[50px] relative">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        <h2 className="text-center text-[#282739] text-[36px] pt-[60px] pb-[100px] font-semibold">
          Почему мы?
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <AdvantagesBlock
            src={discountTag}
            clazz="max-w-[270px] top-[-100px]"
            title={"Доступные цены"}
            disription={"Одни из самых выгодных цен"}
          />
          <AdvantagesBlock
            src={basket}
            clazz="top-[-110px]"
            title={"Широкий ассортимент"}
            disription={"Более 7000 медицинских товаров"}
          />
          <AdvantagesBlock
            src={reputation}
            clazz="top-[-60px]"
            title={"Безупречная репутация"}
            disription={"Уже 15 лет мы заботимся о здоровье миллионов людей"}
          />
        </div>
      </section>
      <section className="equipment-catalog flex flex-col items-center p-[50px] relative">
        <img src={bgImg} alt="bgImg" className="absolute top-0 left-0 z-0" />
        <img
          src={bgImg}
          alt="bgImg"
          className="absolute bottom-[-170px] right-0 z-0 rotate-180"
        />
        <h2 className="font-bold text-[40px] pb-[50px]">
          Каталог оборудования
        </h2>
        <div className="equipment-card-list flex flex-wrap items-center justify-between max-w-[1340px] w-full gap-5 z-[1]">
          <EquipmentCard />
          <EquipmentCard />
          <EquipmentCard />
          <EquipmentCard />
        </div>
        <BtnShowAll />
      </section>
      <section className="popular-product flex flex-col items-center p-[50px] relative">
        <h2 className="font-bold text-[40px] pb-[50px]">Популярные товары</h2>
        <div className="popular-product-list flex flex-wrap items-center justify-between max-w-[1340px] w-full gap-5 z-[1]">
          <EquipmentCard />
          <EquipmentCard />
          <EquipmentCard />
          <EquipmentCard />
        </div>
        <BtnShowAll />
      </section>
      <section className="text-white pb-[100px] pt-[150px] relative">
        <img
          src={bgImg}
          alt="bgImg"
          className="absolute top-[-50px] left-0 z-0"
        />
        <div className="bg-darkGreen max-w-[1170px] rounded-[20px] rounded-tl-[130px] mx-auto p-[55px] relative">
          <h2 className="font-bold text-4xl max-w-[500px]">
            Есть вопросы, на которые нужно получить ответ?
          </h2>
          <ul className="flex flex-col gap-4 py-8">
            <QuestionAnswer title={"Мы подберем для вас подходящее оборудование"}/>
            <QuestionAnswer title={"Ответим на все интересующие вопросы"} />
            <QuestionAnswer title={"Ответим на все интересующие вопросы"} />
          </ul>
          <button
            onClick={() => Modal.setIsOpen(true)}
            className="p-[23px] font-bold bg-green rounded-[60px] max-h-[60px] max-w-[310px] w-full flex items-center justify-center"
          >
            Заказать консультацию
          </button>
          <img
            src={medPersonal}
            alt="personal"
            className="absolute bottom-0 right-0"
          />
        </div>
      </section>
      <ModalContactUs {...Modal} />
    </main>
  );
});

export default MainPage;

import discountTag from "../assets/img/tag_discount.png";
import reputation from "../assets/img/lvl_up.png";
import basket from "../assets/img/basket.png";
import AdvantagesBlock from "../components/UI/AdvantagesBlock";
import EmblaCarousel from "../components/UI/Carousel/EmblaCarousel";
import EquipmentCard from "../components/UI/EquipmentCard";
import medPersonal from "../assets/img/med_personal_main.png";
import bgImg from "../assets/img/background_img.png";

import { Link } from "react-router-dom";
import { CATEGORY_ROUTE } from "../utils/const";

import "../components/UI/Carousel/embla.css";

const OPTIONS = {};
const SLIDE_COUNT = 2;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const MainPage = () => {
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
        <button className="flex bg-[#51A594] py-3 text-white items-center gap-6 px-8 mt-10 rounded-tl-[4px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[4px]">
          <Link to={CATEGORY_ROUTE}>Смотреть все</Link>
          <svg
            width="42"
            height="15"
            viewBox="0 0 42 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 6.5C0.447715 6.5 0 6.94772 0 7.5C0 8.05228 0.447715 8.5 1 8.5V6.5ZM41.7071 8.20711C42.0976 7.81658 42.0976 7.18342 41.7071 6.79289L35.3431 0.428932C34.9526 0.0384078 34.3195 0.0384078 33.9289 0.428932C33.5384 0.819457 33.5384 1.45262 33.9289 1.84315L39.5858 7.5L33.9289 13.1569C33.5384 13.5474 33.5384 14.1805 33.9289 14.5711C34.3195 14.9616 34.9526 14.9616 35.3431 14.5711L41.7071 8.20711ZM1 8.5H41V6.5H1V8.5Z"
              fill="white"
            />
          </svg>
        </button>
      </section>
      <section className="popular-product flex flex-col items-center p-[50px] relative">
        <h2 className="font-bold text-[40px] pb-[50px]">Популярные товары</h2>
        <div className="popular-product-list flex flex-wrap items-center justify-between max-w-[1340px] w-full gap-5 z-[1]">
          <EquipmentCard />
          <EquipmentCard />
          <EquipmentCard />
          <EquipmentCard />
        </div>
        <button className="flex bg-[#51A594] py-3 text-white items-center gap-6 px-8 mt-10 rounded-tl-[4px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[4px]">
          <Link to={CATEGORY_ROUTE}>Смотреть все</Link>
          <svg
            width="42"
            height="15"
            viewBox="0 0 42 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 6.5C0.447715 6.5 0 6.94772 0 7.5C0 8.05228 0.447715 8.5 1 8.5V6.5ZM41.7071 8.20711C42.0976 7.81658 42.0976 7.18342 41.7071 6.79289L35.3431 0.428932C34.9526 0.0384078 34.3195 0.0384078 33.9289 0.428932C33.5384 0.819457 33.5384 1.45262 33.9289 1.84315L39.5858 7.5L33.9289 13.1569C33.5384 13.5474 33.5384 14.1805 33.9289 14.5711C34.3195 14.9616 34.9526 14.9616 35.3431 14.5711L41.7071 8.20711ZM1 8.5H41V6.5H1V8.5Z"
              fill="white"
            />
          </svg>
        </button>
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
            <li className="flex items-center gap-4 text-[18px]">
              <svg
                width="26"
                height="19"
                viewBox="0 0 26 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.1237 0L8.30928 15.3562L1.87629 9.10959L0 10.9966L8.30928 19L26 1.82192L24.1237 0Z"
                  fill="#32FF3B"
                />
              </svg>
              Мы подберем для вас подходящее оборудование
            </li>
            <li className="flex items-center gap-4 text-[18px]">
              <svg
                width="26"
                height="19"
                viewBox="0 0 26 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.1237 0L8.30928 15.3562L1.87629 9.10959L0 10.9966L8.30928 19L26 1.82192L24.1237 0Z"
                  fill="#32FF3B"
                />
              </svg>
              Ответим на все интересующие вопросы
            </li>
            <li className="flex items-center gap-4 text-[18px]">
              <svg
                width="26"
                height="19"
                viewBox="0 0 26 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.1237 0L8.30928 15.3562L1.87629 9.10959L0 10.9966L8.30928 19L26 1.82192L24.1237 0Z"
                  fill="#32FF3B"
                />
              </svg>
              Ответим на все интересующие вопросы
            </li>
          </ul>
          <button className="p-[23px] font-bold bg-green rounded-[60px] max-h-[60px] max-w-[310px] w-full flex items-center justify-center">
            Заказать консультацию
          </button>
          <img
            src={medPersonal}
            alt="personal"
            className="absolute bottom-0 right-0"
          />
        </div>
      </section>
    </main>
  );
};

export default MainPage;

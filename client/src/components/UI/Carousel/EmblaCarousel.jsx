import React from "react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import itemSlide from "../../../assets/img/Carousel_item.jpg";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="main-embla">
      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      <div className="main-embla__viewport" ref={emblaRef}>
        <div className="main-embla__container">
          {slides.map((index) => (
            <div className="main-embla__slide " key={index}>
              <div className="main-embla__slide__number p-8 flex items-center justify-between">
                <div className="img__slide max-w-full">
                  <img className="max-h-[300px]" src={itemSlide} alt="item-slide" />
                </div>
                <div className="text__slide text-white flex flex-col justify-end gap-3">
                  <h1 className="text-[40px]">Тонометры</h1>
                  <button className="text-[24px] rounded-[5px] bg-[#3D8072] px-[30px] py-[9px]">
                    Подробнее
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
    </section>
  );
};

export default EmblaCarousel;

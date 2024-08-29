import React from "react";
import Logo from "../UI/Logo";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="bg-[#272728] text-white">
      <div className="footer-info px-[40px] py-[40px] flex gap-10 items-center justify-between max-w-[1440px] w-full mx-auto">
        <Logo />
        <div className="footer-contact flex items-center justify-between max-w-[700px] w-full">
          <div className="flex items-center gap-[15px]">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="18" cy="18" r="17.5" stroke="#757575" />
              <path
                d="M14.7693 25.2237C14.7693 25.6512 15.1137 25.9978 15.5385 25.9978C15.9633 25.9978 16.3077 25.6512 16.3077 25.2237H14.7693ZM15.5385 22.921L14.7698 22.8914C14.7694 22.9013 14.7693 22.9111 14.7693 22.921H15.5385ZM18 20.6194L17.9729 21.393C17.991 21.3936 18.009 21.3936 18.0271 21.393L18 20.6194ZM20.4615 22.921H21.2307C21.2307 22.9111 21.2305 22.9013 21.2302 22.8914L20.4615 22.921ZM19.6923 25.2237C19.6923 25.6512 20.0367 25.9978 20.4615 25.9978C20.8863 25.9978 21.2307 25.6512 21.2307 25.2237H19.6923ZM15.5385 24.4496C15.1137 24.4496 14.7693 24.7962 14.7693 25.2237C14.7693 25.6512 15.1137 25.9978 15.5385 25.9978V24.4496ZM20.4615 25.9978C20.8863 25.9978 21.2307 25.6512 21.2307 25.2237C21.2307 24.7962 20.8863 24.4496 20.4615 24.4496V25.9978ZM15.5385 25.9978C15.9633 25.9978 16.3077 25.6512 16.3077 25.2237C16.3077 24.7962 15.9633 24.4496 15.5385 24.4496V25.9978ZM14.9231 25.2237V24.4496C14.9141 24.4496 14.9051 24.4497 14.896 24.45L14.9231 25.2237ZM11.2308 21.7702H10.4616C10.4616 21.7799 10.4618 21.7898 10.4622 21.7996L11.2308 21.7702ZM12 14.8489C12 14.4214 11.6557 14.0748 11.2308 14.0748C10.806 14.0748 10.4616 14.4214 10.4616 14.8489H12ZM8.33731 15.8897C7.98579 16.1298 7.89425 16.6112 8.13284 16.965C8.37143 17.3187 8.8498 17.4107 9.2013 17.1707L8.33731 15.8897ZM11.6628 15.4894C12.0143 15.2493 12.1059 14.7679 11.8673 14.4142C11.6287 14.0605 11.1503 13.9683 10.7988 14.2084L11.6628 15.4894ZM10.7988 14.2084C10.4473 14.4485 10.3558 14.9299 10.5943 15.2836C10.8329 15.6373 11.3113 15.7295 11.6628 15.4894L10.7988 14.2084ZM16.5805 11.1952L16.1632 10.545C16.1583 10.5482 16.1533 10.5514 16.1485 10.5548L16.5805 11.1952ZM19.4195 11.1952L19.8515 10.5548C19.8467 10.5514 19.8417 10.5482 19.8368 10.545L19.4195 11.1952ZM24.3372 15.4894C24.6888 15.7295 25.1671 15.6373 25.4057 15.2836C25.6442 14.9299 25.5527 14.4485 25.2012 14.2084L24.3372 15.4894ZM20.4615 24.4496C20.0367 24.4496 19.6923 24.7962 19.6923 25.2237C19.6923 25.6512 20.0367 25.9978 20.4615 25.9978V24.4496ZM21.0769 25.2237L21.104 24.45C21.095 24.4497 21.0859 24.4496 21.0769 24.4496V25.2237ZM24.7692 21.7702L25.5379 21.7996C25.5382 21.7898 25.5384 21.7799 25.5384 21.7702H24.7692ZM25.5384 14.8489C25.5384 14.4214 25.194 14.0748 24.7692 14.0748C24.3444 14.0748 24 14.4214 24 14.8489H25.5384ZM26.7989 17.1697C27.1505 17.4098 27.6288 17.3175 27.8673 16.9637C28.1058 16.6099 28.0141 16.1285 27.6625 15.8886L26.7989 17.1697ZM25.2012 14.2084C24.8496 13.9684 24.3711 14.0606 24.1326 14.4144C23.8941 14.7682 23.9856 15.2494 24.3372 15.4894L25.2012 14.2084ZM16.3077 25.2237V22.921H14.7693V25.2237H16.3077ZM16.3072 22.9506C16.341 22.0582 17.0861 21.3615 17.9729 21.393L18.0271 19.8458C16.2928 19.7844 14.8361 21.1464 14.7698 22.8914L16.3072 22.9506ZM18.0271 21.393C18.9139 21.3615 19.659 22.0582 19.6928 22.9506L21.2302 22.8914C21.164 21.1464 19.7072 19.7844 17.9729 19.8458L18.0271 21.393ZM19.6923 22.921V25.2237H21.2307V22.921H19.6923ZM15.5385 25.9978H20.4615V24.4496H15.5385V25.9978ZM15.5385 24.4496H14.9231V25.9978H15.5385V24.4496ZM14.896 24.45C13.3535 24.5047 12.058 23.2929 11.9995 21.7409L10.4622 21.7996C10.5528 24.2044 12.5602 26.082 14.9502 25.9972L14.896 24.45ZM12 21.7702V14.8489H10.4616V21.7702H12ZM9.2013 17.1707L11.6628 15.4894L10.7988 14.2084L8.33731 15.8897L9.2013 17.1707ZM11.6628 15.4894L17.0125 11.8358L16.1485 10.5548L10.7988 14.2084L11.6628 15.4894ZM16.9979 11.8455C17.6079 11.449 18.3921 11.449 19.0021 11.8455L19.8368 10.545C18.7188 9.81834 17.2812 9.81834 16.1632 10.545L16.9979 11.8455ZM18.9875 11.8358L24.3372 15.4894L25.2012 14.2084L19.8515 10.5548L18.9875 11.8358ZM20.4615 25.9978H21.0769V24.4496H20.4615V25.9978ZM21.0498 25.9972C23.4399 26.082 25.4472 24.2044 25.5379 21.7996L24.0005 21.7409C23.942 23.2929 22.6464 24.5047 21.104 24.45L21.0498 25.9972ZM25.5384 21.7702V14.8489H24V21.7702H25.5384ZM27.6625 15.8886L25.2012 14.2084L24.3372 15.4894L26.7989 17.1697L27.6625 15.8886Z"
                fill="white"
              />
            </svg>
            Чита, Россия
          </div>
          <div className="flex items-center gap-[15px]">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.353 9C24.054 9.411 26.978 12.331 27.393 16.032"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.353 12.543C22.124 12.887 23.508 14.272 23.853 16.043"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.0315 18.9724C21.0205 22.9604 21.9254 18.3467 24.4653 20.8848C26.9138 23.3328 28.3222 23.8232 25.2188 26.9247C24.8302 27.237 22.3613 30.9943 13.6845 22.3197C5.00659 13.644 8.76157 11.1724 9.07394 10.7839C12.1838 7.67385 12.6668 9.08938 15.1154 11.5373C17.6541 14.0765 13.0425 14.9844 17.0315 18.9724Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="18" cy="18" r="17.5" stroke="#757575" />
            </svg>
            7 (3022) 40-09-22
          </div>
          <div className="flex items-center gap-[15px]">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="18" cy="18" r="17.5" stroke="#757575" />
              <path
                d="M9.11108 12.3248L16 17.7293C17.1852 18.6592 18.8148 18.6592 20 17.7293L26.8889 12.3247"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M25.7778 10H10.2222C8.99492 10 8 11.0407 8 12.3246V23.9475C8 25.2313 8.99492 26.272 10.2222 26.272H25.7778C27.0051 26.272 28 25.2313 28 23.9475V12.3246C28 11.0407 27.0051 10 25.7778 10Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            info@zabmedsnab.ru
          </div>
        </div>
      </div>
      <hr/>
      <div className="px-[40px] py-[20px] gap-5 min-h-[90px] flex flex-wrap items-center justify-between max-w-[1440px] w-full mx-auto">
        <span className="text-[#D4D4D4]">
          © 2024 ЗабайкалМедснаб. - All rights reserved.
        </span>
        <div className="flex flex-wrap gap-5 items-center justify-between max-w-[450px] w-full">
          <ul className="flex items-center gap-[46px]">
            <li className="cursor-pointer">
              <a>Privacy</a>
            </li>
            <li className="cursor-pointer">
              <a>Security</a>
            </li>
            <li className="cursor-pointer">
              <a>Terms</a>
            </li>
          </ul>
          <ul className="flex items-center gap-[15px]">
            <li className="cursor-pointer">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="16.1"
                  cy="16.1"
                  r="15.6"
                  fill="url(#paint0_linear_144_146)"
                  fillOpacity="0.05"
                  stroke="url(#paint1_linear_144_146)"
                />
                <path
                  d="M13.9658 24.5738V16.6216H11.863V13.7585H13.9658V11.3129C13.9658 9.39123 15.2079 7.62646 18.0699 7.62646C19.2287 7.62646 20.0856 7.73755 20.0856 7.73755L20.018 10.4113C20.018 10.4113 19.1442 10.4028 18.1906 10.4028C17.1585 10.4028 16.9931 10.8784 16.9931 11.6678V13.7585H20.1001L19.9649 16.6216H16.9931V24.5738H13.9658Z"
                  fill="white"
                  fillOpacity="0.8"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_144_146"
                    x1="16.1"
                    y1="0"
                    x2="16.1"
                    y2="32.2"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FEFEFF" stopOpacity="0.29" />
                    <stop offset="1" stopColor="white" stopOpacity="0.4" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_144_146"
                    x1="-1.54448"
                    y1="2.15937"
                    x2="35.5021"
                    y2="6.78831"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" stopOpacity="0.08" />
                    <stop offset="1" stopColor="white" stopOpacity="0.07" />
                  </linearGradient>
                </defs>
              </svg>
            </li>
            <li className="cursor-pointer">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="16.3"
                  cy="16.1"
                  r="15.6"
                  fill="url(#paint0_linear_144_149)"
                  fillOpacity="0.05"
                  stroke="url(#paint1_linear_144_149)"
                />
                <path
                  d="M24.7735 10.9568C24.1503 11.2256 23.4721 11.4191 22.7735 11.4945C23.4988 11.0636 24.0419 10.3828 24.301 9.57996C23.6204 9.98483 22.8748 10.2687 22.0973 10.4191C21.7724 10.0717 21.3793 9.79491 20.9427 9.60604C20.5061 9.41718 20.0353 9.32025 19.5596 9.3213C17.6349 9.3213 16.087 10.8814 16.087 12.7959C16.087 13.0647 16.1196 13.3336 16.1726 13.5923C13.2906 13.4415 10.7203 12.0647 9.01153 9.95675C8.70017 10.4886 8.53701 11.0941 8.53902 11.7103C8.53902 12.9161 9.15206 13.9792 10.0869 14.6045C9.53599 14.5828 8.99797 14.4314 8.51661 14.1625V14.2053C8.51661 15.8937 9.71012 17.2929 11.3008 17.6147C11.0021 17.6923 10.6949 17.732 10.3863 17.7329C10.1602 17.7329 9.94637 17.7105 9.73048 17.6799C10.1704 19.0567 11.4515 20.0567 12.977 20.0893C11.7835 21.0242 10.2885 21.5741 8.66529 21.5741C8.37404 21.5741 8.1052 21.5639 7.82617 21.5313C9.36592 22.5191 11.1928 23.0894 13.1603 23.0894C19.5474 23.0894 23.0423 17.798 23.0423 13.2053C23.0423 13.0546 23.0423 12.9039 23.0322 12.7531C23.7083 12.2582 24.301 11.6452 24.7735 10.9568Z"
                  fill="white"
                  fillOpacity="0.8"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_144_149"
                    x1="16.3"
                    y1="0"
                    x2="16.3"
                    y2="32.2"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FEFEFF" stopOpacity="0.29" />
                    <stop offset="1" stopColor="white" stopOpacity="0.4" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_144_149"
                    x1="-1.34453"
                    y1="2.15937"
                    x2="35.7021"
                    y2="6.78831"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" stopOpacity="0.08" />
                    <stop offset="1" stopColor="white" stopOpacity="0.07" />
                  </linearGradient>
                </defs>
              </svg>
            </li>
            <li className="cursor-pointer">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="16.4999"
                  cy="16.1"
                  r="15.6"
                  fill="url(#paint0_linear_144_152)"
                  fillOpacity="0.05"
                  stroke="url(#paint1_linear_144_152)"
                />
                <path
                  d="M16.0744 13.8394C14.5962 13.8394 13.3899 15.0457 13.3899 16.5239C13.3899 18.0021 14.5962 19.2084 16.0744 19.2084C17.5525 19.2084 18.7588 18.0021 18.7588 16.5239C18.7588 15.0457 17.5525 13.8394 16.0744 13.8394ZM24.1258 16.5239C24.1258 15.4122 24.1358 14.3106 24.0734 13.201C24.011 11.9121 23.717 10.7683 22.7745 9.82578C21.83 8.88128 20.6881 8.58927 19.3992 8.52684C18.2876 8.46441 17.186 8.47448 16.0764 8.47448C14.9647 8.47448 13.8631 8.46441 12.7535 8.52684C11.4646 8.58927 10.3208 8.88329 9.37827 9.82578C8.43377 10.7703 8.14176 11.9121 8.07933 13.201C8.0169 14.3127 8.02697 15.4142 8.02697 16.5239C8.02697 17.6335 8.0169 18.7371 8.07933 19.8467C8.14176 21.1356 8.43578 22.2795 9.37827 23.222C10.3228 24.1665 11.4646 24.4585 12.7535 24.5209C13.8651 24.5833 14.9667 24.5733 16.0764 24.5733C17.188 24.5733 18.2896 24.5833 19.3992 24.5209C20.6881 24.4585 21.832 24.1645 22.7745 23.222C23.719 22.2775 24.011 21.1356 24.0734 19.8467C24.1379 18.7371 24.1258 17.6355 24.1258 16.5239ZM16.0744 20.6543C13.7886 20.6543 11.9439 18.8096 11.9439 16.5239C11.9439 14.2381 13.7886 12.3934 16.0744 12.3934C18.3601 12.3934 20.2048 14.2381 20.2048 16.5239C20.2048 18.8096 18.3601 20.6543 16.0744 20.6543ZM20.3739 13.1889C19.8403 13.1889 19.4093 12.758 19.4093 12.2243C19.4093 11.6906 19.8403 11.2596 20.3739 11.2596C20.9076 11.2596 21.3386 11.6906 21.3386 12.2243C21.3387 12.351 21.3139 12.4765 21.2655 12.5936C21.2171 12.7107 21.146 12.8171 21.0564 12.9067C20.9668 12.9963 20.8604 13.0674 20.7433 13.1158C20.6262 13.1642 20.5007 13.1891 20.3739 13.1889Z"
                  fill="white"
                  fillOpacity="0.8"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_144_152"
                    x1="16.4999"
                    y1="0"
                    x2="16.4999"
                    y2="32.2"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FEFEFF" stopOpacity="0.29" />
                    <stop offset="1" stopColor="white" stopOpacity="0.4" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_144_152"
                    x1="-1.14457"
                    y1="2.15937"
                    x2="35.902"
                    y2="6.78831"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" stopOpacity="0.08" />
                    <stop offset="1" stopColor="white" stopOpacity="0.07" />
                  </linearGradient>
                </defs>
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
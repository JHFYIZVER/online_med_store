import React from "react";
import { Link } from "react-router-dom";
import { BASKET_ROUTE } from "../../utils/const";

const HeaderBasket = ({ setIsOpen }) => {
  return (
    <Link
      to={BASKET_ROUTE}
      className="header-basket flex items-center gap-[15px]"
      onClick={() => setIsOpen(false)}
    >
      <p>Корзина</p>
      <svg
        width="29"
        height="27"
        viewBox="0 0 29 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M28.7522 7.25822C28.6583 7.14035 28.5413 7.04564 28.4093 6.98072C28.2772 6.91579 28.1334 6.88222 27.9879 6.88234H22.9174C22.6757 4.97824 21.7908 3.23157 20.4268 1.96607C19.0627 0.70057 17.312 0.00205829 15.4991 0H13.5009C11.688 0.00205829 9.93728 0.70057 8.57323 1.96607C7.20917 3.23157 6.32427 4.97824 6.08256 6.88234H1.01211C0.866564 6.88222 0.722752 6.91579 0.590732 6.98072C0.458711 7.04564 0.341669 7.14035 0.247794 7.25822C0.15067 7.37564 0.0792543 7.51437 0.0386629 7.66448C-0.00192849 7.81458 -0.0106905 7.97234 0.0130044 8.12646L2.67561 24.1676C2.81191 24.9653 3.20916 25.6865 3.79755 26.2046C4.38594 26.7226 5.1278 27.0042 5.89273 27H23.1073C23.8703 27.0002 24.6092 26.7162 25.1946 26.1974C25.78 25.6787 26.1746 24.9583 26.3094 24.1623L28.987 8.12646C29.0107 7.97234 29.0019 7.81458 28.9613 7.66448C28.9207 7.51437 28.8493 7.37564 28.7522 7.25822ZM13.5009 2.11764H15.4991C16.7826 2.11847 18.0253 2.5954 19.0117 3.46571C19.9981 4.33603 20.6659 5.5448 20.8993 6.88234H8.10074C8.33411 5.5448 9.0019 4.33603 9.98829 3.46571C10.9747 2.5954 12.2174 2.11847 13.5009 2.11764ZM24.3462 23.7917C24.2925 24.0983 24.1391 24.3752 23.9128 24.5744C23.6865 24.7737 23.4015 24.8826 23.1073 24.8823H5.89273C5.60311 24.8848 5.32167 24.7806 5.09658 24.5874C4.87149 24.3943 4.71675 24.1242 4.65883 23.8235L2.20104 8.99998H26.799L24.3462 23.7917Z"
          fill="white"
        />
      </svg>
    </Link>
  );
};

export default HeaderBasket;

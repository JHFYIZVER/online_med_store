import React from "react";

const Map = () => {
  return (
    <div className="max-w-[890px] w-full bg-gray-500">
      <iframe
        loading="lazy"
        className="max-w-[890px] w-full h-[600px]"
        src="https://maps.google.com/maps?hl=ru&amp;q=%D0%97%D0%B0%D0%B1%D0%B0%D0%B9%D0%BA%D0%B0%D0%BB%D0%9C%D0%B5%D0%B4%D1%81%D0%BD%D0%B0%D0%B1%20%D1%83%D0%BB.%20%D0%A8%D0%B8%D0%BB%D0%BE%D0%B2%D0%B0,%20%D0%94%D0%9E%D0%9C%2035%D0%90,%20%D0%A7%D0%B8%D1%82%D0%B0,%20%D0%97%D0%B0%D0%B1%D0%B0%D0%B9%D0%BA%D0%B0%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BA%D1%80%D0%B0%D0%B9,%20%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F,%20672038+(%D0%97%D0%B0%D0%B1%D0%B0%D0%B9%D0%BA%D0%B0%D0%BB%D0%9C%D0%B5%D0%B4%D1%81%D0%BD%D0%B0%D0%B1)&amp;t=&amp;z=18&amp;ie=UTF8&amp;disableDefaultUI=true&amp;iwloc=B&amp;output=embed"
      >
        <a href="https://www.gps.ie/">gps vehicle tracker</a>
      </iframe>
    </div>
  );
};

export default Map;

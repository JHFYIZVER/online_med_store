import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../main";

const Pages = observer(() => {
  const { device } = useContext(Context);
  const pagesCount = Math.ceil(device.totalCount / device.limit);
  const pages = [];

  const clazz =
    "rounded-[15px] cursor-pointer hover:bg-[#cccccc] w-[45px] h-[45px] flex items-center justify-center transition-all";

  for (let i = 0; i < pagesCount; i++) {
    pages.push(i + 1);
  }

  return (
    <ul className="flex items-center text-[16px] gap-2 ">
      {pages.map((page) => (
        <li
          key={page}
          onClick={() => device.setPage(page)}
          className={
            device.page === page
              ? `${clazz} bg-white hover:bg-[#f1f1f1]  text-green`
              : clazz
          }
        >
          {page}
        </li>
      ))}
    </ul>
  );
});

export default Pages;

import React from "react";

const BasketDeviceItem = () => {
  return (
    <tr className="bg-[#FBFBFB]">
      <td className="flex items-center gap-4">
        <img
          className="max-w-[70px] w-full h-[70px] bg-black"
          src=""
          alt="device"
        />
        <div className="flex flex-col items-start">
          <h2>Barberton Daisy</h2>
          <span>ID: 1995751877966</span>
        </div>
      </td>
      <td>1000</td>
      <td>
        <div className="flex items-center gap-3">
          <button
            onClick={() => basket.setDecrease(1)}
            className="rounded-full bg-darkGreen flex items-center justify-center text-white max-w-[22px] w-full"
          >
            -
          </button>
          {basket.count}
          <button
            onClick={() => basket.setIncrease(1)}
            className="rounded-full bg-darkGreen flex items-center justify-center text-white max-w-[22px] w-full"
          >
            +
          </button>
        </div>
      </td>
      <td>1000</td>
      <td className="text-center">
        <button>
          <svg
            width="19"
            height="21"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.8889 8.55408C15.8889 16.5731 17.0432 20.1979 9.27942 20.1979C1.51466 20.1979 2.69276 16.5731 2.69276 8.55408"
              stroke="#727272"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.3653 5.47979H1.21484"
              stroke="#727272"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.7148 5.47979C12.7148 5.47979 13.2434 1.71408 9.28911 1.71408C5.33578 1.71408 5.86435 5.47979 5.86435 5.47979"
              stroke="#727272"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default BasketDeviceItem;

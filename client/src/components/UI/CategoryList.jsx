import React, { useContext, useEffect } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../main";

const nameSort = [
  { id: 1, name: "Умолчанию" },
  { id: 2, name: "Цене" },
  { id: 3, name: "Популярности" },
];
const CategoryList = observer(() => {
  const [selected, setSelected] = useState(nameSort[1]);
  const { device } = useContext(Context);

  useEffect(() => {
    device.setSelectedSort(selected.name);
  }, [selected]);

  return (
    <nav className="max-w-[340px] w-full bg-white p-5 px-[30px] max-h-[560px]">
      <h2 className="text-[#3D3D3D] font-bold text-[18px] pb-4 ">Категории</h2>
      <ul className="flex flex-col gap-[30px] text-[15px]">
        {device.types.map((type) => (
          <li
            className={
              type.id === device.selectedType.id
                ? "font-bold text-darkGreen cursor-pointer"
                : "cursor-pointer"
            }
            onClick={() => device.setSelectedType(type)}
            key={type.id}
          >
            {type.name}
          </li>
        ))}
      </ul>
      <div className="flex items-center pt-[40px] text-[15px] gap-[10px]">
        <span className="w-full">Сортировать по:</span>
        <Listbox value={selected} onChange={setSelected}>
          <ListboxButton
            className={clsx(
              "relative flex items-center justify-start min-w-[150px] rounded-lg text-left text-[#3D3D3D] ",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
          >
            {selected.name}
            <ChevronDownIcon
              className="group pointer-events-none size-4 fill-black/60"
              aria-hidden="true"
            />
          </ListboxButton>
          <ListboxOptions
            anchor="bottom"
            transition
            className={clsx(
              "w-[var(--button-width)] rounded-xl border border-white/5 bg-[#E9E9E9] p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none",
              "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
            )}
          >
            {nameSort.map((person) => (
              <ListboxOption
                key={person.name}
                value={person}
                className="group flex justify-start cursor-default items-center gap-4 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
              >
                <CheckIcon className="invisible w-[14px] min-h-[14px] min-w-[14px] h-[14px] fill-black group-data-[selected]:visible" />
                <div className="text-sm/6 text-[#3D3D3D]">{person.name}</div>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Listbox>
      </div>
    </nav>
  );
});

export default CategoryList;

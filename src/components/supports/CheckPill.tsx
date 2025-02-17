import React, { Dispatch, SetStateAction } from "react";
import { FiCheckCircle } from "react-icons/fi";

export const CheckPill = ({
  children,
  selected,
  setSelected,
  index,
}: {
  children: string;
  selected: boolean;
  setSelected: Dispatch<SetStateAction<number>>;
  index: number;
}) => (
  <div className="rounded-full bg-[#FF6154]">
    <button
      onClick={() => setSelected(index)}
      className={`flex origin-top-left items-center gap-1 rounded-full border bg-white px-1.5 py-0.5 text-sm transition-all ${selected ? "-rotate-3 border-[#f35142] text-[#b33226] font-medium" : "border-zinc-900 hover:bg-zinc-200"}`}
    >
      <FiCheckCircle /> {children}
    </button>
  </div>
);

import React from "react";

export default function DropDownButton({ setDialogOpen, isDialogOpen, icon, iconArrow ,label}) {
  return (
    <button
      onClick={() => setDialogOpen(!isDialogOpen)}
      className="flex items-center-safe gap-1 bg-neutral-700 px-2.5 py-1.5 rounded-[7px] font-medium text-neutral-0 cursor-pointer"
    >
      <span>
       {icon && icon}
      </span>{" "}
      <span className={`${!icon ? 'block': 'hidden'} sm:block`}>{label}</span>{" "}
      <span
        className={`${
          isDialogOpen ? "rotate-180" : "rotate-0"
        } transition-all duration-500 ease-in-out`}
      >
        {iconArrow}
      </span>
    </button>
  );
}

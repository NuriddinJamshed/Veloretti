import React from "react";

const themes = [
  { id: 1, className: "bg-black ring-2 ring-white shadow-md shadow-black", selected: true },
  { id: 2, className: "bg-gray-600", selected: false },
  { id: 3, className: "bg-[#e2ded1]", selected: false },
  {
    id: 4,
    className: "bg-[conic-gradient(black_0_50%,#f7e8d2_50%)]",
    style: {
      background: "conic-gradient(#f7e8d2 0% 50%, black 50% 100%)",
    },
    selected: false,
  },
];

export default function ThemeSelector() {
  return (
    <div className="flex gap-6 mb-[30px] justify-center">
      {themes.map((theme) => (
        <div
          key={theme.id}
          className={`w-[35px] h-[35px] rounded-full border-[2px] border-white ${
            theme.className
          } ${theme.selected ? "shadow-lg shadow-black" : ""}`}
          style={theme.style || {}}
        ></div>
      ))}
    </div>
  );
}

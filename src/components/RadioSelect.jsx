import { useState } from "react";

function RadioSelect({ label }) {
  const [checked, setChecked] = useState(false);
  const handleChecked = function () {
    setChecked((state) => !state);
  };
  return (
    <div
      className={
        checked
          ? "bg-white flex max-w-[300px] gap-4 rounded-lg border-2 border-orange-primary px-4 py-3 accent-orange-primary"
          : "bg-white flex max-w-[300px] gap-4 rounded-lg border-2 border-gray-100 px-4 py-3"
      }
    >
      <input type="radio" checked={checked} onClick={handleChecked}></input>
      <label className="font-bold">{label}</label>
    </div>
  );
}

export default RadioSelect;

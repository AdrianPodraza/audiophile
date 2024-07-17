import { useState } from "react";

function RadioSelect({ label, name }) {
  const [checked, setChecked] = useState(false);
  const handleChecked = function () {
    setChecked((state) => !state);
  };
  return (
    <div
      className={
        checked
          ? "flex max-w-[300px] gap-4 rounded-lg border-2 border-orange-primary bg-white px-4 py-3 accent-orange-primary"
          : "flex max-w-[300px] gap-4 rounded-lg border-2 border-gray-100 bg-white px-4 py-3"
      }
    >
      <input
        type="radio"
        name={name}
        checked={checked}
        onClick={handleChecked}
      ></input>
      <label className="font-bold">{label}</label>
    </div>
  );
}

export default RadioSelect;

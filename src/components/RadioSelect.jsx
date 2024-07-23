import { useState } from "react";

function RadioSelect({ name, label, value, selectedValue, onChange }) {
  return (
    <div
      className={`flex gap-4 rounded-lg border-2 ${
        selectedValue === value ? "border-orange-primary" : "border-gray-100"
      } bg-white px-4 py-3`}
    >
      <input
        type="radio"
        id={value}
        name={name}
        value={value}
        checked={selectedValue === value}
        onChange={() => onChange(value)}
        className="accent-orange-primary"
      />
      <label htmlFor={value}>{label}</label>
    </div>
  );
}

export default RadioSelect;

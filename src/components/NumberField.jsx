import { useState, useEffect } from "react";

function NumberField({ value, onChange, max = 20 }) {
  const [number, setNumber] = useState(value);

  useEffect(() => {
    setNumber(value);
  }, [value]);

  const handleIncrement = function () {
    if (number >= max) return;
    const newValue = number + 1;
    setNumber(newValue);
    onChange(newValue);
  };

  const handleDecrement = function () {
    if (number <= 1) return;
    const newValue = number - 1;
    setNumber(newValue);
    onChange(newValue);
  };

  return (
    <div className="flex h-[48px] min-w-[120px] items-center justify-center gap-7 bg-gray-200">
      <button
        className="font-bold text-black-full text-opacity-25 hover:text-orange-primary hover:text-opacity-100"
        onClick={handleDecrement}
      >
        -
      </button>
      <div className="font-bold">{number}</div>
      <button
        className="font-bold text-black-full text-opacity-25 hover:text-orange-primary hover:text-opacity-100"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
}

export default NumberField;

import { useState } from "react";

function NumberField() {
  const [number, setNumber] = useState(1);
  const handleIncrement = function () {
    if (number >= 20) return;
    setNumber((number) => number + 1);
  };
  const handleDecrement = function () {
    if (number <= 1) return;
    setNumber((number) => number - 1);
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

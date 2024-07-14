import { useState } from "react";

function NumberField() {
  const [number, setNumber] = useState(1);
  const handleIncrement = function () {
    setNumber((number) => number + 1);
  };
  const handleDecrement = function () {
    if (number <= 1) return;
    setNumber((number) => number - 1);
  };
  return (
    <div className="flex w-fit gap-7 bg-gray-200 px-6 py-5">
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

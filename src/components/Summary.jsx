import image from "../assets/cart/image-xx59-headphones.jpg";

import Button from "./Button";
function Summary() {
  return (
    <div className="flex flex-col gap-6 rounded-xl bg-white px-5 py-5 shadow-md">
      <h3 className="text-lg font-bold">SUMMARY</h3>
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <img src={image} alt="cart-item " className="w-[64px] rounded-xl" />

          <div className="flex flex-col">
            <span className="text-[15px] font-bold">XX99 MK II</span>
            <span className="text-[14px] font-bold opacity-50">$ 2,999</span>
          </div>
        </div>
        <span className="font-bold opacity-50">x1</span>
      </div>
      <div className="flex justify-between">
        <span className="text-[15px] font-medium opacity-50">TOTAL</span>

        <span className="text-lg font-bold">$ 5,396</span>
      </div>
      <div className="flex justify-between">
        <span className="text-[15px] font-medium opacity-50">SHIPPING</span>

        <span className="text-lg font-bold">$ 50</span>
      </div>
      <div className="flex justify-between">
        <span className="text-[15px] font-medium opacity-50">
          VAT(INCLUDED)
        </span>

        <span className="text-lg font-bold">$ 1,079</span>
      </div>
      <div className="flex justify-between">
        <span className="text-[15px] font-medium opacity-50">GRAND TOTAL</span>

        <span className="text-lg font-bold text-orange-primary">$ 5,466</span>
      </div>
      <Button
        className={
          "bg-orange-primary px-7 py-4 font-bold text-gray-0 hover:bg-orange-secondary"
        }
        title={"CONTINEU & PAY"}
      />
    </div>
  );
}

export default Summary;

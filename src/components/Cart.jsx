import NumberField from "./NumberField";
import image from "../assets/cart/image-xx59-headphones.jpg";
import Button from "./Button";

function Cart() {
  return (
    <div className="flex h-[488px] max-w-[377px] flex-col justify-between gap-4 rounded-xl bg-white px-4 py-4 shadow-lg">
      <div>
        <div className="flex justify-between">
          <span className="text-lg font-bold">CART(3)</span>
          <button className="cursor-pointer text-[15px] font-medium underline opacity-50 hover:text-orange-primary">
            Remove all
          </button>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-4">
            <img src={image} alt="cart-item " className="w-[64px] rounded-xl" />

            <div className="flex flex-col">
              <span className="text-[15px] font-bold">XX99 MK II</span>
              <span className="text-[14px] font-bold opacity-50">$ 2,999</span>
            </div>
          </div>
          <NumberField />
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <span className="opac text-[15px] font-medium">TOTAL</span>

          <span className="text-lg font-bold">$ 5,396</span>
        </div>
        <Button
          className={
            "w-full bg-orange-primary px-7 py-4 font-bold text-gray-0 transition-all duration-200 hover:bg-orange-secondary"
          }
          title={"CHECKOUT"}
        />
      </div>
    </div>
  );
}

export default Cart;

import { useCart } from "../context/CartContext";
import NumberField from "./NumberField";
import Button from "./Button";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Cart({ setIsCartOpen }) {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const handleCart = () => {
    setIsCartOpen((isCartOpen) => !isCartOpen);
  };

  const handleRemoveAll = () => {
    cart.forEach((item) => removeFromCart(item.id));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="fixed right-0 z-[70] mx-4 mt-8 w-fit min-w-[400px] rounded-lg bg-white p-6 sm:mx-10 md:mx-40">
      <button
        className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
        onClick={handleCart}
      >
        <IoClose size={24} />
      </button>
      <div className="flex h-[488px] max-w-[377px] flex-col justify-between gap-4 rounded-xl bg-white px-4 py-4">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <span className="text-lg font-bold">CART({cart.length})</span>
            <button
              className="cursor-pointer text-[15px] font-medium underline opacity-50 hover:text-orange-primary"
              onClick={handleRemoveAll}
            >
              Remove all
            </button>
          </div>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between">
              <div className="flex gap-4">
                <img
                  src={item.image}
                  alt="cart-item "
                  className="w-[64px] rounded-xl"
                />
                <div className="flex flex-col">
                  <span className="text-[15px] font-bold">{item.name}</span>
                  <span className="text-[14px] font-bold opacity-50">
                    ${item.price}
                  </span>
                </div>
              </div>
              <NumberField
                value={item.quantity}
                onChange={(value) => updateQuantity(item.id, value)}
              />
            </div>
          ))}
        </div>
        <div>
          <div className="flex justify-between">
            <span className="text-[15px] font-medium opacity-50">TOTAL</span>
            <span className="text-lg font-bold">
              ${calculateTotal().toFixed(2)}
            </span>
          </div>
          <Button
            className={
              "w-full bg-orange-primary px-7 py-4 font-bold text-gray-0 transition-all duration-200 hover:bg-orange-secondary"
            }
            title={"CHECKOUT"}
            onClick={() => navigate("/checkout")}
          />
        </div>
      </div>
    </div>
  );
}

export default Cart;

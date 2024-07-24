import { FaCheck } from "react-icons/fa";
import Button from "./Button";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function OrderModal() {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  const navigate = useNavigate();
  const { cart } = useCart();
  const total = calculateTotal();
  const shipping = 50;
  const grandTotal = total + shipping;

  return (
    <div className="flex flex-col gap-4 rounded-xl bg-white px-4 py-4">
      <div className="grid h-16 w-16 place-content-center rounded-full bg-orange-primary">
        <FaCheck className="text-[24px] text-white" />
      </div>
      <h3 className="w-4/5 text-2xl font-bold">THANK YOU FOR YOUR ORDER</h3>
      <p className="text-[15px] font-medium opacity-50">
        You will receive an email confirmation shortly.
      </p>
      <div className="flex flex-col rounded-xl bg-gray-200 px-4 py-4">
        <div className="flex justify-between border-b-[1px] border-black-full border-opacity-10">
          <div className="flex gap-6">
            <img src={cart[0].image} alt={cart[0].name} className="w-[64px]" />
            <div className="flex flex-col gap-3">
              <h4 className="text-[15px] font-bold"> {cart[0].name} </h4>
              <span className="text-[14px] font-bold opacity-50">
                ${cart[0].price}
              </span>
            </div>
          </div>
          <span className="opacity-50">x{cart[0].quantity}</span>
        </div>
        <span className="py-3 text-center text-xs font-bold opacity-50">
          and {cart.length - 1} other item(s)
        </span>
        <div className="-mx-4 -mb-4 flex flex-col rounded-b-xl bg-black-full px-4 py-4">
          <span className="text-[15px] font-medium text-white opacity-50">
            GRAND TOTAL
          </span>
          <span className="text-lg font-bold text-white">${grandTotal}</span>
        </div>
      </div>
      <Button
        className={
          "w-full bg-orange-primary px-7 py-4 font-bold text-gray-0 transition-all duration-200 hover:bg-orange-secondary"
        }
        title={"BACK TO HOME"}
        onClick={() => navigate("/")}
      />
    </div>
  );
}

export default OrderModal;

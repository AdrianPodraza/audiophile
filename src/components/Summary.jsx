import { useCart } from "../context/CartContext";
import Button from "./Button";

function Summary() {
  const { cart } = useCart();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateVAT = (total) => {
    return total * 0.2; // Assuming VAT is 20%
  };

  const total = calculateTotal();
  const vat = calculateVAT(total);
  const shipping = 50; // Fixed shipping cost
  const grandTotal = total + shipping;

  return (
    <div className="flex h-fit flex-col gap-6 rounded-xl bg-white px-5 py-5 shadow-md md:w-1/3">
      <h3 className="text-lg font-bold">SUMMARY</h3>
      {cart.map((item) => (
        <div key={item.id} className="flex items-center justify-between">
          <div className="flex gap-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-[64px] rounded-xl"
            />
            <div className="flex flex-col">
              <span className="text-[15px] font-bold">{item.name}</span>
              <span className="text-[14px] font-bold opacity-50">
                ${item.price}
              </span>
            </div>
          </div>
          <span className="font-bold opacity-50">x{item.quantity}</span>
        </div>
      ))}
      <div className="flex justify-between">
        <span className="text-[15px] font-medium opacity-50">TOTAL</span>
        <span className="text-lg font-bold">${total.toFixed(2)}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-[15px] font-medium opacity-50">SHIPPING</span>
        <span className="text-lg font-bold">${shipping.toFixed(2)}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-[15px] font-medium opacity-50">
          VAT (INCLUDED)
        </span>
        <span className="text-lg font-bold">${vat.toFixed(2)}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-[15px] font-medium opacity-50">GRAND TOTAL</span>
        <span className="text-lg font-bold text-orange-primary">
          ${grandTotal.toFixed(2)}
        </span>
      </div>
      <Button
        className={
          "bg-orange-primary px-7 py-4 font-bold text-gray-0 hover:bg-orange-secondary"
        }
        title={"CONTINUE & PAY"}
      />
    </div>
  );
}

export default Summary;

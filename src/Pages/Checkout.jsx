import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import InputField from "../components/InputField";
import RadioSelect from "../components/RadioSelect";
function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("e-Money");
  return (
    <>
      <Navbar />
      <div className="flex w-full flex-col gap-7 rounded-xl bg-gray-100 px-4 pt-4 shadow-lg sm:px-8 md:gap-32 md:px-40 md:pt-12">
        <button className="w-fit text-[15px] text-opacity-50">Go back</button>
        <div className="flex flex-col gap-6 rounded-xl bg-white px-4 py-4">
          <h3 className="text-[28px] font-bold">CHECKOUT</h3>
          <span className="text-[13px] text-orange-primary">
            BILLING DETAILS
          </span>
          <InputField label="Name" placeholder="Type your name" type="text" />
          <InputField
            label="Email Address"
            placeholder="Type your email"
            type="email"
          />
          <InputField
            label="Phone Number"
            placeholder="Type your phone number"
            type="tel"
          />
          <span className="text-[13px] text-orange-primary">SHIPPING INFO</span>
          <InputField
            label="Your Address"
            placeholder="1137 Williams Avenue"
            type="text"
          />
          <InputField label="ZIP Code" placeholder="39-203" type="text" />

          <InputField label="City" placeholder="New York" type="text" />
          <InputField label="Country" placeholder="United States" type="text" />
          <span className="text-[13px] text-orange-primary">
            PAYMENT DETAILS
          </span>
          <RadioSelect
            name="payment"
            label="e-Money"
            value="e-Money"
            selectedValue={paymentMethod}
            onChange={setPaymentMethod}
          />
          <RadioSelect
            name="payment"
            label="Cash on Delivery"
            value="Cash"
            selectedValue={paymentMethod}
            onChange={setPaymentMethod}
          />

          {paymentMethod === "e-Money" && (
            <>
              <InputField
                label="e-Money Number"
                placeholder="238521993"
                type="text"
              />
              <InputField label="e-Money PIN" placeholder="9861" type="text" />
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Checkout;

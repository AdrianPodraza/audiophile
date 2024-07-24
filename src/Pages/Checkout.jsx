import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import InputField from "../components/InputField";
import InputFieldError from "../components/InputFieldError";
import RadioSelect from "../components/RadioSelect";
import Summary from "../components/Summary";

function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("e-Money");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    eMoneyNumber: "",
    eMoneyPin: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Valid email is required";
    }

    // Phone validation
    const phoneRegex = /^\d{10}$/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone)) {
      newErrors.phone = "Valid 10-digit phone number is required";
    }

    // Address validation
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    // ZIP Code validation
    const zipCodeRegex = /^\d{5}(-\d{4})?$/;
    if (!formData.zipCode.trim() || !zipCodeRegex.test(formData.zipCode)) {
      newErrors.zipCode = "Valid ZIP code is required";
    }

    // City validation
    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    // Country validation
    if (!formData.country.trim()) {
      newErrors.country = "Country is required";
    }

    // e-Money validations
    if (paymentMethod === "e-Money") {
      if (
        !formData.eMoneyNumber.trim() ||
        !/^\d{9}$/.test(formData.eMoneyNumber)
      ) {
        newErrors.eMoneyNumber = "Valid 9-digit e-Money number is required";
      }
      if (!formData.eMoneyPin.trim() || !/^\d{4}$/.test(formData.eMoneyPin)) {
        newErrors.eMoneyPin = "Valid 4-digit e-Money PIN is required";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (validateForm()) {
      // Process the form submission
      console.log("Form submitted successfully", formData);
    } else {
      console.log("Form has errors");
    }
  };

  const renderInput = (name, label, placeholder, type = "text") => {
    const props = {
      label,
      placeholder,
      type,
      value: formData[name],
      onChange: handleInputChange,
      name,
    };

    if (isSubmitted && errors[name]) {
      return <InputFieldError {...props} errorMessage={errors[name]} />;
    }
    return <InputField {...props} />;
  };

  return (
    <>
      <Navbar />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 rounded-xl bg-gray-100 px-4 pb-12 pt-4 shadow-lg sm:px-8 md:gap-32 md:px-40 md:pt-12"
      >
        <button type="button" className="w-fit text-[15px] text-opacity-50">
          Go back
        </button>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex flex-col rounded-xl bg-white px-4 py-4 md:w-2/3">
            <h3 className="text-[28px] font-bold">CHECKOUT</h3>
            <div className="flex flex-col gap-7 sm:grid sm:grid-cols-2">
              <span className="h-fit text-[13px] text-orange-primary sm:row-start-1">
                BILLING DETAILS
              </span>
              <div className="h-fit sm:col-span-1 sm:row-start-2">
                {renderInput("name", "Name", "Type your name")}
              </div>
              <div className="h-fit sm:col-span-1 sm:row-start-2">
                {renderInput(
                  "email",
                  "Email Address",
                  "Type your email",
                  "email",
                )}
              </div>
              <div className="h-fit sm:row-start-3">
                {renderInput(
                  "phone",
                  "Phone Number",
                  "Type your phone number",
                  "tel",
                )}
              </div>
            </div>
            <div className="flex flex-col gap-7 sm:grid sm:grid-cols-2">
              <span className="h-fit text-[13px] text-orange-primary">
                SHIPPING INFO
              </span>
              <div className="h-fit sm:col-span-2 sm:row-start-2">
                {renderInput("address", "Your Address", "1137 Williams Avenue")}
              </div>
              <div className="h-fit sm:row-start-3">
                {renderInput("zipCode", "ZIP Code", "39-203")}
              </div>
              <div className="h-fit sm:row-start-3">
                {renderInput("city", "City", "New York")}
              </div>
              <div className="h-fit sm:row-start-4">
                {renderInput("country", "Country", "United States")}
              </div>
            </div>
            <div className="flex flex-col gap-7 sm:grid sm:grid-cols-2">
              <span className="text-[13px] text-orange-primary">
                PAYMENT DETAILS
              </span>

              <div className="h-fit sm:col-start-2 sm:row-start-2">
                <RadioSelect
                  name="payment"
                  label="e-Money"
                  value="e-Money"
                  selectedValue={paymentMethod}
                  onChange={setPaymentMethod}
                />
              </div>
              <div className="h-fit sm:col-start-2 sm:row-start-3">
                <RadioSelect
                  name="payment"
                  label="Cash on Delivery"
                  value="Cash"
                  selectedValue={paymentMethod}
                  onChange={setPaymentMethod}
                />
              </div>

              {paymentMethod === "e-Money" && (
                <>
                  <div className="sm:col-start-1 sm:row-start-4">
                    {renderInput("eMoneyNumber", "e-Money Number", "238521993")}
                  </div>
                  <div className="sm:col-start-2 sm:row-start-4">
                    {renderInput("eMoneyPin", "e-Money PIN", "9861")}
                  </div>
                </>
              )}
            </div>
          </div>
          <Summary />
        </div>
      </form>
      <Footer />
    </>
  );
}

export default Checkout;

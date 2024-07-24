import { Route, Routes, useLocation } from "react-router-dom";

import MainPage from "./Pages/MainPage";
import Headphones from "./Pages/Headphones";
import Speakers from "./Pages/Speakers";
import Earphones from "./Pages/Earphones";
import ProductDetail from "./Pages/ProductDetail";
import { useEffect } from "react";
import Cart from "./components/Cart";
import Checkout from "./Pages/Checkout";
import Summary from "./components/Summary";
import { CartProvider } from "./context/CartContext";
import { Toaster } from "react-hot-toast";
import OrderModal from "./components/OrderModal";
function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);
  return (
    <CartProvider>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<OrderModal />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
      </Routes>
    </CartProvider>
  );
}

export default App;

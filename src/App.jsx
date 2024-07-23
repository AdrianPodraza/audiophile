import { Route, Routes, useLocation } from "react-router-dom";

import MainPage from "./Pages/MainPage";
import Headphones from "./Pages/Headphones";
import Speakers from "./Pages/Speakers";
import Earphones from "./Pages/Earphones";
import ProductDetail from "./Pages/ProductDetail";
import { useEffect } from "react";
import Cart from "./components/Cart";
import Checkout from "./Pages/Checkout";
function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;

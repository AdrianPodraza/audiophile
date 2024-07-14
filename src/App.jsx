import { Route, Routes, useLocation } from "react-router-dom";

import MainPage from "./Pages/MainPage";
import Headphones from "./Pages/Headphones";
import Speakers from "./Pages/Speakers";
import Earphones from "./components/Earphones";
import ProductDetail from "./Pages/ProductDetail";
import { useEffect } from "react";
function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
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

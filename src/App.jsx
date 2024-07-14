import { Route, Routes } from "react-router-dom";

import MainPage from "./Pages/MainPage";
import Headphones from "./Pages/Headphones";
import Speakers from "./Pages/Speakers";
import Earphones from "./components/Earphones";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/earphones" element={<Earphones />} />
      </Routes>
    </>
  );
}

export default App;

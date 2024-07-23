import Button from "./Button";
import { IoIosArrowForward } from "react-icons/io";
import speakers from "../assets/menu-images/speakers.png";
import earphones from "../assets/menu-images/earphones.png";
import headphones from "../assets/menu-images/headphones.png";
import { useNavigate } from "react-router-dom";
function MenuMobile({ id, fixed }) {
  const navigate = useNavigate();
  return (
    <div
      id={id}
      className={`${fixed ? "fixed" : " "} z-50 flex w-screen max-w-full flex-col items-center gap-11 bg-gray-100 py-11 sm:max-w-full sm:flex-row sm:justify-between`}
    >
      <div className="flex w-full flex-col items-center gap-4 rounded-lg bg-gray-200 pb-4">
        <img className="-mt-9 w-24" src={headphones} alt="headphones" />
        <span className="text-[15px] font-bold">Headphones</span>
        <Button
          className={
            "flex items-center gap-2 text-center text-[13px] font-bold text-black-full text-opacity-50 hover:text-orange-primary"
          }
          title={"SHOP"}
          onClick={() => navigate("/headphones")}
          icon={<IoIosArrowForward className="text-orange-primary" />}
        />
      </div>
      <div className="flex w-full flex-col items-center gap-4 rounded-lg bg-gray-200 pb-4">
        <img className="-mt-9 w-24" src={speakers} alt="Speakers" />
        <span className="text-[15px] font-bold">SPEAKERS</span>
        <Button
          className={
            "flex items-center gap-2 text-center text-[13px] font-bold text-black-full text-opacity-50 hover:text-orange-primary"
          }
          title={"SHOP"}
          onClick={() => navigate("/speakers")}
          icon={<IoIosArrowForward className="text-orange-primary" />}
        />
      </div>
      <div className="flex w-full flex-col items-center gap-4 rounded-lg bg-gray-200 pb-4">
        <img className="-mt-9 w-24" src={earphones} alt="Earphones" />
        <span className="text-[15px] font-bold">EARPHONES</span>
        <Button
          className={
            "flex items-center gap-2 text-center text-[13px] font-bold text-black-full text-opacity-50 hover:text-orange-primary"
          }
          title={"SHOP"}
          onClick={() => navigate("/earphones")}
          icon={<IoIosArrowForward className="text-orange-primary" />}
        />
      </div>
    </div>
  );
}

export default MenuMobile;

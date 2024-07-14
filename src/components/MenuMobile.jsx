import Button from "./Button";
import { IoIosArrowForward } from "react-icons/io";
function MenuMobile({ id }) {
  return (
    <div
      id={id}
      className="flex w-screen max-w-full flex-col items-center gap-11 bg-white py-11 sm:max-w-full sm:flex-row sm:justify-between"
    >
      <div className="flex w-full flex-col items-center gap-4 rounded-lg bg-gray-200 pb-4">
        <img className="-mt-9 w-24" src="./headphones.png" alt="headphones" />
        <span className="text-[15px] font-bold">Headphones</span>
        <Button
          className={
            "flex items-center gap-2 text-center text-[13px] font-bold text-black-full text-opacity-50 hover:text-orange-primary"
          }
          title={"SHOP"}
          icon={<IoIosArrowForward className="text-orange-primary" />}
        />
      </div>
      <div className="flex w-full flex-col items-center gap-4 rounded-lg bg-gray-200 pb-4">
        <img className="-mt-9 w-24" src="./speakers.png" alt="Speakers" />
        <span className="text-[15px] font-bold">SPEAKERS</span>
        <Button
          className={
            "flex items-center gap-2 text-center text-[13px] font-bold text-black-full text-opacity-50 hover:text-orange-primary"
          }
          title={"SHOP"}
          icon={<IoIosArrowForward className="text-orange-primary" />}
        />
      </div>
      <div className="flex w-full flex-col items-center gap-4 rounded-lg bg-gray-200 pb-4">
        <img className="-mt-9 w-24" src="./earphones.png" alt="Earphones" />
        <span className="text-[15px] font-bold">EARPHONES</span>
        <Button
          className={
            "flex items-center gap-2 text-center text-[13px] font-bold text-black-full text-opacity-50 hover:text-orange-primary"
          }
          title={"SHOP"}
          icon={<IoIosArrowForward className="text-orange-primary" />}
        />
      </div>
    </div>
  );
}

export default MenuMobile;

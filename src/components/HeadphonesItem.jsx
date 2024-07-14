import Button from "./Button";

function HeadphonesItem({ img, name, desc, reverseOrder }) {
  return (
    <div
      className={`flex flex-col items-center gap-5 xl:flex-row xl:items-center xl:gap-28 ${reverseOrder ? "xl:flex-row-reverse" : ""}`}
    >
      <img src={img} className="max-w-[540px] rounded-xl" />
      <div className="flex flex-col items-center gap-5 xl:items-start xl:text-left">
        <span className="text-[14px] tracking-[10px] text-orange-primary">
          NEW PRODUCT
        </span>
        <h2 className="text-center text-[28px] font-bold xl:text-left">
          {name.toUpperCase()}
        </h2>
        <p className="text-center leading-[25px] xl:w-1/2 xl:text-left">
          {desc}
        </p>
        <Button
          className={
            "bg-orange-primary px-7 py-4 font-bold text-gray-0 transition-all duration-300 hover:bg-orange-secondary"
          }
          title={"SEE PRODUCT"}
        />
      </div>
    </div>
  );
}

export default HeadphonesItem;

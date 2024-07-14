import Button from "./Button";
import NumberField from "./NumberField";

function ProductDetail() {
  return (
    <div className="mt-3 flex flex-col px-4">
      <button className="text-[15px] text-opacity-50">Go back</button>
      <img src="" />
      <span className="text-[14px] tracking-[10px] text-orange-primary">
        NEW PRODUCT
      </span>
      <p className="text-center leading-[25px] xl:w-1/2 xl:text-left">desc</p>
      <span className="text-lg font-bold">PRICE</span>
      <div className="flex justify-between">
        <NumberField />
        <Button
          className={
            "bg-orange-primary px-7 py-4 font-bold text-gray-0 hover:bg-orange-secondary"
          }
          title={"ADD TO CART"}
        />
      </div>
    </div>
  );
}

export default ProductDetail;

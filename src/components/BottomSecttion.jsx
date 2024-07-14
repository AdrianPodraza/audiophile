import useScreenType from "../hooks/useScreenType";

function BottomSecttion() {
  const screenType = useScreenType();
  return (
    <div className="flex flex-col items-center gap-10 xl:flex-row">
      {screenType === "mobile" ? (
        <img src="/image-best-gear-mobile.jpg" className="rounded-xl" />
      ) : screenType === "tablet" ? (
        <img src="/image-best-gear-tablet.jpg" className="rounded-xl" />
      ) : (
        <img src="/image-best-gear.jpg" className="order-2 rounded-xl" />
      )}

      <div className="flex flex-col items-center gap-10 text-center xl:items-start xl:text-left">
        <h2 className="w-[250px] text-[28px] font-bold sm:w-[350px] sm:text-[40px] md:w-[450px] md:text-[44px]">
          BRINGING YOU THE
          <span className="text-orange-primary"> BEST </span>
          AUDIO GEAR
        </h2>
        <p className="text-[15px] leading-[25px] text-opacity-50 md:w-3/4">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
}

export default BottomSecttion;

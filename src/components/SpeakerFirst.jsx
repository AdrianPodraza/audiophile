import Button from "./Button";
import useScreenType from "../hooks/useScreenType";

function SpeakerFirst() {
  const screenType = useScreenType();

  return (
    <div className="relative z-[2] flex w-full flex-col items-center gap-6 overflow-hidden rounded-lg bg-orange-primary px-14 pb-12 pt-20">
      <div className="flex flex-col items-center gap-10 xl:flex-row xl:gap-64">
        <div>
          {screenType === "mobile" ? (
            <img src="./image-speaker-zx9-moblie.png" className="z-[1]" />
          ) : screenType === "tablet" ? (
            <img src="./image-speaker-zx9-tablet.png" className="scale-75" />
          ) : (
            <img
              src="./image-speaker-zx9.png"
              className="max-h-[500px] xl:-mb-16"
            />
          )}
          <img src="./pattern-circles.svg" className="absolute top-0 z-[-1]" />
        </div>
        <div className="flex max-w-[400px] flex-col items-center justify-center gap-10">
          <h3 className="text-center text-4xl font-bold tracking-[2px] text-white xl:place-self-start xl:text-left xl:text-6xl">
            ZX9 <br /> SPEAKER
          </h3>

          <p className="text-center text-[15px] text-white text-opacity-75 xl:text-left">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>

          <Button
            className={
              "border-[1px] border-black-full bg-black-full px-7 py-4 font-bold text-white transition-all duration-300 hover:bg-[#4C4C4C] xl:place-self-start"
            }
            title={"SEE PRODUCT"}
            slug={"zx9-speaker"}
          />
        </div>
      </div>
    </div>
  );
}

export default SpeakerFirst;

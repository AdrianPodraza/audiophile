import useScreenType from "../hooks/useScreenType";
import Button from "./Button";

Button;
function SpeakerThird() {
  const screenType = useScreenType();
  return (
    <div className="flex max-w-full flex-col gap-8 sm:flex-row">
      <div className="flex flex-1">
        {" "}
        {/* Updated class for image div */}
        {screenType === "mobile" ? (
          <img
            src="image-speaker-third-mobile.jpg"
            className="min-h-full w-full rounded-xl object-cover" // Ensure image covers div
          />
        ) : screenType === "tablet" ? (
          <img
            src="image-speaker-third-tablet.jpg"
            className="min-h-full w-full rounded-xl object-cover"
          />
        ) : (
          <img
            src="image-speaker-third.jpg"
            className="min-h-full w-full rounded-xl object-cover"
          />
        )}
      </div>
      <div className="box-border flex min-h-full flex-1 flex-col items-center justify-center gap-8 rounded-xl bg-gray-200 px-16 py-20">
        {" "}
        {/* Updated class for text div */}
        <h2 className="text-[28px] font-bold tracking-[2px]">YX1 EARPHONES</h2>
        <Button
          className={
            "max-w-[250px] border-[1px] border-black-full bg-none px-7 py-4 font-bold text-black-full transition-all duration-300 hover:bg-black-full hover:text-gray-0"
          }
          title={"SEE PRODUCT"}
          slug={"yx1-wireless-earphones"}
        />
      </div>
    </div>
  );
}

export default SpeakerThird;

import useScreenType from "../hooks/useScreenType";
import Button from "./Button";
function SpeakerSecond() {
  const screenType = useScreenType();
  console.log(screenType);

  return (
    <div>
      <div
        className={`${screenType === "mobile" ? "bg-second-speaker-mobile" : screenType === "tablet" ? "bg-second-speaker-tablet" : "bg-second-speaker"} flex min-h-[600px] flex-col gap-16 rounded-xl bg-cover bg-center bg-no-repeat px-20 sm:max-h-[320px]`}
      >
        <h2 className="mt-[250px] text-3xl font-bold tracking-[2px]">
          ZX7 SPEAKER
        </h2>
        <Button
          className={
            "max-w-[250px] border-[1px] border-black-full bg-none px-7 py-4 font-bold text-black-full transition-all duration-300 hover:bg-black-full hover:text-gray-0 xl:place-self-start"
          }
          title={"SEE PRODUCT"}
        />
      </div>
    </div>
  );
}

export default SpeakerSecond;

import Button from "../components/Button";
function Hero() {
  return (
    <section className="h-screen bg-hero-image-mobile bg-cover bg-center sm:bg-hero-image">
      <div className="mx-4 flex max-w-[400px] flex-col gap-9 py-24 sm:mx-10 md:mx-40">
        <span className="text-[14px] tracking-[10px] text-white text-opacity-50">
          NEW PRODUCT
        </span>
        <h2 className="text-6xl font-bold text-white">
          XX99 Mark II Headphones
        </h2>
        <p className="text-[15px] font-medium text-white text-opacity-75">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Button
          className={
            "max-w-[160px] bg-orange-primary px-7 py-4 text-[13px] font-bold text-gray-0 hover:bg-orange-secondary"
          }
          title={"SEE PRODUCT"}
          slug={"xx99-mark-ii-headphones"}
        />
      </div>
    </section>
  );
}

export default Hero;

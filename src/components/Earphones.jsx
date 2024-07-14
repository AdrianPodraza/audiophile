import BottomSecttion from "../components/BottomSecttion";
import Footer from "../components/Footer";
import HeadphonesItem from "../components/HeadphonesItem";
import MenuMobile from "../components/MenuMobile";
import Navbar from "../components/Navbar";
import useScreenType from "../hooks/useScreenType";

function Earphones() {
  const screenType = useScreenType();
  return (
    <>
      <div className="bg-black-full px-4 sm:px-10 md:px-40">
        <Navbar />
      </div>
      <div className="flex items-center justify-center bg-black-full py-10 text-3xl font-bold text-white">
        EARPHONES
      </div>
      <div className="mt-8 flex flex-col gap-28 px-4 xl:px-[140px]">
        <HeadphonesItem
          img={`/img-cat-yx1-${screenType}.jpg`}
          name="YX1 WIRELESS EARPHONES"
          desc="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
        />

        <MenuMobile />
        <BottomSecttion />
      </div>
      <Footer />
    </>
  );
}

export default Earphones;

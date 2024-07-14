import BottomSecttion from "../components/BottomSecttion";
import Footer from "../components/Footer";
import HeadphonesItem from "../components/HeadphonesItem";
import MenuMobile from "../components/MenuMobile";
import Navbar from "../components/Navbar";
import useScreenType from "../hooks/useScreenType";

function Speakers() {
  const screenType = useScreenType();
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center bg-black-full py-10 text-3xl font-bold text-white">
        SPEAKERS
      </div>
      <div className="mt-8 flex flex-col gap-28 px-4 xl:px-[140px]">
        <HeadphonesItem
          img={`/img-cat-zx9-${screenType}.jpg`}
          name="ZX9 speaker"
          desc="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
        />
        <HeadphonesItem
          img={`/img-cat-zx7-${screenType}.jpg`}
          reverseOrder={true}
          name="ZX7 SPEAKER"
          desc="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
        />

        <MenuMobile />
        <BottomSecttion />
      </div>
      <Footer />
    </>
  );
}

export default Speakers;

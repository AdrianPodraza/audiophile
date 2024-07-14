import BottomSecttion from "../components/BottomSecttion";
import Footer from "../components/Footer";
import HeadphonesItem from "../components/HeadphonesItem";
import MenuMobile from "../components/MenuMobile";
import Navbar from "../components/Navbar";
import useScreenType from "../hooks/useScreenType";

function Headphones() {
  const screenType = useScreenType();

  return (
    <>
      <div className="bg-black-full px-4 sm:px-10 md:px-40">
        <Navbar />
      </div>
      <div className="flex items-center justify-center bg-black-full py-10 text-3xl font-bold text-white">
        HEADPHONES
      </div>
      <div className="mt-8 flex flex-col gap-28 px-4 xl:px-[140px]">
        <HeadphonesItem
          img={`/img-cat-x991-${screenType}.jpg`}
          name="XX99 Mark II Headphones"
          desc="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
        />
        <HeadphonesItem
          img={`/img-cat-x992-${screenType}.jpg`}
          name="XX99 Mark I Headphones"
          desc="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
          reverseOrder={true}
        />
        <HeadphonesItem
          img={`/img-cat-xx59-${screenType}.jpg`}
          name="XX59 Headphones"
          desc="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
        />
        <MenuMobile />
        <BottomSecttion />
      </div>
      <Footer />
    </>
  );
}

export default Headphones;

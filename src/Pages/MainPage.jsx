import BottomSecttion from "../components/BottomSecttion";
import Footer from "../components/Footer";
import MenuMobile from "../components/MenuMobile";
import Navbar from "../components/Navbar";
import SpeakerFirst from "../components/SpeakerFirst";
import SpeakerSecond from "../components/SpeakerSecond";
import SpeakerThird from "../components/SpeakerThird";
import Home from "./Home";

function MainPage() {
  return (
    <>
      <div className="bg-black-soft px-4 sm:px-10 md:px-40">
        <Navbar />
      </div>
      <Home />
      <div className="hidden px-4 sm:flex sm:px-10 md:px-40">
        <MenuMobile />
      </div>
      <div className="flex w-screen flex-col gap-8 px-4 sm:flex sm:px-10 md:px-40">
        <SpeakerFirst />
        <SpeakerSecond />
        <SpeakerThird />
        <BottomSecttion />
      </div>
      <Footer />
    </>
  );
}

export default MainPage;

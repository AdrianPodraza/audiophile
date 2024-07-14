import { useState, useEffect } from "react";

const useScreenType = () => {
  const [screenSize, setScreenSize] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setScreenSize("mobile");
      else if (window.innerWidth >= 768 && window.innerWidth < 1024)
        setScreenSize("tablet");
      else setScreenSize("desktop");
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
};

export default useScreenType;

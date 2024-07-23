import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import gsap from "gsap";
import MenuMobile from "../components/MenuMobile";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import cart from "../assets/icon-cart.svg";
import useScreenType from "../hooks/useScreenType";

function Navbar() {
  const menu = [
    { title: "Home", path: "/" },
    { title: "Headphones", path: "/headphones" },
    { title: "Speakers", path: "/speakers" },
    { title: "Earphones", path: "/earphones" },
  ];

  const screenType = useScreenType();
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = function () {
    setIsOpen((isOpen) => !isOpen);
  };

  useEffect(() => {
    let animation;

    if (isOpen) {
      animation = gsap.to("#menu", { x: 0, duration: 0.5 });
    } else {
      animation = gsap.to("#menu", { x: "-100%", duration: 0.5 });
    }

    return () => {
      if (animation) {
        animation.kill();
      }
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [screenType]);

  return (
    <>
      <nav className="border-black fixed top-0 z-50 flex w-full justify-between border-b-[1px] border-opacity-20 bg-black-full px-4 py-9 sm:px-10 md:px-40">
        <div className="flex items-center gap-4">
          <IoClose
            onClick={handleMenu}
            className={`${isOpen ? "flex" : "hidden"} cursor-pointer text-white sm:hidden`}
          />

          <GiHamburgerMenu
            onClick={handleMenu}
            className={`${isOpen ? "hidden" : "flex"} cursor-pointer text-white sm:hidden`}
          />

          <img src={logo} alt="logo" />
        </div>

        <ul className="hidden gap-8 text-white sm:flex">
          {menu.map((item) => (
            <NavLink
              to={item.path}
              key={item.title}
              className={({ isActive }) =>
                isActive
                  ? "nav-active cursor-pointer text-[13px]"
                  : "cursor-pointer text-[13px] hover:text-orange-primary"
              }
            >
              {item.title}
            </NavLink>
          ))}
        </ul>

        <img className="h-5" src={cart} />
      </nav>
      {isOpen && <MenuMobile fixed={true} id="menu" bgcolor="bg-white" />}
    </>
  );
}

export default Navbar;

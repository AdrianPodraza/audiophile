import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import gsap from "gsap";
import MenuMobile from "../components/MenuMobile";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import cartIcon from "../assets/icon-cart.svg";
import useScreenType from "../hooks/useScreenType";
import { useCart } from "../context/CartContext"; // Importuj kontekst koszyka
import Cart from "../components/Cart"; // Importuj komponent Cart

function Navbar() {
  const menu = [
    { title: "Home", path: "/" },
    { title: "Headphones", path: "/headphones" },
    { title: "Speakers", path: "/speakers" },
    { title: "Earphones", path: "/earphones" },
  ];

  const screenType = useScreenType();
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); // Stan modalu koszyka
  const { cart } = useCart(); // Użyj kontekstu koszyka
  const cartItemCount = cart.length; // Liczba różnych produktów w koszyku

  const handleMenu = function () {
    setIsOpen((isOpen) => !isOpen);
  };

  const handleCart = () => {
    setIsCartOpen((isCartOpen) => !isCartOpen);
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
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
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
        <div className="relative">
          <img
            className="h-5 cursor-pointer"
            src={cartIcon}
            alt="Cart"
            onClick={handleCart}
          />
          {cartItemCount > 0 && (
            <span className="absolute -right-2 -top-2 rounded-full bg-red-600 px-2 text-xs text-white">
              {cartItemCount}
            </span>
          )}
        </div>
      </nav>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 h-screen w-screen bg-black-full opacity-50"
            onClick={handleMenu}
          />
          <MenuMobile fixed={true} id="menu" bgcolor="bg-white" />
        </>
      )}

      {isCartOpen && (
        <div>
          <div
            className="fixed inset-0 z-[60] h-screen w-screen bg-black-full opacity-50"
            onClick={handleCart}
          />

          <Cart setIsCartOpen={setIsCartOpen} />
        </div>
      )}
    </>
  );
}

export default Navbar;

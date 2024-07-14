import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import fb from "../assets/icon-facebook.svg";
import ig from "../assets/icon-instagram.svg";
import twitter from "../assets/icon-twitter.svg";

function Footer() {
  const menu = [
    { title: "Home" },
    { title: "Headphones" },
    { title: "Speakers" },
    { title: "Earphones" },
  ];
  return (
    <footer className="relative flex flex-col items-center gap-10 bg-black-soft px-5 py-10 sm:items-start md:px-40">
      <div className="absolute top-0 h-[4px] w-[100px] bg-orange-primary"></div>
      <div className="flex flex-col gap-4 md:w-full md:flex-row md:justify-between">
        <img src={logo} className="w-fit" />
        <ul className="flex flex-col gap-6 text-center text-[13px] font-bold sm:flex-row sm:text-left">
          {menu.map((item) => (
            <Link
              to={`/${item.title}`}
              key={item.title}
              className="cursor-pointer text-[13px] text-white hover:text-orange-primary"
            >
              {item.title.toLocaleUpperCase()}
            </Link>
          ))}
        </ul>
      </div>
      <p className="text-center text-white text-opacity-50 sm:text-left md:w-1/2">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <div className="flex w-full flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <p className="text-white text-opacity-50">
          Copyright 2021. All Rights Reserved
        </p>
        <div className="flex gap-6">
          <img src={fb} className="cursor-pointer fill-current text-blue-500" />
          <img src={ig} className="cursor-pointer fill-current text-blue-500" />
          <img
            src={twitter}
            className="cursor-pointer fill-current text-blue-500"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;

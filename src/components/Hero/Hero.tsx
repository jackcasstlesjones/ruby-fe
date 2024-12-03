import { LiaLinkedinIn } from "react-icons/lia";
import HeroGif from "../../assets/images/hero-gif.gif";
import logoWhite from "../../assets/images/logo-white.png";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { CiLinkedin } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";
import { Link } from "react-router-dom";

const links = [
  { Icon: FaLinkedinIn, href: "https://www.linkedin.com" },
  { Icon: FaInstagram, href: "https://www.instagram.com" },
  { Icon: FaMailBulk, href: "mailto:example@example.com" },
];

export default function Hero() {
  return (
    <>
      <div className="relative h-screen overflow-hidden">
        <img
          className="absolute inset-0 w-auto h-full object-cover"
          src={HeroGif}
          alt="Hero"
        />
        <img
          src={logoWhite}
          alt=""
          className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-9/12"
        />
        <div className="flex justify-between absolute -translate-x-1/2 -translate-y-1/2 top-2/3 left-1/2 w-36 text-center">
          {links.map(({ Icon, href }, index) => (
            <Link
              key={index}
              to={href}
              className="text-red-500 p-3 bg-white flex justify-center items-center rounded-full"
            >
              <Icon className="w-4 h-4" />
            </Link>
          ))}
        </div>
        <div className="flex justify-center absolute bottom-5 w-full">
          <ArrowDownIcon className="h-10 m-auto text-white animate-bounce" />
        </div>
      </div>
      <h1>he</h1>
    </>
  );
}

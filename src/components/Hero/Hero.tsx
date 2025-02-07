import HeroGif from "../../assets/images/hero-gif.gif";
import logoWhite from "../../assets/images/logo-white.png";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const links = [
  { Icon: FaLinkedinIn, href: "https://www.linkedin.com" },
  { Icon: FaInstagram, href: "https://www.instagram.com" },
  { Icon: EnvelopeIcon, href: "mailto:example@example.com" },
];

export default function Hero() {
  return (
    <>
      <Parallax pages={2} style={{ top: "0", left: "0" }}>
        <div className="relative h-screen overflow-hidden">
          <img
            className="absolute inset-0 w-auto h-full object-cover"
            src={HeroGif}
            alt="Hero"
          />
          <ParallaxLayer offset={0} speed={1}>
            <img
              src={logoWhite}
              alt=""
              className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-9/12"
            />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.2}>
            <div className="flex justify-between absolute -translate-x-1/2 -translate-y-1/2 top-2/3 left-1/2 w-36 text-center">
              {links.map(({ Icon, href }, index) => (
                <Link
                  key={index}
                  to={href}
                  className="text-red-500 p-3 bg-white flex justify-center items-center rounded-full hover:bg-gray-200"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </ParallaxLayer>
          <div className="flex justify-center absolute bottom-5 w-full">
            <ArrowDownIcon className="h-10 m-auto text-white animate-bounce" />
          </div>
        </div>
      </Parallax>
    </>
  );
}

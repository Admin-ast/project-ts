/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import Section from "../Section";
import { useEffect, useState } from "react";
import LoginModal from "../LoginModal";
import { toast } from "react-toastify";
import PopoverComp from "../common/Popover";
import TemporaryDrawer from "../common/Drawer";
// @ts-ignore
import Cookies from "js-cookie";
import NavMobileData from "../NavMobileData";
import { useRouter } from "next/router";
import { FaBars } from "react-icons/fa";
type Props = {};

type Links = {
  name: string;
  url: string;
};

const links: Links[] = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Chat With Astrologer",
    url: "/chat-with-astrologer",
  },
  {
    name: "Talk To Astrologer",
    url: "/talk-to-astrologer",
  },
  {
    name: "Live Astrologer",
    url: "/live-astrologer",
  },
  {
    name: "Daily Horoscope",
    url: "/horoscope/daily-horoscope",
  },
  {
    name: "Live Video Chat",
    url: "/live-video-chat",
  },
  {
    name: "Free Kundli",
    url: "/free-kundli",
  },
  {
    name: "Kundli Matching",
    url: "/kundli-matching",
  },
  {
    name: "Panchang",
    url: "/today-panchang",
  },
  {
    name: "Shubh Muhurat",
    url: "/muhurat",
  },
  {
    name: "Compatibility",
    url: "/compatibility",
  },
  {
    name: "Astro store-Shop",
    url: "/shop/shop",
  },
  {
    name: "Blog",
    url: "/blog",
  },
  {
    name: "AstrosevaTalk",
    url: "",
  },
  {
    name: "Zodiac sign",
    url: "",
  },
];

function Navbar({}: Props) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    const refreshToken = Cookies.get("refreshToken");
    if (accessToken && refreshToken) {
      setIsLogged(true);
    }
  }, []);
  const handleLogout = () => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    toast.success("Logout successfully");
    setIsLogged(false);
  };
  return (
    <>
      {isOpen && (
        <LoginModal
          setIsLogged={setIsLogged}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}

      <div className="sticky top-0 z-10 w-full bg-[url('/assets/navbar-bg.webp')]">
        <Section>
          <div className="flex items-center justify-between py-2 px-2">
            <div className="block cursor-pointer text-[25px] text-[white] md:hidden">
              <TemporaryDrawer
                content={<NavMobileData />}
                anchor="left"
                button={<FaBars />}
              />
            </div>

            <div className="">
              <Link href="/" className="text-2xl font-black text-white">
                <div className="flex items-center justify-center md:justify-start">
                  <div className="w-[15%]">
                    <Image
                      src="/assets/main-logo.svg"
                      alt="logo"
                      width={337}
                      height={348}
                      loading={"eager"}
                    />
                  </div>
                  <p>AstroSevaTalk</p>
                </div>{" "}
              </Link>
            </div>

            <div className="mx-auto hidden  flex-wrap items-center  space-x-[16px] space-y-1 lg:flex">
              {links.map((item: Links, index) => (
                <Link key={index} href={item?.url}>
                  <p
                    className={`cursor-pointer text-[16px] font-bold text-white ${
                      router.pathname === item.url
                        ? "underline decoration-[#B62022] underline-offset-8"
                        : ""
                    }`}
                  >
                    {item.name}
                  </p>
                </Link>
              ))}
            </div>

            <div className=" flex items-center space-x-[27px] text-base font-bold text-white">
              {/* <div className="hidden items-center gap-4 md:flex">
                <p>AstrosevaTalk+</p>
                <p className="">ZodiacSign</p>
              </div> */}
              {!isLogged ? (
                <button
                  onClick={() => {
                    setIsOpen(true);
                  }}
                >
                  Login
                </button>
              ) : (
                <PopoverComp
                  button={
                    <Image
                      src="/assets/home/user.png"
                      alt={"chat-icon"}
                      width={40}
                      height={40}
                      loading={"lazy"}
                      className="w-full object-contain"
                    />
                  }
                  content={
                    <div className="flex flex-col gap-2 whitespace-nowrap px-5 py-5 text-left font-normal text-[black]">
                      <div className="cursor-pointer">Edit Profile</div>
                      <div onClick={handleLogout} className="cursor-pointer">
                        Logout
                      </div>
                    </div>
                  }
                />
              )}
              {/* onClick={handleLogout} */}
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}

export default Navbar;

"use client";
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
import { FaBars, FaUserAlt } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartDrawer from "../shop/minicart/CartDrawer";
import MainPage from "../shop/minicart/MainPage";
import { usePathname } from 'next/navigation';
import { useCart } from '@/components/shop/context/ShopContext';
import { useAuth } from "../contexts/AuthProvider";
import { useRouter } from "next/navigation";
declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: {
      translate: {
        TranslateElement: any; // Replace 'any' with a more specific type if available
      };
    };
  }
}
type Props = {};

type Links = {
  name: string;
  url: string;
  googleTranslateElementInit: () => void;
};

function Navbar({}: Props) {
  const router = useRouter();
  const { isOpen, setIsOpen, isLogged, setIsLogged } = useCart(); 
  const { isuserLogged, setuserIsLogged } = useAuth();
   const [horoScopeOpen, setHoroScopeOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const pathname = usePathname();

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
    setuserIsLogged(true);
  };

  const toggleHoroscope = () => {
    setHoroScopeOpen((prev) => !prev);
  };
  const toggleLanguage = () => {
    setLanguageOpen((prev) => !prev);
  };
  const toggleLogin = () => {
    setIsLogged((prev) => !prev);
  };

  const GoogleTranslateComponent = () => {
    useEffect(() => {
      const checkIfScriptExists = document.getElementById(
        "google-translate-script"
      );
      if (checkIfScriptExists === null) {
        const googleTranslateScript = document.createElement("script");
        googleTranslateScript.id = "google-translate-script";
        googleTranslateScript.src =
          "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        googleTranslateScript.async = true;

        window.googleTranslateElementInit = () => {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en", // Change this to set the default language
              includedLanguages: "ta,bn,ml,hi,en", // Limit translation to Tamil, Bengali, Malayalam, Hindi, English
              autoDisplay: false,
            },
            "google_translate_element"
          );
        };

        document.body.appendChild(googleTranslateScript);
      }
    }, []);

    return <div id="google_translate_element"></div>;
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

      <div className="sticky top-0 z-10 w-full bg-white shadow-xl ">
        <Section>
          <div className="flex items-center  py-2 px-2">
            <div className="block cursor-pointer text-[16px] lg:hidden">
              <TemporaryDrawer
                content={<NavMobileData />}
                anchor="left"
                button={<FaBars />}
              />
            </div>

            <div className="">
              <Link href="/" className="text-2xl ">
                <div className="flex items-center justify-center gap-[7px] md:justify-start">
                  <div className="w-[15%]">
                    <Image
                      src="/assets/home/logo.png"
                      alt="logo"
                      width={150}
                      height={51}
                      loading={"eager"}
                      className="md:w-[200px] "
                    />
                  </div>
                  <p className="font-[ Roboto] text-[30px] font-[600]">
                    AstroSevaTalk
                  </p>
                </div>{" "}
              </Link>
            </div>

            <div className="w-full ">
              <div className="mt-[10px] hidden justify-end gap-x-5 text-[17px]  lg:flex">
              {isuserLogged ? 
                <Link href="/free-kundli">Free Kundli</Link>
                :<Link href="#" onClick={() => {
                  setIsOpen(true);
                }}>Free Kundli</Link>
              }
              {isuserLogged ?
                <Link href="/kundli-matching">Kundli Matching</Link>
                : <Link href="#"  onClick={() => {
                  setIsOpen(true);
                }}>Kundli Matching</Link>
                }
                {/* <Link href="live-astrologer/live-astrologer">
                  Live Astrologers
                </Link> */}
                {/* <Link href="/horoscope/today">Horoscope</Link> */}

                <ul className="">
                  <li className="">
                    <button className="flex    " onClick={toggleHoroscope}>
                      <span className="">Horoscope</span>
                      <span className={horoScopeOpen ? " transform" : ""}>
                        &#9662;
                      </span>
                    </button>
                    {horoScopeOpen && (
                      <ul className="">
                        <div className="relative  z-10 px-2 shadow-xl">
                          <div className="absolute right-[-25px] top-[10px] rounded-[20px] bg-white lg:w-[300px]">
                            <div className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[16px] hover:bg-[#DC6563]">
                              <li onClick={toggleHoroscope}>
                                <Link href="/horoscope/yearly">
                                  Horoscope 2023
                                </Link>
                              </li>
                            </div>

                            <li
                              onClick={toggleHoroscope}
                              className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[16px] hover:bg-[#DC6563]"
                            >
                              <Link href="/horoscope/daily">Today's Horoscope</Link>
                            </li>

                            <li
                              onClick={toggleHoroscope}
                              className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[16px] hover:bg-[#DC6563]"
                            >
                              <Link href="/horoscope/daily">
                                Weekly Horoscope
                              </Link>
                            </li>
                            <li
                              onClick={toggleHoroscope}
                              className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[16px] hover:bg-[#DC6563]"
                            >
                              <Link href="/horoscope/monthly">
                                Monthly Horoscope
                              </Link>
                            </li>
                            <li
                              onClick={toggleHoroscope}
                              className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[16px] hover:bg-[#DC6563]"
                            >
                              <Link href="/horoscope/yearly">
                                Yearly Horoscope
                              </Link>
                            </li>
                            <li
                              onClick={toggleHoroscope}
                              className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[16px] hover:bg-[#DC6563]flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[16px] hover:bg-[#DC6563]"
                            >
                              <Link href="/horoscope/daily">
                                Daily Horoscope
                              </Link>
                            </li>
                            <li
                              onClick={toggleHoroscope}
                              className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[16px] hover:bg-[#DC6563]"
                            >
                              <Link href="/horoscope/tomorrow">
                                {`Tomorrow's Horoscope`}
                              </Link>
                            </li>
                            <li
                              onClick={toggleHoroscope}
                              className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[16px] hover:bg-[#DC6563]"
                            >
                              <Link href="/horoscope/yesterday">
                                {`Yesterday's Horoscope`}
                              </Link>
                            </li>
                            <li
                              onClick={toggleHoroscope}
                              className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[16px] hover:bg-[#DC6563]"
                            >
                              <Link href="/chines-horoscope">
                                {`Chinese Horoscope`}
                              </Link>
                            </li>
                          </div>
                        </div>
                      </ul>
                    )}
                  </li>
                </ul>
                <ul className="">
                <GoogleTranslateComponent />
                </ul>

                {/* <Link href="/muhurat">Shubh Muhurat</Link> */}

                <div className=" flex   text-base  ">
                  {!isLogged ? (
                    <button
                      onClick={() => {
                        setIsOpen(true);
                      }}
                    >
                      {/* <div className="flex rounded-[17px] bg-[#DC6563] transform hover:translate-y-[-5px] transition-transform duration-300 ease-out px-2 py-[4px] text-white"> */}
                      <div className="flex transform gap-2 rounded-[17px] bg-[#DC6563]  px-3 text-[16px] text-white transition-transform duration-300 ease-out hover:translate-y-[-5px] hover:bg-[#DC6563]">
                        <div className="flex items-center  py-2  ">
                          <FaUserAlt />
                          {/* <Image
                        src="/assets/home/user-icon.png"
                        alt={"chat-icon"}
                        width={20}
                        height={15}
                        loading={"lazy"}
                        className="w-full object-contain "
                      /> */}
                        </div>
                        <p className="flex items-center">Login</p>
                      </div>
                    </button>
                  ) : (
                    <PopoverComp
                        button={<Image
                          src="/assets/home/user.svg"
                          alt={"chat-icon"}
                          width={30}
                          height={40}
                          loading={"lazy"}
                          className="w-full rounded-full border-[1px] border-[#DC6563] object-contain" />}
                        content={<div className="flex flex-col gap-2 whitespace-nowrap px-5 py-5 text-left font-normal text-[black] ">
                          <Link href="/notification">
                            <div className="cursor-pointer">Notificaton</div>
                          </Link>
                          <Link href="/">
                            <div className="cursor-pointer">
                              Wallet Transactions
                            </div>
                          </Link>
                          <Link href="/astrologeradmin/astrosevatalkhistory">
                            <div className="cursor-pointer">Order History</div>
                          </Link>
                          <Link href="/astrologeradmin/customersupport">
                            <div className="cursor-pointer">
                              Customer Support Chat
                            </div>
                          </Link>

                          <div
                            onClick={handleLogout}
                            className="cursor-pointer"
                          >
                            Logout
                          </div>
                          <Link href="/notification">
                            <div className="cursor-pointer">
                              Logout From Other Devices
                            </div>
                          </Link>
                        </div>}                     />
                  )}

                  <div className="mt-2">{/* <MainPage /> */}</div>
                </div>
              </div>
              <div className="  mt-[10px] mb-[10px] hidden justify-end gap-x-8 text-[17px]  lg:flex  ">
                <Link href="/chat-with-astrologer">
                  Chat with Astrologer
                </Link>
                <Link href="/talk-to-astrologer">
                  Talk to Astrologer
                </Link>
                <Link href="/shop/shop">Astroseva Shop</Link>
                {/* <Link href="/astrosevatalk">AstrosevaTalk +</Link> */}
                <Link href="/book-a-pooja/book-pooja">Book a Pooja</Link>
                <Link href="/blog">Blog</Link>
                {/* <Link href="/zodic-sign">Zodiac sign</Link> */}
              </div>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}

export default Navbar;

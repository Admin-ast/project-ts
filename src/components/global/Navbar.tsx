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
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartDrawer from "../shop/minicart/CartDrawer";
import MainPage from "../shop/minicart/MainPage";
type Props = {};

type Links = {
  name: string;
  url: string;
};

function Navbar({}: Props) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [horroscopeOpen, setHorroscopeOpen] = useState(false);

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

  const toggleHorroscope = () => {
    setHorroscopeOpen((prev) => !prev);
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
            <div className="block cursor-pointer text-[25px] lg:hidden ">
              <TemporaryDrawer
                content={<NavMobileData />}
                anchor="left"
                button={<FaBars />}
              />
            </div>

            <div className="">
              <Link href="/" className="text-2xl font-black ">
                <div className="flex items-center justify-center gap-[7px] md:justify-start">
                  <div className="w-[15%]">
                    <Image
                      src="/assets/mainlogo.png"
                      alt="logo"
                      width={400}
                      height={300}
                      loading={"eager"}
                    />
                  </div>
                  <p>AstroSevaTalk</p>
                </div>{" "}
              </Link>
            </div>

            <div className="w-full lg:relative">
              <div className=" mt-[38px] hidden gap-[29px] text-[16px] font-bold lg:flex ">
                <Link href="/talk-to-astrologer/talk-to-astrologer">
                  Talk To Astrologer
                </Link>
                <Link href="/chat-with-astrologer/chat-with-astrologer">
                  Chat With Astrologer
                </Link>
                <Link href="/astrosevatalk">AstrosevaTalk +</Link>
                <Link href="/zodic-sign">Zodiac sign</Link>
                <Link href="/shop/shop">Shop</Link>
              </div>
              <div className=" mt-[26px] hidden gap-[20px] text-[16px] font-bold lg:relative lg:right-[130px] lg:flex ">
                <Link href="/free-kundli">Free Kundli</Link>
                <Link href="/kundli-matching">Kundli Matching</Link>
                <Link href="live-astrologer/live-astrologer">
                  Live Astrologers
                </Link>
                {/* <Link href="/horoscope/today">Horoscope</Link> */}

                <ul className="">
                  <li className="">
                    <button className="flex    " onClick={toggleHorroscope}>
                      <span className="">Horoscope</span>
                      <span className={horroscopeOpen ? " transform" : ""}>
                        &#9662;
                      </span>
                    </button>
                    {horroscopeOpen && (
                      <div className="relative  z-10 px-2 shadow-xl">
                        <div className="absolute rounded-[20px] bg-white lg:w-[300px]">
                          <div className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px] hover:bg-[#DC6563]">
                            <Link href="/horoscope/yearly">Horoscope 2023</Link>
                          </div>
                          <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px] hover:bg-[#DC6563]">
                            <Link href="/horoscope/daily">{`Today's Horroscope`}</Link>
                          </li>
                          <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px] hover:bg-[#DC6563]">
                            <Link href="/horoscope/daily">
                              Weekly Horoscope
                            </Link>
                          </li>
                          <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px] hover:bg-[#DC6563]">
                            <Link href="/horoscope/monthly">
                              Monthly Horoscope
                            </Link>
                          </li>
                          <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px] hover:bg-[#DC6563]">
                            <Link href="/horoscope/yearly">
                              Yearly Horoscope
                            </Link>
                          </li>
                          <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px] hover:bg-[#DC6563]">
                            <Link href="/horoscope/daily">Daily Horoscope</Link>
                          </li>
                          <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px] hover:bg-[#DC6563]">
                            <Link href="/horoscope/tomorrow">
                              {`Tomorrow's Horoscope`}
                            </Link>
                          </li>
                          <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px] hover:bg-[#DC6563]">
                            <Link href="/horoscope/yesterday">
                              {`Yesterday's Horoscope`}
                            </Link>
                          </li>
                        </div>
                      </div>
                    )}
                  </li>
                </ul>

                <Link href="/muhurat">Shubh Muhurat</Link>
                <Link href="/muhurat">Book A Pooja</Link>
                <Link href="/blog">Blog</Link>
              </div>
            </div>

            <div className=" flex items-center space-x-[27px] text-base font-bold ">
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

              <div className="mt-2">
                <MainPage />
              </div>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}

export default Navbar;

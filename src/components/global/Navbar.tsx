import Image from "next/image";
import Link from "next/link";
import Section from "../Section";
import { useEffect, useState } from "react";
import LoginModal from "../LoginModal";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

type Props = {};

function Navbar({}: Props) {
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
      <div className="sticky top-0 z-50 w-full bg-[url('/assets/navbar-bg.webp')]">
        <Section>
          <div className="flex items-center justify-center py-2 lg:justify-between">
            <div className="">
              <Link href="/" className="text-2xl font-black text-white">
                <div className="flex items-center space-x-2">
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
            <div className="hidden space-x-[27px] text-base font-bold text-white lg:flex">
              <p>AstrosevaTalk+</p>
              <p className="w-full">ZodiacSign</p>
              {!isLogged ? (
                <button
                  onClick={() => {
                    setIsOpen(true);
                  }}
                >
                  Login
                </button>
              ) : (
                <button onClick={handleLogout}>Logout</button>
              )}
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}

export default Navbar;

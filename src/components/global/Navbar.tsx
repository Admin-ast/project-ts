import Image from "next/image";
import Link from "next/link";
import React from "react";
import Section from "../Section";

type Props = {};

function Navbar({}: Props) {
  return (
    <div className="bg-[url('/assets/navbar-bg.png')] sticky top-0 w-full">
      <Section>
        <div className="flex items-center justify-center py-2 lg:justify-between">
          <div className="">
            <Link href="/" className="text-2xl font-black text-white">
              <div className="flex items-center space-x-2">
                <div className="w-[15%]">
                  <Image
                    src="/assets/main-logo.png"
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
            <p>Login</p>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Navbar;

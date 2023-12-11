import React from "react";
import Image from "next/image";
import Section from "@/components/Section";
import { BsDot } from "react-icons/bs";
import Link from "next/link";
import Astrologer from "../home/Astrologer";
import BlogsBy from "./BlogsBy";
import RelatedBlogs from "./RelatedBlogs";
import RecentBlogs from "./RecentBlogs";
import OurAstrologer from "./OurAstrologer";
import Missing from "../home/Missing";
type Props = {};

const BlogStatic = (props: Props) => {
  return (
    <div className="">
      {/* ----------------------------------Missing spark in marriage--------------------------------------------------------  */}

      <div className="md:pl-10 lg:pl-10">
        <div className=" mt-[35px]  flex h-[189px] bg-gradient-to-b from-[#ef824c]  to-[#d84f50]  ">
          <div className="mt-5 w-3/4 px-5 ">
            <div className="px-2  text-white">
              <p className="  text-3xl    font-bold ">
                Missing Spark In Marriage?
              </p>
              <p className=" mt-[10px] pl-[50px] text-base">
                Get solutions from astrologers
              </p>
              <div className="mt-[10px] lg:mt-[25px]">
                <Link href="/chat-with-astrologer/chat-with-astrologer">
                  <button className="rounded-[10px] bg-white px-2 text-base font-semibold text-black md:py-2 lg:mb-[24px] lg:py-3 lg:px-10  ">
                    First Chat Free
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className=" w-1/4 bg-white ">
            <img
              src="/assets/blog/bloggirl.png"
              alt="girl"
              className="h-[189px]"
            />
          </div>
        </div>
      </div>

      {/* -------------------------MANGAL DOSH___________________________________________________________________ */}

      <div className="mt-[30px] px-10 ">
        <div className=" ">
          <p className="mt-[35px] text-center  text-3xl font-bold">
            What creates Mangal Dosha in Kundli?
          </p>
        </div>
        <div className="mt-[30px] ">
          <p className=" text-justify text-base">
            In Vedic astrology, Mangal Dosha happens by the placement of Mars in
            certain positions in a person’s birth chart. This dosha can have
            negative effects on the marital life of the person, leading to
            conflicts, misunderstandings, and even divorce. Here are some common
            planetary combinations that can result in Mangal Dosha:
          </p>
        </div>

        <div className=" mt-2 text-justify">
          <li>
            Mars in the 1st, 4th, 7th, 8th, or 12th house of the horoscope.
          </li>
          <li>
            Mars in the 1st, 4th, 7th, 8th, or 12th house of the horoscope.
          </li>
          <li>
            Mars in the 1st, 4th, 7th, 8th, or 12th house of the horoscope.
          </li>
          <li>
            Mars in the 1st, 4th, 7th, 8th, or 12th house of the horoscope.
          </li>
          <li>
            Mars in the 1st, 4th, 7th, 8th, or 12th house of the horoscope.
          </li>
          <li>
            Mars in the 1st, 4th, 7th, 8th, or 12th house of the horoscope.
          </li>
          <li>
            Mars in the 1st, 4th, 7th, 8th, or 12th house of the horoscope.
          </li>
          <li>
            Mars in the 1st, 4th, 7th, 8th, or 12th house of the horoscope.
          </li>
          <li>
            Mars in the 1st, 4th, 7th, 8th, or 12th house of the horoscope.
          </li>
        </div>
        <div className=" ">
          <p className="mt-[10px] text-justify text-base">
            If a person has any of the above combinations in their birth chart,
            they have the Mangal Dosha. However, the intensity of this dosha can
            vary depending on the placement of other planets and the overall
            strength of the horoscope. The presence of Mangal Dosha in a girl’s
            horoscope can result in problems. These problems can include delays
            in marriage, frequent quarrels, and even separation or divorce.
            Therefore, it is essential to take measures to mitigate its effects
            before marrying.
          </p>
        </div>

        <div className="lg:flex">
          <p className="mt-[10px] text-justify text-base">
            Some remedies to reduce the negative effects of Mangal Dosha include
            performing puja and homa for Lord Hanuman or Lord Kartikeya,
            reciting mantras such as Mangal Beej Mantra, wearing a specific
            gemstone such as coral, and observing fasts on Tuesdays. Astrology
            recommends the matching of the horoscope of the girl with a boy who
            also has Mangal Dosha or with a boy whose horoscope has a strong
            Mars.
          </p>
        </div>
      </div>

      {/* --------------------------Effect of mangal dosh on marriage-------------------------------------------------- */}

      <div className="mt-[30px] px-10 ">
        <div className="  ">
          <p className="text-3xl font-bold  ">
            Effects of Mangal Dosha on marriage
          </p>
        </div>
        <div>
          <p className=" mt-5 text-justify text-base">
            Mangal Dosha has many impacts on the lives of women. Here are eight
            potential effects that can occur after marriage:
          </p>
        </div>

        <div className="text-justify ">
          <p className=" text-xl font-bold">Effects of Kuja Dosha on female</p>
          <li>Delay in marriage or difficulty finding a suitable partner</li>
          <li>Unhappiness and conflicts in marital life</li>
          <li>Increased chances of marital discord and separation</li>
          <li>
            Health issues, particularly related to the reproductive system
          </li>
          <li>Lack of harmony and also understanding with the partner</li>
          <li>Financial difficulties and losses</li>
          <li>Strained relationships with in-laws and other family members</li>
          <li>
            Moreover, the possibility of widowhood or being a single parent.
          </li>
        </div>
        <div>
          <p className="mt-[10px]  text-base">
            Here are some impacts of the Mangal Dosha on the marital life of
            men:
          </p>
        </div>

        <div className="text-justify ">
          <p className=" text-xl font-bold">Effects of Kuja Dosha on Male</p>
          <li>Delay in marriage or difficulty finding a suitable partner</li>
          <li>Unhappiness and conflicts in marital life</li>
          <li>Increased chances of marital discord and separation</li>
          <li>
            Health issues, particularly related to the reproductive system
          </li>
          <li>Lack of harmony and also understanding with the partner</li>
          <li>Financial difficulties and losses</li>
          <li>Strained relationships with in-laws and other family members</li>
          <li>
            Moreover, the possibility of widowhood or being a single parent.
          </li>
        </div>
      </div>

      {/* ----------------------------Effects of Mangal Dosha on marriage---------------------------------- */}

      <div className="mt-[30px] px-10 ">
        <div className=" ">
          <p className="text-center text-3xl font-bold ">
            Effects of Mangal Dosha on marriage
          </p>
        </div>
        <div className=" mt-[20px] text-justify text-base ">
          <p className="">
            In Vedic astrology, Mangal dosha is a crucial factor in horoscope
            matching before marriage. The placement of Mars or Mangal in certain
            houses in a person’s birth chart can cause the Mangal dosha. If a
            person has Mangal dosha in their horoscope, they are called Manglik.
            Mangal dosha is of utmost importance in horoscope matching. If a
            Manglik person marries a non-Manglik person, it can lead to
            conflicts, misunderstandings, and even separation or divorce. The
            placement of Mars in the first, second, fourth, seventh, eighth, or
            twelfth house of a person’s horoscope can cause the Mangal dosha.
            When a Manglik person marries a non-Manglik person, the non-Manglik
            person will have the negative energy of Mars, leading to conflicts
            and problems in the marriage. However, it is important to note that
            not all Manglik persons experience negative effects in their
            marriage. The severity of the dosha depends on the placement of Mars
            and other factors in the horoscope, as well as the remedies
            performed to mitigate its effects. To avoid the negative effects of
            Mangal dosha, it is important to match the horoscopes of prospective
            partners before marriage. If both partners are Manglik, the negative
            effects of Mangal dosha can cancel. Additionally, certain remedies
            such as reciting mantras, wearing specific gemstones, performing
            pujas, and conducting other rituals reduce the negative effects of
            Mangal dosha.
          </p>
        </div>
      </div>

      {/* -------------------------------How to know if my Manglik Dosha is canceled?=================================== */}

      <div className="mt-[30px] px-10 ">
        <div className="">
          <p className="text-center text-3xl font-bold ">
            How to know if my Manglik Dosha is canceled?
          </p>
        </div>
        <div className=" mt-[20px]">
          <p className="text-justify text-base">
            In Vedic astrology, Mangal Dosha or Manglik Dosha is a planetary
            condition that can affect a person’s married life. It occurs when
            Mars (Mangal) is located in the first, second, fourth, seventh,
            eighth, or twelfth house of a person’s horoscope. The effects of
            Mangal Dosha can be reduced or nullified by specific astrological
            remedies or by finding a partner with the same condition. Here are
            some ways to determine if your Mangal Dosha is canceled:
          </p>

          <div className="mt-2 flex">
            {/* <BsDot className="text-[40px] mb-[20px]" /> */}
            <li></li>
            <p className="text-justify text-base">
              <span className="font-bold">Check your horoscope:</span> To
              determine whether Mangal Dosha is present in your horoscope, you
              need to check whether Mars is there in the houses. If Mars is
              present in the above-mentioned houses, then you have Mangal Dosha.
            </p>
          </div>
          <div className="mt-2 flex">
            {/* <BsDot className="text-[20px]" /> */}
            <li></li>
            <p className="text-justify text-base">
              <span className="font-bold">Check your horoscope:</span> To
              determine whether Mangal Dosha is present in your horoscope, you
              need to check whether Mars is there in the houses. If Mars is
              present in the above-mentioned houses, then you have Mangal Dosha.
            </p>
          </div>
          <div className="mt-2 flex">
            {/* <BsDot className="text-[20px]" /> */}
            <li></li>
            <p className="text-justify text-base">
              <span className="font-bold">Check your horoscope:</span> To
              determine whether Mangal Dosha is present in your horoscope, you
              need to check whether Mars is there in the houses. If Mars is
              present in the above-mentioned houses, then you have Mangal Dosha.
            </p>
          </div>
          <div className="mt-2 flex">
            {/* <BsDot className="text-[20px]" /> */}
            <li></li>
            <p className="text-justify text-base">
              <span className="font-bold">Check your horoscope:</span> To
              determine whether Mangal Dosha is present in your horoscope, you
              need to check whether Mars is there in the houses. If Mars is
              present in the above-mentioned houses, then you have Mangal Dosha.
            </p>
          </div>
          <div className="mt-2 flex">
            <li></li>

            <p className="text-justify text-base">
              <span className="font-bold">Check your horoscope:</span> To
              determine whether Mangal Dosha is present in your horoscope, you
              need to check whether Mars is there in the houses. If Mars is
              present in the above-mentioned houses, then you have Mangal Dosha.
            </p>
          </div>
          <div className="mt-2 flex">
            <li></li>

            <p className="text-justify text-base">
              <span className="font-bold">Check your horoscope:</span> To
              determine whether Mangal Dosha is present in your horoscope, you
              need to check whether Mars is there in the houses. If Mars is
              present in the above-mentioned houses, then you have Mangal Dosha.
            </p>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------Can a Manglik girl marry a non-Manglik boy?----------------------- */}

      <div className="mt-[30px] px-10">
        <div className="">
          <p className="text-center text-3xl font-bold">
            Can a Manglik girl marry a non-Manglik boy?
          </p>
        </div>
        <div className=" mt-[30px]">
          <p className="text-justify text-base">
            In Vedic astrology, a Manglik girl can marry a non-Manglik boy, but
            this union may result in negative effects on their life. The Manglik
            Dosha in the girl’s horoscope can cause disagreements, discord, and
            even separation in the marriage. To avoid these negative effects,
            the girl should perform specific remedies before marrying.
            Ultimately, the decision to marry a non-Manglik boy lies with the
            girl and her family. They should carefully consider all aspects
            before making a decision.
          </p>
        </div>
      </div>

      {/* --------------------------------------Problems in Marriage---------------------------------------------------------- */}
      <div className="md:pl-5 lg:px-10">
        <div className=" mt-[30px] flex h-[189px] justify-between  bg-gradient-to-b from-[#ef824c] to-[#d84f50] ">
          <div className="mt-5 px-[33px] text-white ">
            <p className="  font-bold lg:text-[30px] ">Problems in Marriage?</p>
            <p className=" mt-[11px] text-base">
              Get solutions from astrologers
            </p>
            <div className="mt-[10px] lg:mt-[25px]">
              <Link href="/chat-with-astrologer/chat-with-astrologer">
                <button className="rounded-[10px] bg-white px-2 py-3 text-base font-semibold text-black lg:mb-[24px] lg:px-10  ">
                  First Chat Free
                </button>
              </Link>
            </div>
          </div>
          <div className=" bg-white shadow-xl  ">
            <Image
              src="/assets/blog/raashi.png"
              alt="raashi"
              width={184}
              height={187}
              loading={"lazy"}
              className=" relative right-[60px] top-2 h-full w-full md:right-[90px] lg:right-[90px]"
            />
          </div>
        </div>
      </div>

      {/* --------------------------------Remedies for Mangal Dosha------------------------------------------------------ */}

      <div className="py-[30px] px-10">
        <div className=" ">
          <p className="text-center text-3xl font-bold">
            Remedies for Mangal Dosha
          </p>
        </div>
        <div className=" mt-[20px]">
          <p className="text-justify text-base">
            Mangal Dosha is believed to cause problems and conflicts in married
            life, and therefore, it is essential to perform some remedies to
            mitigate its effects. Here are ten effective remedies for Mangal
            Dosha:
          </p>

          <div className="mt-2 flex">
            <li></li>

            <p className="text-justify text-base">
              <span className="font-bold">Kumbh Vivah:</span> To This is a
              ritual where a Manglik girl is married to a banana tree or an idol
              of Lord Vishnu before her actual marriage. This can cancel the
              Mangal Dosha.
            </p>
          </div>
          <div className="mt-2 flex">
            <li></li>

            <p className="text-justify text-base">
              <span className="font-bold">Kumbh Vivah:</span> To This is a
              ritual where a Manglik girl is married to a banana tree or an idol
              of Lord Vishnu before her actual marriage. This can cancel the
              Mangal Dosha.
            </p>
          </div>
          <div className="mt-2 flex">
            <li></li>
            <p className="text-justify text-base">
              <span className="font-bold">Kumbh Vivah:</span> To This is a
              ritual where a Manglik girl is married to a banana tree or an idol
              of Lord Vishnu before her actual marriage. This can cancel the
              Mangal Dosha.
            </p>
          </div>
          <div className="mt-2 flex">
            <li></li>

            <p className="text-justify text-base">
              <span className="font-bold">Kumbh Vivah:</span> To This is a
              ritual where a Manglik girl is married to a banana tree or an idol
              of Lord Vishnu before her actual marriage. This can cancel the
              Mangal Dosha.
            </p>
          </div>
          <div className="mt-2 flex">
            <li></li>

            <p className="text-justify text-base">
              <span className="font-bold">Kumbh Vivah:</span> To This is a
              ritual where a Manglik girl is married to a banana tree or an idol
              of Lord Vishnu before her actual marriage. This can cancel the
              Mangal Dosha.
            </p>
          </div>
          <div className="mt-2 flex">
            <li></li>

            <p className="text-justify text-base">
              <span className="font-bold">Kumbh Vivah:</span> To This is a
              ritual where a Manglik girl is married to a banana tree or an idol
              of Lord Vishnu before her actual marriage. This can cancel the
              Mangal Dosha.
            </p>
          </div>
          <div className="mt-2 flex">
            <li></li>

            <p className="text-justify text-base">
              <span className="font-bold">Kumbh Vivah:</span> To This is a
              ritual where a Manglik girl is married to a banana tree or an idol
              of Lord Vishnu before her actual marriage. This can cancel the
              Mangal Dosha.
            </p>
          </div>
          <p className="mt-2">
            <Link href="/" className="font-bold underline ">
              Talk to an astrologer
            </Link>{" "}
            to know if you can marry a Manglik person or not
          </p>
        </div>
      </div>

      {/* ---------------------------------Connect with astrologer------------------------------------------------------------ */}

      {/* <div className=" bg-white py-[18px] shadow-xl ">
        <div className=" ">
          <p className="text-center font-[georgia] text-xl font-bold  ">
            Connect with an Astrologer on Call or Chat for more personalised
            detailed predictions.
          </p>
        </div>
        <div className="mt-[30px]  mb-5 flex justify-center md:gap-5 lg:gap-10 ">
          <div className="w-[190px] rounded-[20px] border-[4px] border-[#DC6563] bg-white shadow-xl ">
            <div className="">
              <Image
                src="/assets/home/icon-01.png"
                alt="chatIcon"
                width={100}
                height={80}
                className="m-auto"
              />
              <p className="text-center font-bold ">Chat with Astrologer</p>
            </div>
          </div>
          <div className="w-[190px] rounded-[20px] border-[4px] border-[#DC6563] bg-white shadow-xl">
            <div className="">
              <Image
                src="/assets/home/icon-02.png"
                alt="callIcon"
                width={100}
                height={80}
                className="m-auto"
              />
              <p className=" w-[171px] text-center text-[16px] font-bold ">
                Talk to Astrologer
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div className=""></div>
    </div>
  );
};

export default BlogStatic;

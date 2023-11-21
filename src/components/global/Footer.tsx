// import React, { Key, ReactElement } from "react";

// import Link from "next/link";
// import {
//   FaFacebook,
//   FaInstagram,
//   FaTwitter,
//   FaPinterest,
//   FaLinkedin,
//   FaYoutube,
// } from "react-icons/fa";

// import { SiPrivateinternetaccess } from "react-icons/si";
// import { RiSecurePaymentFill } from "react-icons/ri";
// import { GoVerified } from "react-icons/go";

// import Section from "../Section";

// type Props = {};

// type Corporate = {
//   id: number;
//   title: string;
//   url: string;
// };

// type ImportantLinks = {
//   id: number;
//   title: string;
//   url: string;
// };

// type ImportantLinks2 = {
//   id: number;
//   title: string;
//   url: string;
// };
// type ImportantLinks3 = {
//   id: number;
//   title: string;
//   url: string;
// };

// type ImportantLinks4 = {
//   id: number;
//   title: string;
//   url: string;
// };

// type Social = {
//   icon: ReactElement;
//   url: string;
//   label: string;
// };

// const corporate: Corporate[] = [
//   {
//     id: 1,
//     title: "Refund & Cancellation Policy",
//     url: "/corporate-info/refund",
//   },
//   {
//     id: 2,
//     title: "Terms & Conditions",
//     url: "/corporate-info/terms",
//   },
//   {
//     id: 3,
//     title: " Privacy Policy",
//     url: "/corporate-info/privacy",
//   },
//   {
//     id: 4,
//     title: " About Us",
//     url: "/corporate-info/about",
//   },
//   {
//     id: 5,
//     title: "Disclaimer",
//     url: "/corporate-info/disclaimer",
//   },
//   {
//     id: 6,
//     title: "Pricing Policy",
//     url: "/corporate-info/pricing-policy",
//   },
// ];

// const importantLinks: ImportantLinks[] = [
//   {
//     id: 1,
//     title: "Home",
//     url: "/",
//   },
//   {
//     id: 2,
//     title: "panchang",
//     url: "/today-panchang",
//   },
//   {
//     id: 3,
//     title: "Live Astrologer",
//     url: "/live-astrologer/live-astrologer",
//   },
//   {
//     id: 4,
//     title: "Chat With Astrologer",
//     url: "/chat-with-astrologer/chat-with-astrologer",
//   },
//   {
//     id: 5,
//     title: "Talk With Astrologer",
//     url: "/talk-to-astrologer/talk-to-astrologer",
//   },
//   {
//     id: 6,
//     title: "Astrologer Signup",
//     url: "/signup",
//   },
//   {
//     id: 7,
//     title: "Solar eclipse",
//     url: "/footer/solareclipse",
//   },
//   {
//     id: 8,
//     title: "Daily Horoscope",
//     url: "/horoscope/daily",
//   },
//   {
//     id: 9,
//     title: "Live Video Chat",
//     url: "/live-video-chat",
//   },
//   {
//     id: 10,
//     title: "Free Kundli",
//     url: "/free-kundli",
//   },
//   {
//     id: 11,
//     title: "Kundli Matching",
//     url: "/kundli-matching",
//   },
//   {
//     id: 12,
//     title: "Shubh Muhurat",
//     url: "/muhurat",
//   },
//   {
//     id: 13,
//     title: "Namakaran Muhurat",
//     url: "/footer/namakaranmuhurat",
//   },
//   {
//     id: 14,
//     title: "Zodiac signs",
//     url: "/zodic-sign",
//   },
//   {
//     id: 15,
//     title: "Planets",
//     url: "/planet",
//   },
//   {
//     id: 16,
//     title: "Chinese Horoscope",
//     url: "/chines-horoscope",
//   },
//   {
//     id: 17,
//     title: "Love problem",
//     url: "/love-problem",
//   },
//   {
//     id: 18,
//     title: "Festival calendar",
//     url: "/festival-calender",
//   },
//   {
//     id: 19,
//     title: "Marriage problem",
//     url: "/marriage-problem",
//   },
//   {
//     id: 20,
//     title: "Mole astrology",
//     url: "/mole-astrology",
//   },
//   {
//     id: 21,
//     title: "Horary chart peridiction",
//     url: "/horary-chart-peridiction",
//   },
// ];

// const importantLinks2: ImportantLinks2[] = [
//   {
//     id: 1,
//     title: "Astro Reviews",
//     url: "/astro-reviews",
//   },
//   {
//     id: 2,
//     title: "Kaal Sarp Dosha",
//     url: "/footer/kaal-sarp-dosha",
//   },
//   {
//     id: 3,
//     title: "Pitra Dosha",
//     url: "/footer/pitra-dosha",
//   },
//   {
//     id: 4,
//     title: "Mangla Dosha",
//     url: "/footer/mangla-dosha",
//   },
//   {
//     id: 5,
//     title: "Shani sade shati dosha",
//     url: "/footer/shani-sade-shati-dosha",
//   },
//   {
//     id: 6,
//     title: "Child Astrology",
//     url: "/footer/child-astrology",
//   },
//   {
//     id: 7,
//     title: "Child education",
//     url: "/footer/child-education",
//   },
//   {
//     id: 8,
//     title: "Luck gem stones",
//     url: "/footer/luck-gem-stones",
//   },
//   {
//     id: 9,
//     title: "27 Nakshatra",
//     url: "/footer/nakshatra",
//   },
//   {
//     id: 10,
//     title: "Numerology",
//     url: "/numerology",
//   },
//   {
//     id: 11,
//     title: "Mantras",
//     url: "/mantras",
//   },
//   {
//     id: 12,
//     title: "Job promotion",
//     url: "/job-promotion",
//   },
//   {
//     id: 13,
//     title: "Astro store-Shop",
//     url: "/shop/shop",
//   },
//   {
//     id: 14,
//     title: "Web stories",
//     url: "/web-stories",
//   },
//   {
//     id: 15,
//     title: "Blog",
//     url: "/blog",
//   },
//   {
//     id: 16,
//     title: "Tarot",
//     url: "/tarot",
//   },
//   {
//     id: 17,
//     title: "Collaboration",
//     url: "/collaboration",
//   },
//   {
//     id: 18,
//     title: "Vastu",
//     url: "vastu",
//   },
//   {
//     id: 19,
//     title: "16 direction vastu",
//     url: "16-direction-vastu",
//   },
//   {
//     id: 20,
//     title: "Money problem vastu",
//     url: "money-problem-vastu",
//   },
//   {
//     id: 21,
//     title: "Parshan kundali prediction",
//     url: "parshan-kundali-prediction",
//   },
// ];

// const importantLinks3: ImportantLinks3[] = [
//   {
//     id: 1,
//     title: "Planetary transit",
//     url: "/planetary-transit",
//   },
//   {
//     id: 2,
//     title: "Amawasya 2023",
//     url: "/amawasya",
//   },
//   {
//     id: 3,
//     title: "Purnima 2023",
//     url: "/purnima",
//   },
//   {
//     id: 4,
//     title: "Exam result",
//     url: "/exam-result",
//   },
//   {
//     id: 5,
//     title: "Love relation",
//     url: "/love-relation",
//   },
//   {
//     id: 6,
//     title: "Love successful remedies",
//     url: "/love-successful-remedies",
//   },
//   {
//     id: 7,
//     title: "Baby name suggestions",
//     url: "/baby-name-suggestions",
//   },
//   {
//     id: 8,
//     title: "Lal kitab remedies",
//     url: "/lal-kitab0remedies",
//   },
//   {
//     id: 9,
//     title: "Gemestones reports",
//     url: "/gemestones-reports",
//   },
//   {
//     id: 10,
//     title: "Astroseva Talk  Tv",
//     url: "/astroseva-talk-tv",
//   },
//   {
//     id: 11,
//     title: "Money problem",
//     url: "/money-problem",
//   },
//   {
//     id: 12,
//     title: "Love problem",
//     url: "/love-problem",
//   },
//   {
//     id: 13,
//     title: "Marriage problem",
//     url: "/marriage-problem",
//   },
//   {
//     id: 14,
//     title: "Child birth problem",
//     url: "/child-birth-problem",
//   },
//   {
//     id: 15,
//     title: "Study in abroad",
//     url: "/study-in-abroad",
//   },
//   {
//     id: 16,
//     title: "Settle in abroad",
//     url: "/settle-in-abroad",
//   },
//   {
//     id: 17,
//     title: "Job promotion",
//     url: "/job-promotion",
//   },
//   {
//     id: 18,
//     title: "Court cases",
//     url: "/court-cases",
//   },
//   {
//     id: 19,
//     title: "Divorce in marriage",
//     url: "/divorce-in-marriage",
//   },
//   {
//     id: 20,
//     title: "Money recovery",
//     url: "/money-recovery",
//   },
//   {
//     id: 21,
//     title: "Loan repayment",
//     url: "/loan-repayment",
//   },
// ];
// const importantLinks4: ImportantLinks4[] = [
//   {
//     id: 1,
//     title: "Money debt",
//     url: "/money-debt",
//   },
//   {
//     id: 2,
//     title: "V rat calendar",
//     url: "/v-rat-calendar",
//   },
//   {
//     id: 3,
//     title: "Lunar calendar",
//     url: "/lunar-calendar",
//   },
// ];

// const social: Social[] = [
//   {
//     icon: <FaFacebook size={30} />,
//     label: "facebook",
//     url: "https://www.facebook.com/profile.php?id=100089188385234",
//   },
//   {
//     icon: <FaInstagram size={30} />,
//     label: "instagram",
//     url: "https://www.instagram.com/astrosevatalk/",
//   },
//   {
//     icon: <FaTwitter size={30} />,
//     label: "twitter",
//     url: "https://twitter.com/AstrosevaTalk",
//   },
//   {
//     icon: <FaPinterest size={30} />,
//     label: "pinterest",
//     url: "https://in.pinterest.com/astrosevatalk/",
//   },
//   {
//     icon: <FaLinkedin size={30} />,
//     label: "facebook",
//     url: "https://www.linkedin.com/company/astro-seva-talk/",
//   },
//   {
//     icon: <FaYoutube size={30} />,
//     label: "youtube",
//     url: "https://www.youtube.com/@astrosevatalk",
//   },
// ];

// const secure = [
//   {
//     icons: <SiPrivateinternetaccess size={30} />,
//     text: "Private & Confidential",
//   },
//   {
//     icons: <RiSecurePaymentFill size={30} />,
//     text: "Secure Payments",
//   },
//   {
//     icons: <GoVerified size={30} />,
//     text: "Verified Astrologers",
//   },
// ];

// function Footer({}: Props) {
//   return (
//     <div className=" bg-black py-12 text-white">
//       <Section>
//         <div className="space-y-6">
//           <div className="flex flex-col gap-4">
//             <p className="text-2xl font-semibold underline underline-offset-[6px]">
//               About AstroSevatalk
//             </p>

//             <p className="text-justify">
//               AstroSevatalk is the best astrology website for online Astrology
//               predictions. Talk to Astrologer on call and get answers to all
//               your worries by seeing the future life through Astrology Kundli
//               Predictions from the best Astrologers from India. Get best future
//               predictions related to Marriage, love life, Career or Health over
//               call, chat, query or report.{" "}
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-4">
//             <div className="w-fit space-y-4">
//               <p className="text-xl font-semibold">Important Links</p>
//               <hr className="my-2   w-32 text-white" />

//               <ul className="flex flex-col gap-4  ">
//                 {importantLinks.map((item: ImportantLinks, index: Key) => (
//                   <li
//                     key={index}
//                     className="cursor-pointer hover:text-gray-100 hover:underline hover:underline-offset-2"
//                   >
//                     <Link href={item?.url}>{item?.title}</Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="w-fit space-y-4">
//               <p className="text-xl font-semibold">Important Links</p>
//               <hr className="my-2   w-32 text-white" />

//               <ul className="flex flex-col gap-4 ">
//                 {importantLinks2.map((item: ImportantLinks, index: Key) => (
//                   <li
//                     key={index}
//                     className="cursor-pointer hover:text-gray-100 hover:underline hover:underline-offset-2"
//                   >
//                     <Link href={item?.url}>{item?.title}</Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="w-fit space-y-4">
//               <p className="text-xl font-semibold">Important Links</p>
//               <hr className="my-2   w-32 text-white" />

//               <ul className="flex flex-col gap-4 ">
//                 {importantLinks3.map((item: ImportantLinks, index: Key) => (
//                   <li
//                     key={index}
//                     className="cursor-pointer hover:text-gray-100 hover:underline hover:underline-offset-2"
//                   >
//                     <Link href={item?.url}>{item?.title}</Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="flex flex-col gap-4">
//               <div className="w-fit space-y-4">
//                 <p className="text-xl font-semibold">Important Links</p>
//                 <hr className="my-2   w-32 text-white" />

//                 <ul className="flex flex-col gap-4 ">
//                   {importantLinks4.map((item: ImportantLinks, index: Key) => (
//                     <li
//                       key={index}
//                       className="cursor-pointer hover:text-gray-100 hover:underline hover:underline-offset-2"
//                     >
//                       <Link href={item?.url}>{item?.title}</Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="w-fit space-y-2">
//                 <p className="text-xl font-semibold">Contact Us</p>
//                 <hr className="my-2   w-32 text-white" />
//                 <ul className="flex flex-col gap-4 ">
//                   <li className="">We are available to 24*7 chat support.</li>
//                   <li className="">Email ID: Support@astrosevatalk.com</li>
//                 </ul>

//                 <ul className="grid grid-cols-4 items-center justify-between gap-4 py-4 text-white">
//                   {social.map((item: Social, index: Key) => (
//                     <li key={index} className="cursor-pointer">
//                       {" "}
//                       <Link
//                         href={item?.url}
//                         aria-label={item.label}
//                         target="_blank"
//                       >
//                         {item?.icon}{" "}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="w-fit space-y-2">
//                 <p className="text-xl font-semibold">Corporate Info</p>
//                 <hr className="my-2   w-32 text-white" />

//                 <ul className="flex flex-col gap-4 ">
//                   {corporate.map((item: Corporate, index: Key) => (
//                     <li
//                       key={index}
//                       className="cursor-pointer hover:text-gray-100 hover:underline hover:underline-offset-2"
//                     >
//                       <Link href={item?.url}>{item?.title}</Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="w-fit space-y-2">
//                 <p className="text-xl font-semibold">Secure</p>
//                 <hr className="my-2   w-32 text-white" />

//                 <ul className="flex flex-col gap-4 ">
//                   {secure.map((item, index) => (
//                     <div key={index} className="flex flex-col gap-2">
//                       <div className="flex items-center gap-2">
//                         <p>{item?.icons}</p>
//                         <p>{item?.text}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//         <p className="mt-8 text-center">
//           Copyright@2023 V Business IT consultant services{" "}
//         </p>
//       </Section>
//     </div>
//   );
// }

// export default Footer;

import React, { Key, ReactElement } from "react";

import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

import { SiPrivateinternetaccess } from "react-icons/si";
import { RiSecurePaymentFill } from "react-icons/ri";
import { GoVerified } from "react-icons/go";

import Section from "../Section";

type Props = {};

type Corporate = {
  id: number;
  title: string;
  url: string;
};

type ImportantLinks = {
  id: number;
  title: string;
  url: string;
};

type ImportantLinks2 = {
  id: number;
  title: string;
  url: string;
};
type ImportantLinks3 = {
  id: number;
  title: string;
  url: string;
};

type ImportantLinks4 = {
  id: number;
  title: string;
  url: string;
};

type Social = {
  icon: ReactElement;
  url: string;
  label: string;
};

const corporate: Corporate[] = [
  {
    id: 1,
    title: "Refund & Cancellation Policy",
    url: "/refund",
  },
  {
    id: 2,
    title: "Terms & Conditions",
    url: "/terms-and-conditions",
  },
  {
    id: 3,
    title: " Privacy Policy",
    url: "/privacy-policies",
  },
  {
    id: 4,
    title: " About Us",
    url: "/corporate-info/about",
  },
  {
    id: 5,
    title: "Disclaimer",
    url: "/disclaimer",
  },
  {
    id: 6,
    title: "Pricing Policy",
    url: "/pricing",
  },
  {
    id: 7,
    title: "Shipping Policy",
    url: "/shipping",
  },
];

const importantLinks: ImportantLinks[] = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "panchang",
    url: "/today-panchang",
  },
  {
    id: 3,
    title: "Live Astrologer",
    url: "/live-astrologer/live-astrologer",
  },
  {
    id: 4,
    title: "Chat With Astrologer",
    url: "/chat-with-astrologer/chat-with-astrologer",
  },
  {
    id: 5,
    title: "Talk With Astrologer",
    url: "/talk-to-astrologer/talk-to-astrologer",
  },
  {
    id: 6,
    title: "Astrologer Signup",
    url: "/footer/astrologer-signup-at-astrosevatalk",
  },
  {
    id: 7,
    title: "Solar eclipse",
    url: "/footer/solareclipse",
  },
  {
    id: 8,
    title: "Daily Horoscope",
    url: "/horoscope/daily",
  },
  {
    id: 9,
    title: "Live Video Chat",
    url: "/live-video-chat",
  },
  {
    id: 10,
    title: "Free Kundli",
    url: "/free-kundli",
  },
  {
    id: 11,
    title: "Kundli Matching",
    url: "/footer/kundali-match",
  },
  {
    id: 12,
    title: "Shubh Muhurat",
    url: "/footer/subh-muhurat",
  },
  {
    id: 13,
    title: "Namakaran Muhurat",
    url: "/footer/namakran-muhurat",
  },
  {
    id: 14,
    title: "Zodiac signs",
    url: "/zodic-sign",
  },
  {
    id: 15,
    title: "Planets",
    url: "/planet",
  },
  {
    id: 16,
    title: "Chinese Horoscope",
    url: "/chines-horoscope",
  },
  {
    id: 17,
    title: "Love problem",
    url: "/footer/love-problem",
  },
  {
    id: 18,
    title: "Festival calendar",
    url: "/footer/festivals-calendar-at-astrosevatalk",
  },
  {
    id: 19,
    title: "Marriage problem",
    url: "/marriage-problem",
  },
  {
    id: 20,
    title: "Mole astrology",
    url: "/footer/mole-astrology",
  },
  {
    id: 21,
    title: "Horary chart peridiction",
    url: "/horary-chart-peridiction",
  },
];

const importantLinks2: ImportantLinks2[] = [
  {
    id: 1,
    title: "Astro Reviews",
    url: "/astro-reviews",
  },
  {
    id: 2,
    title: "Kaal Sarp Dosha",
    url: "/footer/kaal-sarp-dosha",
  },
  {
    id: 3,
    title: "Pitra Dosha",
    url: "/footer/pitra-dosha",
  },
  {
    id: 4,
    title: "Mangla Dosha",
    url: "/footer/mangla-dosha",
  },
  {
    id: 5,
    title: "Shani sade shati dosha",
    url: "/footer/shani-sade-shati-dosha",
  },
  {
    id: 6,
    title: "Child Astrology",
    url: "/footer/child-astrology",
  },
  {
    id: 7,
    title: "Child education",
    url: "/footer/child-education",
  },
  {
    id: 8,
    title: "Luck gem stones",
    url: "/footer/luck-gemstones",
  },
  {
    id: 9,
    title: "27 Nakshatra",
    url: "/footer/nakshatra",
  },
  {
    id: 10,
    title: "Numerology",
    url: "/footer/numerology",
  },
  {
    id: 11,
    title: "Mantras",
    url: "/footer/mantras",
  },
  {
    id: 12,
    title: "Job promotion",
    url: "/footer/job-promotion",
  },
  {
    id: 13,
    title: "Astro store-Shop",
    url: "/shop/shop",
  },
  {
    id: 14,
    title: "Web stories",
    url: "/web-stories",
  },
  {
    id: 15,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 16,
    title: "Tarot",
    url: "/tarot",
  },
  {
    id: 17,
    title: "Collaboration",
    url: "/collaboration",
  },
  {
    id: 18,
    title: "Vastu",
    url: "vastu",
  },
  {
    id: 19,
    title: "16 direction vastu",
    url: "16-direction-vastu",
  },
  {
    id: 20,
    title: "Money problem vastu",
    url: "/money-problem-vastu",
  },
  {
    id: 21,
    title: "Parshan kundali prediction",
    url: "parshan-kundali-prediction",
  },
];

const importantLinks3: ImportantLinks3[] = [
  {
    id: 1,
    title: "Planetary transit",
    url: "/footer/planetary-transit",
  },
  {
    id: 2,
    title: "Amawasya 2023",
    url: "/amawasya",
  },
  {
    id: 3,
    title: "Purnima 2023",
    url: "/purnima",
  },
  {
    id: 4,
    title: "Exam result",
    url: "/footer/exam-result",
  },
  {
    id: 5,
    title: "Love relation",
    url: "/footer/love-relation",
  },
  {
    id: 6,
    title: "Love successful remedies",
    url: "/love-successful-remedies",
  },
  {
    id: 7,
    title: "Baby name suggestions",
    url: "/footer/baby-name-suggestions",
  },
  {
    id: 8,
    title: "Lal kitab remedies",
    url: "/lal-kitab0remedies",
  },
  {
    id: 9,
    title: "Gemestones reports",
    url: "/gemestones-reports",
  },
  {
    id: 10,
    title: "Astroseva Talk  Tv",
    url: "/astroseva-talk-tv",
  },
  {
    id: 11,
    title: "Money problem",
    url: "/footer/money-problem",
  },

  {
    id: 12,
    title: "Child birth problem",
    url: "/child-birth-problem",
  },
  {
    id: 13,
    title: "Study in abroad",
    url: "/footer/study-in-abroad",
  },
  {
    id: 14,
    title: "Settle in abroad",
    url: "/footer/settle-in-abroad",
  },
  {
    id: 15,
    title: "Job promotion",
    url: "/footer/job-promotion",
  },
  {
    id: 16,
    title: "Court cases",
    url: "/footer/court-cases",
  },
  {
    id: 17,
    title: "Divorce in marriage",
    url: "/divorce-in-marriage",
  },
  {
    id: 18,
    title: "Money recovery",
    url: "/footer/money-recovery",
  },
  {
    id: 19,
    title: "Loan repayment",
    url: "/loan-repayment",
  },
];
const importantLinks4: ImportantLinks4[] = [
  {
    id: 1,
    title: "Money debt",
    url: "/footer/money-debt",
  },
  {
    id: 2,
    title: "V rat calendar",
    url: "/v-rat-calendar",
  },
  {
    id: 3,
    title: "Lunar calendar",
    url: "/lunar-calendar",
  },
];

const social: Social[] = [
  {
    icon: <FaFacebook size={30} />,
    label: "facebook",
    url: "https://www.facebook.com/profile.php?id=100089188385234",
  },
  {
    icon: <FaInstagram size={30} />,
    label: "instagram",
    url: "https://www.instagram.com/astrosevatalk/",
  },
  {
    icon: <FaTwitter size={30} />,
    label: "twitter",
    url: "https://twitter.com/AstrosevaTalk",
  },
  {
    icon: <FaPinterest size={30} />,
    label: "pinterest",
    url: "https://in.pinterest.com/astrosevatalk/",
  },
  {
    icon: <FaLinkedin size={30} />,
    label: "facebook",
    url: "https://www.linkedin.com/company/astro-seva-talk/",
  },
  {
    icon: <FaYoutube size={30} />,
    label: "youtube",
    url: "https://www.youtube.com/@astrosevatalk",
  },
];

const secure = [
  {
    icons: <SiPrivateinternetaccess size={30} />,
    text: "Private & Confidential",
  },
  {
    icons: <RiSecurePaymentFill size={30} />,
    text: "Secure Payments",
  },
  {
    icons: <GoVerified size={30} />,
    text: "Verified Astrologers",
  },
];

function Footer({}: Props) {
  return (
    <div className=" bg-black py-12 text-white">
      <Section>
        <div className="space-y-6">
          <div className="flex flex-col ">
            <p className="text-2xl font-semibold">About AstroSevatalk</p>
            <hr className="w-35 text-white" />

            <p className="mt-[20px] text-justify">
              AstroSevatalk is the best astrology website for online Astrology
              predictions. Talk to Astrologer on call and get answers to all
              your worries by seeing the future life through Astrology Kundli
              Predictions from the best Astrologers from India. Get best future
              predictions related to Marriage, love life, Career or Health over
              call, chat, query or report.{" "}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            <div className="w-fit space-y-4">
              <p className="text-xl font-semibold">Important Links</p>
              <hr className="my-2   w-32 text-white" />

              <ul className="flex flex-col gap-4  ">
                {importantLinks.map((item: ImportantLinks, index: Key) => (
                  <li
                    key={index}
                    className="cursor-pointer hover:text-gray-100 hover:underline hover:underline-offset-2"
                  >
                    <Link href={item?.url}>{item?.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-fit space-y-4">
              <p className="text-xl font-semibold">Important Links</p>
              <hr className="my-2   w-32 text-white" />

              <ul className="flex flex-col gap-4 ">
                {importantLinks2.map((item: ImportantLinks, index: Key) => (
                  <li
                    key={index}
                    className="cursor-pointer hover:text-gray-100 hover:underline hover:underline-offset-2"
                  >
                    <Link href={item?.url}>{item?.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-fit space-y-4">
              <p className="text-xl font-semibold">Important Links</p>
              <hr className="my-2   w-32 text-white" />

              <ul className="flex flex-col gap-4 ">
                {importantLinks3.map((item: ImportantLinks, index: Key) => (
                  <li
                    key={index}
                    className="cursor-pointer hover:text-gray-100 hover:underline hover:underline-offset-2"
                  >
                    <Link href={item?.url}>{item?.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <div className="w-fit space-y-4">
                <p className="text-xl font-semibold">Important Links</p>
                <hr className="my-2   w-32 text-white" />

                <ul className="flex flex-col gap-4 ">
                  {importantLinks4.map((item: ImportantLinks, index: Key) => (
                    <li
                      key={index}
                      className="cursor-pointer hover:text-gray-100 hover:underline hover:underline-offset-2"
                    >
                      <Link href={item?.url}>{item?.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-fit space-y-2">
                <Link href="/contactus">
                  {" "}
                  <p className="text-xl font-semibold">Contact Us</p>
                </Link>
                <hr className="my-2   w-32 text-white" />
                <ul className="flex flex-col gap-4 ">
                  <li className="">
                    We are available 24x7 on chat, support{" "}
                    <span className="text-red">click to start Chat</span>
                  </li>
                  <li className="">Email ID: Support@astrosevatalk.com</li>
                </ul>

                <ul className="grid grid-cols-4 items-center justify-between gap-4 py-4 text-white">
                  {social.map((item: Social, index: Key) => (
                    <li key={index} className="cursor-pointer">
                      {" "}
                      <Link
                        href={item?.url}
                        aria-label={item.label}
                        target="_blank"
                      >
                        {item?.icon}{" "}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-fit space-y-2">
                <p className="text-xl font-semibold">Corporate Info</p>
                <hr className="my-2   w-32 text-white" />

                <ul className="flex flex-col gap-4 ">
                  {corporate.map((item: Corporate, index: Key) => (
                    <li
                      key={index}
                      className="cursor-pointer hover:text-gray-100 hover:underline hover:underline-offset-2"
                    >
                      <Link href={item?.url}>{item?.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-fit space-y-2">
                <p className="text-xl font-semibold">Secure</p>
                <hr className="w-30   my-2 text-white" />

                <ul className="flex flex-col gap-4 ">
                  {secure.map((item, index) => (
                    <div key={index} className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <p>{item?.icons}</p>
                        <p>{item?.text}</p>
                      </div>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center">
          Copyright@2023 V Business IT consultant services{" "}
        </p>
      </Section>
    </div>
  );
}

export default Footer;

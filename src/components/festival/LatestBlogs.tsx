import Link from "next/link";
import React from "react";

type Blog = {
  id: string;
  text: string;
};

const latestBlogs: Blog[] = [
  {
    id: "i_was_aware_of_my_agressiveness",

    text: "I was aware of my agressiveness",
  },
  {
    id: "do_i_posses_the_authority_to_successfully_resolve_ongoing_business_negotiations",

    text: "Do I posses the authority  to successfully resolve ongoing business negotiations ",
  },
  {
    id: "free_5_minutes_astrology",

    text: "Free 5 minutes Astrology",
  },
  {
    id: "astrological_remedies_to_get_rid_your_problems_in_life",

    text: "Astrological Remedies to get rid of your problems in life",
  },
  {
    id: "astroseva_talk_to_astrologer_online",

    text: "Astroseva Talk & Talk to Astrologer online",
  },
  {
    id: "chat_with_us_at_astrosevatalk_for_job_career_promotions_and_more",

    text: "Chat With us at AstrosevaTalk for Job,Career,promotions,and more",
  },
  {
    id: "astrological_guidance_for_students",

    text: "Astrological Guidance for Students",
  },
  {
    id: "astrology_for_mental_health",

    text: "Astrology for Mental Health",
  },
];
const LatestBlogs = () => {
  return (
    <div className="mt-[15px] rounded-[3px] border-[1px] border-[#DC6563] py-[10px]">
      <div className="">
        <p className="px-2 font-bold">Latest From Blogs</p>
        <div className="mt-[3px] w-[150px] border-b-[1px] border-[#D9D9D9] px-2"></div>
      </div>
      <div className="myBox  overflow-y-auto">
        {latestBlogs.map((item) => (
          <div key={item.id} className="">
            <Link href={`/blog/${item?.id}`}>
              <p className="truncate px-1 py-1 text-[12px]">{item.text}</p>
              <div className="mt-[3px] w-full border-b-[1px] border-[#D9D9D9]"></div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;

import React, { useEffect, useState } from "react";
import { card } from "../../../utils/list";
import { useRouter } from "next/router";
import Section from "@/components/Section";
import Blog from "@/components/blog/Blog";

type Props = {};

const BlogDesc = (props: Props) => {
  const [blogde, setBlogde] = useState<any>({});
  const router = useRouter();
  const { blogdesc }: any = router.query;

  useEffect(() => {
    const result = card.filter((item) => item?.id == blogdesc);
    setBlogde(result);
  }, []);
  return (
    <div>
      <Section>
        <div className="my-5 px-3 md:my-10 md:px-10">
          <div className="my-3 text-[32px] font-bold">{blogde[0]?.text}</div>
          <img
            className=" auto mx-auto  rounded-[20px] object-cover object-top md:h-[342px] md:w-[514px]"
            src={blogde[0]?.img}
            alt=""
          />
          <div className="my-2 text-justify">{blogde[0]?.para}</div>
          <div className="my-6">
            <Blog />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default BlogDesc;

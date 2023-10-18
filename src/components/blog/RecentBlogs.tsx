import React from "react";
import BlogsBy from "./BlogsBy";

type Props = {};

const RecentBlogs = (props: Props) => {
  return (
    <div className="mt-[35px]">
      <BlogsBy heading="Recent Blogs" />
    </div>
  );
};

export default RecentBlogs;

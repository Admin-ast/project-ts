import React from "react";
import BlogsBy from "./BlogsBy";

type Props = {};

const RelatedBlogs = (props: Props) => {
  return (
    <div className="mt-[35px]">
      <BlogsBy heading="Related Blogs" />
    </div>
  );
};

export default RelatedBlogs;

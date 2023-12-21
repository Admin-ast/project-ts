import Upload from "@/components/admin/setting/gallery/Upload";
import React from "react";

type Props = {};

const UploadImage = (props: Props) => {
  return (
    <div>
      <Upload title={"Profile Image"}/>
    </div>
  );
};

export default UploadImage;

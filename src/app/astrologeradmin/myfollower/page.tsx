"use client";
import MyFollower from "@/components/admin/my follower/MyFollower";
import { getFetcher } from "@/service";
import React, { useEffect, useState } from "react";

type Props = {};

const myfollower = (props: Props) => {
  const[followers,setFollowers] = useState<any>([]);

  useEffect(() => {
      const getfollowers = async() => {
          const follower = await getFetcher("/follower");

          if(follower?.status){
            setFollowers(follower?.res);
          //  console.log(follower?.res);
          }
      }

      getfollowers();
  },[])
  return (
    <div>
      <MyFollower followers={followers} />
    </div>
  );
};

export default myfollower;

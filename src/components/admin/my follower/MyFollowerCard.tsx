import React from "react";

type Props = {
  name: string;
  id: number;
  date: string;
};

const MyFollowerCard = ({ name, id, date }: Props) => {
  return (
    <div className="flex items-center justify-center rounded-[15px] border-b-[7px] border-[#DC6563] shadow-md">
      <div className="h-16 w-16   ">
        <img
          src="https://s3-alpha-sig.figma.com/img/37e9/b62f/7b9a47c8e55bc344604c6fcaca0929f2?Expires=1687737600&Signature=okVmdFkWz1vKleCCiFbx7OVpNVJV94BnS7TdS9yw9JdGlbfWh7X0JmbDnOGGvufo2oWEH11dqDo82EaINMLucNl8nK3F0BN~ojEGn8bAtzkYQ4yhffUYa6GIIjn65KglyULm~3Wqepx3ZEnEcvyt4qkOoZZBfFykrC3k2jhSTFz9cPK404i8u6zg~siwaiJUVLeCU46vvClZJDBe-nW2Q5XzxS2zdRwfaoOECffTdj1VCQh2pUALwDfaZ5X7fqv5qiWKu0ZdkCbDaGAtsaL0lu32-KoUl62dquJ9EwGCRvzP3izPbR-LfTtp1Wdl8OTkoPsnguKLgCieeZUiNpIP6g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="card-image"
          className="h-[39px]  w-[39px] rounded-[100%] border-[1px] border-[#DC6563]"
        />
      </div>
      <div className="ml-4">
        <p className="text-xl font-bold">
          {name}
          <span className="">({id})</span>
        </p>
        <p className="text-gray-500">{date}</p>
      </div>
    </div>
  );
};

export default MyFollowerCard;

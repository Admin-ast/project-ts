import React from "react";

type Props = {};

const ImageDrawer = (props: Props) => {
  return (
    <div className="mt-[40px] grid h-full grid-rows-2 lg:w-1/2">
      <div className=" ">
        <img
          src="https://media.istockphoto.com/id/1048293726/photo/large-five-face-rudraksh-seed-macro-in-hand.webp?b=1&s=170667a&w=0&k=20&c=VyA3fwBLGANVlHjpyG5QQ4qmF655LA6ZN6TW-aLO1iw="
          alt="Product Image"
          className="mb-2  w-full hover:scale-110"
        />
      </div>
      <div className="flex  gap-[2px] md:w-full ">
        <div className="">
          <img
            src="https://media.istockphoto.com/id/1048293726/photo/large-five-face-rudraksh-seed-macro-in-hand.webp?b=1&s=170667a&w=0&k=20&c=VyA3fwBLGANVlHjpyG5QQ4qmF655LA6ZN6TW-aLO1iw="
            alt="Product Image"
            className=" "
          />
        </div>
        <div className="">
          <img
            src="https://media.istockphoto.com/id/1048293726/photo/large-five-face-rudraksh-seed-macro-in-hand.webp?b=1&s=170667a&w=0&k=20&c=VyA3fwBLGANVlHjpyG5QQ4qmF655LA6ZN6TW-aLO1iw="
            alt="Product Image"
            className=""
          />
        </div>
        <div className="">
          <img
            src="https://media.istockphoto.com/id/1048293726/photo/large-five-face-rudraksh-seed-macro-in-hand.webp?b=1&s=170667a&w=0&k=20&c=VyA3fwBLGANVlHjpyG5QQ4qmF655LA6ZN6TW-aLO1iw="
            alt="Product Image"
            className="object-cover"
          />
        </div>
        <div className="">
          <img
            src="https://media.istockphoto.com/id/1048293726/photo/large-five-face-rudraksh-seed-macro-in-hand.webp?b=1&s=170667a&w=0&k=20&c=VyA3fwBLGANVlHjpyG5QQ4qmF655LA6ZN6TW-aLO1iw="
            alt="Product Image"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default ImageDrawer;

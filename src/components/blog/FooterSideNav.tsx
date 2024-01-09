import React from "react";

type Props = {
  headText: string;
  subText: string;
};

const FooterSideNav = ({ headText, subText }: Props) => {
  return (
    <div className="">
      <div className="rounded-[10px] border-[2px] border-[#DC6563] py-4 px-2">
        <p className="text-center text-[24px] font-bold">{headText}</p>
        <p className="mt-[5px] text-center text-[14px] ">
          Choose your and your {`partner's`} <br /> zodiac sign to check
          compatibility
        </p>
        {/* ---------------------------sign Box------------------------------   */}
        <div className="flex justify-center gap-4">
          {/* -------------------------------1st box------------------------------ */}

          <div className="my-4">
            <label
              htmlFor="mySelect"
              className="mb-2 block text-center text-[13px] font-bold"
            >
              Your Sign
            </label>
            <select
              id="mySelect"
              name="mySelect"
              className="mt-1 rounded-md border border-gray-300 p-2 focus:border-blue-300 focus:outline-none focus:ring"
            >
              <option value="option1">Taurus</option>
              <option value="option2">Aries</option>
              <option value="option3">Gemini</option>
              <option value="option3">Cancer</option>
              <option value="option3">Leo</option>
              <option value="option3">Virgo</option>
              <option value="option3">Libra</option>
              <option value="option3">Scorpio</option>
              <option value="option3">Sagittarius</option>
              <option value="option3">Capricorn</option>
              <option value="option3">Aquarius</option>
              <option value="option3">Pisces</option>
              {/* Add more options as needed */}
            </select>
          </div>
          {/* --------------------------------------2nd Box---------------------------- */}

          <div className="my-4">
            <label
              htmlFor="mySelect"
              className="mb-2 block text-center text-[13px] font-bold"
            >
              {`Partner's`} Sign
            </label>
            <select
              id="mySelect"
              name="mySelect"
              className="mt-1 rounded-md border border-gray-300 p-2 focus:border-blue-300 focus:outline-none focus:ring"
            >
              <option value="option1">Taurus</option>
              <option value="option2">Aries</option>
              <option value="option3">Gemini</option>
              <option value="option3">Cancer</option>
              <option value="option3">Leo</option>
              <option value="option3">Virgo</option>
              <option value="option3">Libra</option>
              <option value="option3">Scorpio</option>
              <option value="option3">Sagittarius</option>
              <option value="option3">Capricorn</option>
              <option value="option3">Aquarius</option>
              <option value="option3">Pisces</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>
        <div className="mt-[23px] flex items-center justify-center">
          <button className="rounded-[5px] bg-gradient-to-b from-[#fb7038] to-[#ff0600] px-4 py-2 text-[10px] font-semibold text-white">
            Check Your Love Compatibility
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterSideNav;

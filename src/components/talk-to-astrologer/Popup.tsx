// components/Popup.tsx
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import FilterOptions from "./FilterOptions";
import { Checkbox } from "../forms";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const Popup = ({ isOpen, onClose }: PopupProps) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto "
        onClose={onClose}
      >
        <div className="  px-4 text-center ">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          </Transition.Child>
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="my-8 inline-block   transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all lg:w-[689px]">
              {/* Your content goes here */}

              <div className=" ">
                <div className="  z-10 bg-[#FFFFFF]  ">
                  {/* Add your form fields here */}
                  <div className="mb-4 border-b-[1px] border-[#D9D9D9]">
                    <p className="text-[32px] font-bold">FILTERS </p>
                  </div>
                  <div className=" md:flex lg:flex ">
                    <div className="border-b-[1px] border-[#D9D9D9] px-4 font-[Roboto] text-[24px] md:border-r-[1px]  lg:border-r-[1px]">
                      <div className="">
                        <button className="">Skill</button>
                      </div>
                      <div className="">
                        <button className="">Language</button>
                      </div>
                      <div className="">
                        <button className="">Country</button>
                      </div>
                      <div className="">
                        <button className="">Gender</button>
                      </div>
                      <div className="">
                        <button className="">Offer</button>
                      </div>
                      <div className="">
                        <button className="">Top Astrologers</button>
                      </div>
                    </div>
                    <div className="px-8 ">
                      <FilterOptions
                        option1="Face Reading"
                        option2="KP"
                        option3="Life Coach"
                        option4="Nadi"
                        option5="Numerology"
                        option6="Palmistry"
                        option7="Prashna"
                        option8="Psychic"
                        option9="Tarot"
                        option10="Vastu"
                      />
                    </div>
                  </div>
                  <div className="border-[#D9D9D9] lg:border-b-[1px]"></div>
                  <div className="justify-between py-4 text-[24px] font-bold md:flex lg:flex ">
                    <div className="">
                      <button className="">RESET</button>
                    </div>
                    <div className="">
                      <button className="rounded-[10px] bg-gradient-to-b from-[#FF7646] to-[#FF0600]  px-2 text-white">
                        APPLY
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <button
                  onClick={onClose}
                  className="hover-bg-blue-700 focus-outline-none mt-4 rounded-full bg-gradient-to-b from-[#FF7646] to-[#FF0600] px-4 py-2 text-white"
                >
                  Close
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Popup;

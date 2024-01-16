// components/Popup.tsx
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import FilterOptions from "./FilterOptions";
import { Checkbox } from "../forms";
import SortByOptions from "./SortByOptions";
import { ImCross } from "react-icons/im";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const SortPopup = ({ isOpen, onClose }: PopupProps) => {
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
            <div className="my-8    inline-block transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              {/* Your content goes here */}

              <div className=" ">
                <div className="  z-10 bg-[#FFFFFF]  ">
                  {/* Add your form fields here */}
                  <div className="mb-4 flex items-center justify-between border-b-[1px] border-[#D9D9D9]">
                    <p className="text-[32px] font-bold">Sort By </p>
                    <div className="flex items-center justify-center">
                      <button
                        onClick={onClose}
                        className="hover-bg-blue-700 focus-outline-none  mt-4 rounded-full px-4 py-2 text-[22px]"
                      >
                        <ImCross className="w-6 cursor-pointer font-bold  " />
                      </button>
                    </div>
                  </div>
                  <div className=" md:flex lg:flex ">
                    <div className="px-8 ">
                      <SortByOptions
                        option1="Popularity"
                        option2="Experience High to Low"
                        option3="Experience High to Low"
                        option4="Experience High to Low"
                        option5="Experience High to Low"
                        option6="Experience High to Low"
                        option7="Experience High to Low"
                        option8="Experience High to Low"
                        option9="Experience High to Low"
                        option10="Experience High to Low"
                      />
                    </div>
                  </div>
                  <div className="border-[#D9D9D9] lg:border-b-[1px]"></div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default SortPopup;

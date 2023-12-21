import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";


type Props = {
  button: any;
  content: any;
};

export default function Example({ button, content }: Props) {
  return (
    <div className="text-right">
      <Menu as="div" className="relative inline-block ">
        <div>
          <Menu.Button>{button}</Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-[-5] mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {content}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

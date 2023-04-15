import { Fragment, useEffect, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function Combo({ setValue }: any) {
  const [selected, setSelected] = useState();
  const [query, setQuery] = useState("");
  const [filteredPeople, setFilteredPeople] = useState([]);

  useEffect(() => {
    const fetchLocation = async () => {
      if (query) {
        var requestOptions = {
          method: "GET",
        };

        await fetch(
          `https://api.geoapify.com/v1/geocode/autocomplete?text=${query}&apiKey=fa1f97f6b30a4baa97fafa332e526154`,
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            setFilteredPeople(result?.features);
          })
          .catch((error) => console.log("error", error));
      } else {
      }
    };
    fetchLocation();
  }, [query]);

  const locationSelection = (e: any) => {
    setValue("lat", e?.properties?.lat);
    setValue("lon", e?.properties?.lat);
    setValue("tzone", e?.properties?.timezone?.offset_DST_seconds / 3600);
    // console.log("e", e?.properties?.timezone?.offset_DST_seconds / 3600);
    setSelected(e?.properties?.formatted);
  };

  return (
    <div className="">
      <Combobox value={selected} onChange={(e) => locationSelection(e)}>
        <div className="relative">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg border border-gray-500 text-left focus:!border-none focus:!outline-none focus-visible:ring-0 focus-visible:ring-opacity-0 sm:text-sm">
            <Combobox.Input
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:outline-none focus:ring-0"
              displayValue={selected}
              placeholder="Enter your birth place"
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredPeople.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredPeople.map((person: any, index) => (
                  <Combobox.Option
                    key={index}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-teal-600 text-white" : "text-gray-900"
                      }`
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {person?.properties?.formatted}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}

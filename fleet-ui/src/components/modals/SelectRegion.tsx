import React, { useEffect, useRef, useState } from "react";
import ReactSelect from "react-select";

const AWS_REGIONS_API_URL = "https://ip-ranges.amazonaws.com/ip-ranges.json";

const SelectRegion = ({
  setShowModal,
  setSelectedRegion,
  selectedRegion,
}: {
  setShowModal: (value: React.SetStateAction<boolean>) => void;
  setSelectedRegion: (value: React.SetStateAction<string>) => void;
  selectedRegion: string;
}) => {
  const [regions, setRegions] = useState([]);
  const regionRef = useRef(true);

  useEffect(() => {
    if (!regionRef.current) return;
    async function fetchRegions() {
      regionRef.current = false;
      try {
        const response = await fetch(AWS_REGIONS_API_URL);
        const data: any = await response.json();

        const regions = data?.prefixes
          .filter((prefix: any) => prefix.region !== "")
          .map((prefix: any) => prefix.region)
          .filter(
            (region: any, index: any, self: any) =>
              self.indexOf(region) === index
          );

        setRegions(
          regions.map((region: any) => ({ value: region, label: region }))
        );
      } catch (error) {
        console.error(error);
      }
    }

    fetchRegions();
  }, []);

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Select Region</h3>
              <button
                className="p-1 bg-transparent border-0 text-black ml-16 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                  X
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto ">
              <ReactSelect
                className=" w-full h-14 "
                placeholder="Select Region"
                options={regions}
                onChange={(e: any) => {
                  localStorage.setItem("region", e.value);
                  setSelectedRegion(e.value);
                  setShowModal(false);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default SelectRegion;

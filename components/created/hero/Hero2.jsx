/**
 * Hero2.jsx
 */

"use client";
import Image from "next/image";

import { useCarStore } from "@/store/store";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Helper functions
const getMake = (data) => {
  return new Set(data.map((el) => el.make));
};

const getModelsForMake = (make, data) => {
  const models = data.filter((el) => el.make === make).map((el) => el.model);
  return new Set(models);
};

const getProductionYearsForModel = (model, data) => {
  const years = data.filter((el) => el.model === model).map((el) => el.productionYears);
  return new Set(years);
};

const Hero2 = ({ carsData }) => {
  const { make, model, years, setMake, setModel, setYears } = useCarStore();

  const makes = getMake(carsData);
  const models = getModelsForMake(make, carsData);
  const yearsPeriod = getProductionYearsForModel(model, carsData);

  const handleMakeChange = (e) => {
    const newMake = e.target.value;
    setMake(newMake);
    setModel(""); // Reset model when changing make
    setYears(""); // Reset years when changing make
  };

  const handleModelChange = (e) => {
    const newModel = e.target.value;
    setModel(newModel);
    setYears(""); // Reset years when changing model
  };

  const handleYearsChange = (e) => {
    const newYears = e.target.value;
    setYears(newYears);
  };

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-b from-transparent via-transparent to-[#ecedef] dark:to-[#1c1c1c]">
      <div className="absolute left-0 top-[30%] z-0 whitespace-nowrap border-y border-dashed bg-neutral-200 font-serif text-[300px] font-bold text-neutral-400 dark:bg-neutral-700 dark:text-neutral-300">
        AUTO-NEL AUTO-NEL
      </div>
      <div className="absolute left-0 top-0 z-50 h-full w-full">
        <div className="z-10 mx-auto h-full w-full max-w-7xl border-x border-dashed"></div>{" "}
      </div>
      <div className="absolute bottom-0 left-0 z-50 h-full w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
        <Image src="/2019_mb_g63_amg_0000-first-side.png" alt="saa" width={500} height={500} className="z-50 h-full w-full object-contain" />
      </div>
      <div className="relative h-full w-full">
        <div className="relative z-50 flex h-full w-full flex-col items-center pt-[7%]">
          <div className=" supports-backdrop-blur:bg-[#1c1c1c]/60 w-[95%] max-w-4xl  rounded-lg bg-[#dfdfdf]/75 px-10 pb-10 pt-7 shadow-lg backdrop-blur dark:bg-[#1c1c1c]/75">
            <div className="absolute -top-5 left-10 text-2xl">Search For A Service</div>

            <form className="grid grid-cols-4 gap-5">
              <div className="col-span-1 flex flex-col gap-2">
                <label className="text-lg font-semibold text-neutral-400">Make</label>
                <select onChange={(e) => handleMakeChange(e)} value={make} className="w-full rounded-lg p-3">
                  <option value="">Select a Make</option>
                  {[...makes].map((el, idx) => (
                    <option key={idx} value={el}>
                      {el}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-span-1 flex flex-col gap-2">
                <label className="text-lg font-semibold text-neutral-400">Model</label>
                <select value={model} onChange={(e) => handleModelChange(e)} className="w-full rounded-lg p-3" disabled={!make}>
                  <option value="">Select a Model</option>
                  {[...models].map((el, idx) => (
                    <option key={idx} value={el}>
                      {el}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-span-1 flex flex-col gap-2">
                <label className="text-lg font-semibold text-neutral-400">Years</label>
                <select value={years} onChange={(e) => handleYearsChange(e)} className="w-full rounded-lg p-3" disabled={!model}>
                  <option value="">Select years</option>
                  {[...yearsPeriod].map((el, idx) => (
                    <option key={idx} value={el}>
                      {el}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-span-1 flex items-end">
                <Link href={`/shop-services?make=${make}&model=${model}&years=${years}`} className="w-full rounded-lg bg-white p-2.5 text-center font-semibold text-black">
                  Search
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;

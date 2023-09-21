/**
 * Hero2.jsx
 */

"use client";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Changed from next/navigation to next/router
import { useSearchParams } from "next/navigation"; // Changed from next/navigation to next/router
import { useEffect, useState } from "react";

const baseCar = {
  make: "Mercedes",
  model: "S-Class",
  productionYears: "2015-2020",
};

// Helper functions
const getMake = (data) => {
  return new Set(data.map((el) => el.make));
};

const getModelsForMake = (make, data) => {
  const models = data
    .filter((el) => el.make === make)
    .map((el) => el.model);
  return new Set(models);
};

const getProductionYearsForModel = (model, data) => {
  const years = data
    .filter((el) => el.model === model)
    .map((el) => el.productionYears);
  return new Set(years);
};

const Hero2 = ({ carsData }) => {
  const router = useRouter();

  const [make, setMake] = useState(baseCar.make);
  const [model, setModel] = useState(baseCar.model);
  const [years, setYears] = useState(baseCar.productionYears);
  const [availableModels, setAvailableModels] = useState([]);
  const [availableYears, setAvailableYears] = useState([]);

  useEffect(() => {
    setAvailableModels(Array.from(getModelsForMake(make, carsData)));
  }, [make, carsData]);

  useEffect(() => {
    if (model) {
      setAvailableYears(Array.from(getProductionYearsForModel(model, carsData)));
    } else {
      setAvailableYears([]);
    }
  }, [model, carsData]);

  const handleMakeChange = (e) => {
    const newMake = e.target.value;
    setMake(newMake);
    setModel(""); // Reset model when changing make
    setYears(""); // Reset years when changing make
    router.push(`/?make=${newMake}&model=undefined&years=undefined`);
  };

  const handleModelChange = (e) => {
    const newModel = e.target.value;
    setModel(newModel);
    setYears(""); // Reset years when changing model
    router.push(`/?make=${make}&model=${newModel}&years=undefined`);
  };

  const handleYearsChange = (e) => {
    const newYears = e.target.value;
    setYears(newYears);
    router.push(`/?make=${make}&model=${model}&years=${newYears}`);
  };

  const makes = Array.from(getMake(carsData));

  return (
    <section className="min-h-[90vh] bg-gradient-to-b from-transparent via-transparent to-[#ecedef] dark:to-[#1c1c1c] relative overflow-hidden">
      <div className="absolute top-[30%] left-0 z-0 text-[300px] whitespace-nowrap font-bold font-serif bg-neutral-200 dark:bg-neutral-700 text-neutral-400 dark:text-neutral-300 border-y border-dashed">AUTO-NEL AUTO-NEL</div>
      <div className="absolute top-0 left-0 z-50 w-full h-full"><div className="z-10 w-full h-full mx-auto border-dashed max-w-7xl border-x"></div> </div>
      <div className="absolute bottom-0 left-0 w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] h-full z-50">
        <Image
          src="/2019_mb_g63_amg_0000-first-side.png"
          alt="saa"
          width={500}
          height={500}
          className="z-50 object-contain w-full h-full"
        />
      </div>
      <div className="relative w-full h-full">
        <div className="z-50 w-full h-full flex flex-col items-center pt-[7%] relative">
          <div className=" w-[95%] max-w-4xl supports-backdrop-blur:bg-[#1c1c1c]/60  bg-[#dfdfdf]/75 dark:bg-[#1c1c1c]/75 backdrop-blur px-10 pt-7 pb-10 rounded-lg shadow-lg">
            <div className="absolute text-2xl -top-5 left-10">Search For A Service</div>

            <form className="grid grid-cols-4 gap-5">
              <div className="flex flex-col col-span-1 gap-2">
                <label className="text-lg font-semibold text-neutral-400">Make</label>
                <select value={baseCar.make} onChange={handleMakeChange} className="w-full p-3 rounded-lg">
                  {makes.map((el, idx) => (
                    <option key={idx} value={el}>
                      {el}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col col-span-1 gap-2">
                <label className="text-lg font-semibold text-neutral-400">Model</label>
                <select value={model} onChange={handleModelChange} className="w-full p-3 rounded-lg" disabled={!make}>
                  <option value={baseCar.model}>{baseCar.model}</option>
                  {availableModels.map((el, idx) => (
                    <option key={idx} value={el}>
                      {el}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col col-span-1 gap-2">
                <label className="text-lg font-semibold text-neutral-400">Years</label>
                <select value={years} onChange={handleYearsChange} className="w-full p-3 rounded-lg" disabled={!model}>
                  <option value={baseCar.productionYears}>{baseCar.productionYears}</option>
                  {availableYears.map((el, idx) => (
                    <option key={idx} value={el}>
                      {el}
                    </option>
                  ))}
                </select>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2; 
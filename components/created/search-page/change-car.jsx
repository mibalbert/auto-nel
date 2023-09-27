/**
 * change-car.jsx
 */

"use client";

import { Button } from "@/components/ui/button";
import { useCarStore } from "@/store/store";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

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

const getCarImage = (data, make, model, productionYears) => {
  console.log(data);

  // const oo = data.filter((el) => el.make === make && el.model === model && el.productionYears === productionYears);
  // const op = oo.map((el) => el.url);

  // return data[0].url;
};

const ChangeCar = ({ carsData }) => {
  const { make, model, years, carImage, setMake, setModel, setYears, setCarImage } = useCarStore();

  const searchParams = useSearchParams();
  const router = useRouter();

  const [edit, setEdit] = useState(true);

  const mak = searchParams.get("make");
  const mod = searchParams.get("model");
  const ye = searchParams.get("years");

  useEffect(() => {
    if (!mak || !mod || !ye) {
      // router.push(`/shop-services?make=Audi&model=A4&years=2015-2020`);
      router.push(`/shop-services?make=&model=&years=`);
    }

    // Filter services when query parameters change
    // const filtered = services.filter((service) => service.forCars.some((car) => car.make === mak && car.models.includes(mod)));
    // setFilteredServices(filtered);

    if (mak !== make) {
      setMake(mak);
    }
    if (mod !== model) {
      setModel(mod);
    }
    if (ye !== years) {
      setYears(ye);
    }
  }, [mak, mod, ye, make, model, years]);

  const makes = getMake(carsData);
  const models = getModelsForMake(make, carsData);
  const yearsPeriod = getProductionYearsForModel(model, carsData);

  const handleMakeChange = (e) => {
    const newMake = e.target.value;
    setMake(newMake);
    setModel(""); // Reset model when changing make
    setYears(""); // Reset years when changing make
    router.replace(`/shop-services?make=${newMake}&model=''&years=''`);
  };

  const handleModelChange = (e) => {
    const newModel = e.target.value;
    setModel(newModel);
    setYears(""); // Reset years when changing model
    router.replace(`/shop-services?make=${make}&model=${newModel}&years=''`);
  };

  const handleYearsChange = (e) => {
    const newYears = e.target.value;
    setYears(newYears);
    const img = getCarImage(carsData.images, make, model, years);
    setCarImage(img);
    router.replace(`/shop-services?make=${make}&model=${model}&years=${newYears}`);
  };

  return (
    <section className=" w-full">
      <div className="flex h-full max-h-[150px] w-full">
        <div className="flex h-full w-2/3 ">
          <div className="mx-auto flex h-full w-1/2 flex-col pt-10">
            <div className="font-serif text-3xl">Search Service...</div>
            <div className="font-serif text-sm">We offer over 300 services to choose from:</div>
          </div>
        </div>
        <div className="relative flex h-full w-1/3 items-end">
          <Image src={carImage || "/2019_mb_g63_amg_0000-first-side.png"} alt="asdasd" width={500} height={500} priority className="h-full w-full scale-x-[-1] transform object-cover" />
        </div>
      </div>
      <div className="supports-backdrop-blur:bg-neutral-100/60  h-auto min-h-[6rem] w-full rounded-t-lg bg-gradient-to-r from-neutral-700 via-neutral-700/80 to-neutral-700/30  pb-4 pt-2  backdrop-blur dark:bg-neutral-100/70">
        {!edit ? (
          <div className="mx-auto grid max-w-[80%] grid-cols-4 gap-5 py-3 ">
            <div className="col-span-1 flex flex-col gap-2">
              <label className="text-sm text-neutral-700 dark:text-neutral-400">Make:</label>
              <select
                onChange={(e) => handleMakeChange(e)}
                value={make}
                className="w-full rounded-lg border border-neutral-600 bg-neutral-50 p-1 disabled:bg-neutral-300 dark:bg-neutral-400 dark:disabled:bg-neutral-800"
              >
                <option value="">Select a Make</option>
                {[...makes].map((el, idx) => (
                  <option key={idx} value={el}>
                    {el}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-span-1 flex flex-col gap-2">
              <label className="text-sm text-neutral-700 dark:text-neutral-400">Model:</label>
              <select
                value={model}
                onChange={(e) => handleModelChange(e)}
                className="w-full rounded-lg border border-neutral-600 bg-neutral-50 p-1 disabled:bg-neutral-300 dark:bg-neutral-400 dark:disabled:bg-neutral-800"
                disabled={!make}
              >
                <option value="">Select a Model</option>
                {[...models].map((el, idx) => (
                  <option key={idx} value={el}>
                    {el}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-span-1 flex flex-col gap-2">
              <label className="text-sm text-neutral-700 dark:text-neutral-400">Years:</label>
              <select
                value={years}
                onChange={(e) => handleYearsChange(e)}
                className="w-full rounded-lg border border-neutral-600 bg-neutral-50 p-1 disabled:bg-neutral-300 dark:bg-neutral-400 dark:disabled:bg-neutral-800"
                disabled={!model}
              >
                <option value="">Select years</option>
                {[...yearsPeriod].map((el, idx) => (
                  <option key={idx} value={el}>
                    {el}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-span-1 flex items-end">
              <Button variant="link" onClick={() => setEdit(!edit)}>
                Save
              </Button>
            </div>
          </div>
        ) : (
          <div className="mx-auto flex max-w-[80%] flex-col gap-1 py-3">
            <div className="pl-2 text-sm text-neutral-200 dark:text-neutral-800 ">Available services for:</div>
            <div className="grid grid-cols-5 gap-2 overflow-hidden whitespace-nowrap bg-white text-sm dark:bg-neutral-700 ">
              <div className="col-span-1 flex items-center justify-center gap-1.5 overflow-hidden">
                <span>Make:</span>
                <span className="font-semibold">{make}</span>
              </div>
              <div className="col-span-1 flex items-center justify-center gap-1.5 overflow-hidden">
                <span>Model:</span>
                <span className="font-semibold">{model}</span>
              </div>
              <div className="col-span-1 flex items-center justify-center gap-1.5 overflow-hidden">
                <span>Variant:</span>
                <span className="font-semibold">{years}</span>
              </div>
              <div className="col-span-1 flex items-center justify-center gap-1.5 overflow-hidden">
                <span>Years:</span>
                <span className="font-semibold">{years}</span>
              </div>
              <div className="col-span-1 flex items-center justify-center">
                <Button variant="link" className="" onClick={() => setEdit(!edit)}>
                  X Modify
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ChangeCar;

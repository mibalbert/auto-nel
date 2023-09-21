/**
 * SearchBarSearchPage.js
 */
"use client";

import { Button } from "@/components/ui/button";
import { useCarStore, useCartStore } from "@/store/store";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Services from "./services";

const services = [
  { id: 1, name: "Oil Change", price: 50 },
  { id: 2, name: "Brake Inspection and Repair", price: 100 },
  { id: 3, name: "Tire Rotation and Balancing", price: 60 }
  // Add more services from your list here
];

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

const SearchPage = ({ carsData }) => {
  const { make, model, years, setMake, setModel, setYears } = useCarStore();

  const router = useRouter();

  const [edit, setEdit] = useState(false);

  const searchParams = useSearchParams();

  const mak = searchParams.get("make");
  const mod = searchParams.get("model");
  const ye = searchParams.get("years");

  useEffect(() => {
    if (!mak || !mod || !ye) {
      router.push(`/search?make=Audi&model=A4&years=2015-2020`);
    }

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

  console.log(make, model, years);

  const makes = getMake(carsData);
  const models = getModelsForMake(make, carsData);
  const yearsPeriod = getProductionYearsForModel(model, carsData);

  const handleMakeChange = (e) => {
    const newMake = e.target.value;
    setMake(newMake);
    setModel(""); // Reset model when changing make
    setYears(""); // Reset years when changing make
    router.replace(`/search?make=${newMake}&model=''&years=''`);
  };

  const handleModelChange = (e) => {
    const newModel = e.target.value;
    setModel(newModel);
    setYears(""); // Reset years when changing model
    router.replace(`/search?make=${make}&model=${newModel}&years=''`);
  };

  const handleYearsChange = (e) => {
    const newYears = e.target.value;
    setYears(newYears);
    router.replace(`/search?make=${make}&model=${model}&years=${newYears}`);
  };

  const { cartItems, addToCart, removeFromCart, clearCart, getTotalCost } = useCartStore();

  const handleAddToCart = (service) => {
    addToCart(service);
  };

  return (
    <section className="min-h-[calc(100vh-3.5rem)] ">
      <div className="mx-auto h-full w-full max-w-screen-2xl ">
        <div className="grid min-h-[calc(100vh-3.5rem)] grid-cols-8 border-x border-dashed">
          <div className="col-span-6 h-full w-full px-2 ">
            <div className="mx-auto w-full max-w-[90%] py-5 text-lg font-semibold">Search Service</div>
            <div className="mx-auto h-auto min-h-[6rem] bg-neutral-100">
              {!edit ? (
                <div className="mx-auto grid max-w-[80%] grid-cols-4 gap-5 py-3 ">
                  <div className="col-span-1 flex flex-col gap-2">
                    <label className="text-sm text-neutral-700 ">Make:</label>
                    <select onChange={(e) => handleMakeChange(e)} value={make} className="w-full rounded-lg border border-neutral-600 bg-neutral-50 p-1 disabled:bg-neutral-300">
                      <option value="">Select a Make</option>
                      {[...makes].map((el, idx) => (
                        <option key={idx} value={el}>
                          {el}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-span-1 flex flex-col gap-2">
                    <label className="text-sm text-neutral-700 ">Model:</label>
                    <select value={model} onChange={(e) => handleModelChange(e)} className="w-full rounded-lg border border-neutral-600 bg-neutral-50 p-1 disabled:bg-neutral-300" disabled={!make}>
                      <option value="">Select a Model</option>
                      {[...models].map((el, idx) => (
                        <option key={idx} value={el}>
                          {el}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-span-1 flex flex-col gap-2">
                    <label className="text-sm text-neutral-700 ">Years:</label>
                    <select value={years} onChange={(e) => handleYearsChange(e)} className="w-full rounded-lg border border-neutral-600 bg-neutral-50 p-1 disabled:bg-neutral-300" disabled={!model}>
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
                  <div className="pl-2 text-sm text-neutral-700 ">Available services for:</div>
                  <div className="grid grid-cols-5 gap-2 overflow-hidden whitespace-nowrap bg-white text-sm ">
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

            <div className="p-5">
              <ul>
                {services.map((service) => (
                  <li key={service.id}>
                    {service.name} - ${service.price}
                    <button onClick={() => handleAddToCart(service)}>Add to Cart</button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative col-span-2">
            <div className="absolute left-0 top-0 z-10 h-full w-full">
              <div className="mx-auto w-full max-w-[90%] py-5 text-lg font-semibold">Cart:</div>
              <div className=" sticky top-10 mx-auto w-full max-w-[90%] rounded-lg border border-neutral-300 bg-white p-10 shadow-md">
                <div>
                  <ul>
                    {cartItems.map((item) => (
                      <li key={item.id}>
                        {item.name} - ${item.price}
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                      </li>
                    ))}
                  </ul>
                  <p>Total: ${getTotalCost()}</p>
                  <button onClick={clearCart}>Clear Cart</button>
                </div>
              </div>
            </div>
            <div className="absolute left-0 right-0 h-full w-[50%] bg-gradient-to-l from-transparent via-transparent to-[#f9fafc] dark:to-[#2b2b2b]"></div>
            <div className="absolute right-0 top-0 h-[15%] w-full bg-gradient-to-t from-transparent via-transparent to-[#FFFFFF] dark:to-[#2e2e2e]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchPage;

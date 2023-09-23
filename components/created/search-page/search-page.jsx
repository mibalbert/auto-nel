/**
 * SearchBarSearchPage.js
 */
"use client";

import { Button } from "@/components/ui/button";
import { useCarStore, useCartStore } from "@/store/store";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const services = [
  {
    id: 3,
    name: "Oil Change Service",
    price: 50,
    forCars: [
      { make: "Audi", models: ["A4", "Escape"] },
      { make: "Chevrolet", models: ["Silverado", "Malibu"] }
    ],
    category: "Maintenance"
  },
  {
    id: 4,
    name: "Tire Rotation and Balance",
    price: 60,
    forCars: [
      { make: "Mercedes-Benz", models: ["GLE", "S-Class"] },
      { make: "Hyundai", models: ["Elantra", "Santa Fe"] }
    ],
    category: "Maintenance"
  },
  {
    id: 5,
    name: "Transmission Fluid Flush",
    price: 120,
    forCars: [
      { make: "BMW", models: ["3 Series", "5 Series"] },
      { make: "Mercedes-Benz", models: ["C-Class", "E-Class"] }
    ],
    category: "Maintenance"
  },
  {
    id: 6,
    name: "Brake Pad Replacement",
    price: 80,
    forCars: [
      { make: "Volkswagen", models: ["Jetta", "Passat"] },
      { make: "Subaru", models: ["Outback", "Impreza"] }
    ],
    category: "Repair"
  },
  {
    id: 7,
    name: "Coolant Flush Service",
    price: 70,
    forCars: [
      { make: "Kia", models: ["Optima", "Sorento"] },
      { make: "Mazda", models: ["CX-5", "Mazda3"] }
    ],
    category: "Maintenance"
  },
  {
    id: 8,
    name: "Battery Replacement",
    price: 100,
    forCars: [
      { make: "Toyota", models: ["Camry", "Corolla"] },
      { make: "Honda", models: ["Civic", "Accord"] }
    ],
    category: "Repair"
  },
  {
    id: 9,
    name: "Wheel Alignment",
    price: 70,
    forCars: [
      { make: "Audi", models: ["A4", "Q5"] },
      { make: "Lexus", models: ["RX", "IS"] }
    ],
    category: "Maintenance"
  }
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

const SearchPage = ({ carsData, services }) => {
  const { make, model, years, setMake, setModel, setYears } = useCarStore();

  const { cartItems, addToCart, removeFromCart, clearCart, getTotalCost, removeOneFromCart } = useCartStore();

  const [filteredServices, setFilteredServices] = useState([]);

  console.log("SSSSSS", services);

  const router = useRouter();

  const [edit, setEdit] = useState(true);

  const searchParams = useSearchParams();

  const mak = searchParams.get("make");
  const mod = searchParams.get("model");
  const ye = searchParams.get("years");

  useEffect(() => {
    if (!mak || !mod || !ye) {
      setFilteredServices([]);
      router.push(`/shop-services?make=Audi&model=A4&years=2015-2020`);
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
    router.replace(`/shop-services?make=${make}&model=${model}&years=${newYears}`);
  };

  const handleAddToCart = (service) => {
    addToCart(service);
  };

  return (
    <section className="min-h-[calc(100vh-3.5rem)] ">
      <div className="mx-auto mb-44 h-full w-full max-w-screen-2xl">
        {/* <div className=" grid min-h-[calc(100vh-3.5rem)] grid-cols-12 border-x border-dashed ">
          <div className="relative col-span-1">
            <div className="left-0 top-0 h-full w-full">
              <div className="absolute left-0  h-full w-full bg-gradient-to-r from-transparent via-transparent to-[#f9fafc] dark:to-[#2b2b2b]"></div>
              <div className="absolute left-0 top-0 h-[15%] w-full bg-gradient-to-t from-transparent via-transparent to-[#FFFFFF] dark:to-[#2e2e2e]"></div>
            </div>
          </div>
          <div className="col-span-8 h-full w-full  px-5"> */}
        <div className=" grid min-h-[calc(100vh-3.5rem)] grid-cols-12 border-x border-dashed ">
          <div className="col-span-9 h-full w-full  px-5">
            <div className="mx-auto w-full max-w-[90%] py-5 text-lg font-semibold">Search Service</div>
            <div className="mx-auto h-auto min-h-[6rem] bg-neutral-100 dark:bg-neutral-600">
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
                  <div className="pl-2 text-sm text-neutral-700 dark:text-neutral-300 ">Available services for:</div>
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
            <div className="p-5">
              <ul className="divide-y divide-gray-300">
                {/* {filteredServices.map((service) => ( */}
                {[services].map((service, idx) => (
                  <li key={idx} className="flex items-center justify-between py-3">
                    <div className="flex gap-2 ">
                      <div>{idx + 1}.</div>
                      <span className="">{service.title}</span>
                      {/* <span className="font-semibold">{service.name}</span> */}
                      <span className="text-gray-600">${service.price}</span>
                    </div>
                    <button onClick={() => handleAddToCart(service)} className="rounded bg-blue-500 px-4 py-1 text-white hover:bg-blue-600">
                      Add to Cart
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative col-span-3">
            <div className="absolute left-0 top-0 z-10 h-full w-full pb-20">
              <div className="mx-auto w-full max-w-[90%] py-5 text-lg font-semibold">Cart:</div>
              <div className=" sticky  top-10 mx-auto w-full max-w-[90%] rounded-lg border border-neutral-300 bg-white p-10 shadow-md dark:border-neutral-500 dark:bg-neutral-700">
                <div>
                  <div>
                    <div className="mb-2 font-semibold ">Car:</div>
                    <div>
                      {make}, {model}, {years}
                    </div>
                  </div>
                  <hr className="my-3" />
                  <div className="mb-2 font-semibold">Summary:</div>
                  <div className="grid grid-cols-7">
                    <div className="col-span-5">Name</div>
                    <div className="col-span-1">Price</div>
                    <div className="col-span-1"></div>
                  </div>
                  <ul className="max-h-[500px] overflow-auto">
                    {cartItems.map((item) => (
                      <li key={item.id} className=" my-2 bg-slate-50">
                        <div className="grid grid-cols-7">
                          <div className="col-span-5">{item.name}</div>
                          <div className="col-span-1">${item.price}</div>
                          <button className="col-span-1" onClick={() => removeOneFromCart(item.id)}>
                            x
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex justify-between py-3">
                    <button onClick={clearCart} className="text-neutral-500 underline underline-offset-2">
                      Clear
                    </button>
                    <p className="font-bold">Total: ${getTotalCost()}</p>
                  </div>
                  <Button className="mt-5 w-full" variant={cartItems.length > 0 ? "" : "outline"} disabled={!(cartItems.length > 0)}>
                    Make Reservation
                  </Button>
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

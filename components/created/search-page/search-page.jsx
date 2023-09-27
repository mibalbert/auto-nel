/**
 * SearchBarSearchPage.js
 */
"use client";

import { Button } from "@/components/ui/button";
import { useCarStore, useCartStore } from "@/store/store";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import StoreCategoryCards from "./store-category-cards";

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
  console.log("first", data);
  //
  const oo = data.filter((el) => el.make === make && el.model === model && el.productionYears === productionYears);

  // const oo = data.filter((el) => "Audi" === make);

  const op = oo.map((el) => el.url);
  // console.log("dataaaa", data);

  return data[0].url;
};

const SearchPage = ({ carsData, services }) => {
  const { make, model, years, carImage, setMake, setModel, setYears, setCarImage } = useCarStore();

  const { cartItems, addToCart, clearCart, getTotalCost, removeOneFromCart } = useCartStore();

  const router = useRouter();

  const [edit, setEdit] = useState(true);

  const searchParams = useSearchParams();

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

  /////// To-do, make the cart into a button or add it to the nav-bar when smaller in size and

  return (
    <section className="relative mx-auto grid h-full min-h-[calc(100vh-3.5rem)] max-w-screen-2xl grid-cols-12 border-x border-dashed  ">
      <div className="relative col-span-12 h-full w-full p-2 xl:col-span-9 xl:px-10">
        <div className="h-full w-full bg-gradient-to-b from-transparent via-neutral-200 to-transparent dark:via-neutral-700 ">
          <div className="flex h-full max-h-[180px] w-full">
            <div className="flex h-full w-2/3 pt-10">
              <div className="mx-auto flex h-full w-1/2 flex-col ">
                <div className="font-serif text-3xl">Search Service...</div>
                <div className="font-serif text-sm">We offer over 300 services to choose from:</div>
              </div>
            </div>
            <div className="relative flex h-full w-1/3 items-end">
              <div className="relative h-full w-full">
                <Image src={carImage || "/2019_mb_g63_amg_0000-first-side.png"} alt="asdasd" width={500} height={500} priority className="h-full w-full scale-x-[-1] transform object-contain" />
              </div>
            </div>
          </div>
          {/* <div className="supports-backdrop-blur:bg-neutral-100/60 relative -top-10 mx-auto h-auto min-h-[6rem] bg-neutral-100/70 backdrop-blur dark:bg-neutral-600"> */}
          <div className="supports-backdrop-blur:bg-neutral-100/60 relative -top-10 mx-auto h-auto min-h-[6rem] rounded-t-lg bg-gradient-to-r from-neutral-700 via-neutral-700/80 to-neutral-700/30  pb-4 pt-2  backdrop-blur dark:bg-neutral-100/70">
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
          <div className="px-10 ">
            <StoreCategoryCards data={services} />
          </div>
          <div className="flex h-full max-h-[250px] w-full">
            <div className="relative flex h-full w-1/3 items-end">
              <div className="relative h-full w-full">
                <Image src={carImage || "/2019_mb_g63_amg_0000-first-side.png"} alt="asdasd" width={500} height={500} priority className="h-full w-full transform object-contain" />
              </div>
            </div>
            <div className="flex h-full w-2/3 justify-center pt-10">
              <div className="flex h-1/2 w-1/2 flex-col justify-between">
                <div className="font-serif text-3xl">Search Service...</div>
                <Button>Contact-Us </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative col-span-12 h-full xl:col-span-3">
        <div className="absolute left-0 top-0 z-10 h-full w-full pb-20">
          <div className="mx-auto w-full max-w-[90%] py-5 text-lg font-semibold">Cart:</div>
          <div className=" sticky  top-10 mx-auto w-full max-w-[90%] rounded-lg border border-neutral-300 bg-white px-5 py-10 shadow-md dark:border-neutral-500 dark:bg-neutral-700 xl:px-10 xl:py-10">
            <div>
              <div>
                <div className="mb-2 font-semibold ">Car:</div>
                <div>
                  {make}, {model}, {years}
                </div>
              </div>
              <hr className="my-3" />
              <div className="mb-2 text-center font-semibold">Summary</div>
              <div className="grid grid-cols-7">
                <div className="col-span-5">Name</div>
                <div className="col-span-1">Price</div>
                <div className="col-span-1"></div>
              </div>
              <div className="max-h-[500px] overflow-auto">
                {cartItems.map((item) => (
                  <div key={item.id} className="my-2 bg-slate-50 dark:bg-neutral-800 dark:text-white">
                    <div className="grid grid-cols-7">
                      <div className="col-span-5 flex items-center  overflow-hidden px-2 py-1 text-sm">{item.title}</div>
                      <div className="col-span-1 flex  items-center  justify-center py-1 text-sm">${item.price}</div>
                      <button className="col-span-1  flex items-center justify-center py-1" onClick={() => removeOneFromCart(item.id)}>
                        x
                      </button>
                    </div>
                  </div>
                ))}
              </div>
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
        {/* <div className="absolute left-0 right-0 h-full w-[50%] bg-gradient-to-l from-transparent via-transparent to-[#f9fafc] dark:to-[#2b2b2b]"></div> */}
        <div className="absolute left-0 right-0 h-full w-[50%] bg-gradient-to-l from-transparent via-transparent to-[#f3f3f3] dark:to-[#2b2b2b]"></div>
        <div className="absolute right-0 top-0 h-[15%] w-full bg-gradient-to-t from-transparent via-transparent to-[#FFFFFF] dark:to-[#2e2e2e]"></div>
        <div className="absolute bottom-0 right-0 h-[15%] w-full bg-gradient-to-b from-transparent via-transparent to-[#FFFFFF] dark:to-[#2e2e2e]"></div>
      </div>
    </section>
  );
};

export default SearchPage;
{
  /* <div className="absolute bottom-0 left-0 right-0 z-0 h-[15%] w-full bg-gradient-to-b from-transparent via-transparent to-[#ecedef] dark:to-[#2b2b2b]"></div> */
}

// <ul className="divide-y divide-gray-300">
//   {[services].map((service, idx) => (
//     <li key={idx} className="flex items-center justify-between py-3">
//       <div className="flex gap-2 ">
//         <div>{idx + 1}.</div>
//         <span className="">{service.title}</span>
//         <span className="text-gray-600">${service.price}</span>
//       </div>
//       <button onClick={() => handleAddToCart(service)} className="px-4 py-1 text-white bg-blue-500 rounded hover:bg-blue-600">
//         Add to Cart
//       </button>
//     </li>
//   ))}
// </ul>

{
  // /* <div className=" grid min-h-[calc(100vh-3.5rem)] grid-cols-12 border-x border-dashed ">
  //         <div className="relative col-span-1">
  //           <div className="top-0 left-0 w-full h-full">
  //             <div className="absolute left-0  h-full w-full bg-gradient-to-r from-transparent via-transparent to-[#f9fafc] dark:to-[#2b2b2b]"></div>
  //             <div className="absolute left-0 top-0 h-[15%] w-full bg-gradient-to-t from-transparent via-transparent to-[#FFFFFF] dark:to-[#2e2e2e]"></div>
  //           </div>
  //         </div>
  //         <div className="w-full h-full col-span-8 px-5"></div> */
}

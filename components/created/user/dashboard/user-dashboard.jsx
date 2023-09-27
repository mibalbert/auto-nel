/**
 * user-dashboard.jsx
 */

"use client";

import useEmblaCarousel from "embla-carousel-react";
// import UserDashboardCard from "@/components/created/user/dashboard/user-dashboard-card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const UserDashboard = ({ data, session }) => {
  const cars = data.cars;

  const [showCarousel, setShowCarousel] = useState(cars.length > 2);
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    dragFree: true,
    align: "center",
    containScroll: "trimSnaps"
  });

  return (
    <section className="px-5">
      <div className="flex w-full justify-between px-3 pb-3">
        <h2>
          Hi, <span className="font-semibold">{session.user.name}</span>
        </h2>
        <div>
          <Button variant="outline" className="border-dashed dark:border-neutral-200">
            + Add a new Car
          </Button>
        </div>
      </div>
      <section className="">
        {!showCarousel ? (
          <div className="grid min-h-[200px] grid-cols-3 gap-10">
            {cars.slice(0, 2).map((el, idx) => (
              <Link key={idx} href={`/`} className="group relative h-full w-full rounded-lg border border-dashed border-neutral-300">
                <div className="absolute -top-16 left-0 h-full w-full">
                  <Image src={el.ShowcaseCar.image[0]?.url || "/2019_mb_g63_amg_0000-first-side.png"} alt="" priority fill className="transform object-contain duration-400 group-hover:scale-98" />
                </div>
                <div className="absolute -bottom-14 left-0 z-50 h-full w-full transform p-3 duration-300 group-hover:scale-105">
                  <div className="supports-backdrop-blur:bg-neutral-700/80 h-full w-full rounded-lg border p-5 backdrop-blur-md">
                    <div className="rounded-lg bg-white/70 px-4 py-2">
                      <div className="flex text-2xl font-bold text-neutral-900">
                        {el.make} {el.model}
                      </div>
                      <div>
                        <div>CP:116</div>
                        <div>Engine:1995cm3</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            {cars.length < 2 && (
              <div className="col-span-1 flex items-center justify-center">
                <div>Make a new Reservation</div>
              </div>
            )}
            <div className="col-span-1 flex items-center justify-center">
              <div>Make a new Reservation</div>
            </div>
          </div>
        ) : (
          // <div className={cn(`grid min-h-[200px]  gap-10`, `grid-cols-${cars.length + 1}`)}>
          <div className="relative h-auto w-full overflow-hidden py-5">
            <div className="embla relative flex h-auto w-full gap-10" ref={emblaRef}>
              <div className="embla__container relative mx-2 flex h-auto touch-pan-y items-center gap-16 py-10 pb-32">
                {cars.map((el, idx) => (
                  <Link
                    key={idx}
                    href={`/user/cars/${el.id}+${el.make}+${el.model}`}
                    className="embla__slide group relative h-auto min-h-[200px] w-full min-w-[180px] max-w-[40%] rounded-lg border border-dashed border-neutral-300  hover:cursor-pointer  active:cursor-grabbing"
                  >
                    <div className="absolute -top-16 left-0 flex h-full w-full ">
                      <Image
                        src={el.ShowcaseCar?.image[0]?.url || "/2019_mb_g63_amg_0000-first-side.png"}
                        alt={el.ShowcaseCar?.image[0]?.title || "Car Image"}
                        priority
                        fill
                        className="h-full w-full transform object-contain object-bottom duration-400 group-hover:scale-98"
                      />
                    </div>
                    <div className="absolute -bottom-14 left-0 z-50 h-full w-full transform p-3 duration-300 group-hover:scale-105">
                      <div className="supports-backdrop-blur:bg-neutral-700/80 h-auto w-full rounded-lg border backdrop-blur-md ">
                        {/* <div className="flex flex-col w-full h-auto gap-3 px-4 py-2 rounded-lg supports-backdrop-blur:bg-neutral-700/80 bg-white/50 backdrop-blur-lg dark:bg-neutral-800/50 "> */}
                        <div className="flex h-auto w-full flex-col gap-3 rounded-lg bg-gradient-to-b from-neutral-300/60 from-20% via-transparent to-transparent p-8 dark:from-neutral-800/60">
                          <div className="flex text-2xl font-bold text-neutral-900 dark:text-neutral-300">
                            {el.make} {el.model}
                          </div>
                          <div className="grid grid-cols-2 grid-rows-3">
                            <div>CP:116</div>
                            <div>Engine:1995cm3</div>
                            <div>Engine:1995cm3</div>
                            <div>Engine:1995cm3</div>
                            <div>Engine:1995cm3</div>
                            <div>Engine:1995cm3</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
                <div className="embla__slide group relative h-full min-h-[180px] w-full min-w-[180px] max-w-[30%] rounded-lg border border-dashed border-neutral-300  hover:cursor-pointer  active:cursor-grabbing">
                  asdasdsa
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </section>
  );
};

export default UserDashboard;

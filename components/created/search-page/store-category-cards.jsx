/**
 * StoreCategoryCards.jsx
 */

import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { v4 as uuidv4 } from "uuid";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/store";

function generateSmallUUID() {
  // Generate a UUID and remove dashes to make it small
  const uuid = uuidv4().replace(/-/g, "");
  return uuid;
}

const StoreCategoryCards = ({ data }) => {
  const { cartItems, addToCart } = useCartStore();

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [oo, setOo] = useState(null);

  const [emblaRef] = useEmblaCarousel({
    loop: false,
    dragFree: true,
    align: "center",
    containScroll: "trimSnaps"
  });

  const handleAddToCart = (service) => {
    const smallUUID = generateSmallUUID();

    console.log("service", service);

    addToCart({ ...service, id: smallUUID.slice(0, 5), realId: service.id });
  };

  return (
    <section className="mx-auto flex flex-col gap-10 pb-20 ">
      <div className="relative h-full w-full overflow-hidden rounded-lg border border-neutral-200 bg-white px-7 py-9 dark:border-neutral-800 dark:bg-neutral-700">
        <div className="embla relative gap-10 " ref={emblaRef}>
          <div className="embla__container relative mx-2 flex h-full touch-pan-y gap-5 ">
            {[data.category].map((data, id) => (
              <div
                key={id}
                className={cn(
                  "embla__slide min-h-[80px] min-w-[180px] max-w-[20%] rounded-lg border border-dashed  border-neutral-700 bg-white hover:cursor-pointer active:cursor-grabbing  dark:border-neutral-500  dark:bg-neutral-600",
                  selectedCategory === id && " outline"
                )}
                onClick={(e) => {
                  if (selectedCategory === id) {
                    setSelectedCategory(null);
                  } else {
                    setSelectedCategory(id);
                    setOo(e.target.value);
                  }
                }}
              >
                <div className="py-4 text-4xl font-bold text-neutral-200 ">Service {data}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div>ASd</div>
        {data.map((service, idx) => {
          return (
            <div key={idx} className="flex justify-between gap-10 rounded-lg border border-neutral-300 bg-white p-7 dark:border-neutral-600 dark:bg-neutral-600 ">
              <div className="flex-1">
                <div className="flex h-10 space-x-4">
                  <div className="flex h-full w-1/3 items-center justify-start">
                    <h4 className="text-md font-medium leading-none">
                      {idx + 1}. {service.title}
                    </h4>
                  </div>
                  <Separator orientation="vertical" />
                  <div className="max-w-2/3 flex h-full w-full items-center justify-start">
                    <p className="text-sm text-muted-foreground">An open-source UI component library.</p>
                  </div>
                </div>
                <Separator className="my-4 bg-neutral-50 dark:bg-neutral-600" />
                <div className="flex h-5 items-center space-x-4 text-sm">
                  <div>Blog</div>
                  <Separator orientation="vertical" />
                  <div>Docs</div>
                  <Separator orientation="vertical" />
                  <div>Source</div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Button variant={"outline"} onClick={() => handleAddToCart(service)} className="h-full w-full border-neutral-500">
                  Add to Cart
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StoreCategoryCards;

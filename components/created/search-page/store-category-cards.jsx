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

    addToCart({ ...service, id: smallUUID.slice(0, 5), realId: service.id });

    console.log(cartItems);
  };

  return (
    <section className="flex flex-col gap-10 pb-20 mx-auto ">
      <div className="relative w-full h-full overflow-hidden border rounded-lg border-neutral-200 px-7 py-9">
        <div className="relative gap-10 embla " ref={emblaRef}>
          <div className="relative flex h-full gap-5 mx-2 embla__container touch-pan-y ">
            {[data.category].map((data, id) => (
              <div
                key={id}
                className={cn(
                  "embla__slide min-h-[180px] min-w-[180px] max-w-[20%] rounded-lg border border-dashed border-neutral-500 bg-white  hover:cursor-pointer  active:cursor-grabbing",
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
                <div className="p-10">{data}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div>ASd</div>
        {data.map((service, idx) => {
          return (
            <div key={idx} className="flex justify-between gap-10 border rounded-lg border-neutral-300 p-7 ">
              <div className="flex-1">
                <div className="flex h-10 space-x-4">
                  <div className="flex items-center justify-start w-1/3 w-full h-full">
                    <h4 className="font-medium leading-none text-md">
                      {idx + 1}. {service.title}
                    </h4>
                  </div>
                  <Separator orientation="vertical" />
                  <div className="flex items-center justify-start w-2/3 w-full h-full">
                    <p className="text-sm text-muted-foreground">An open-source UI component library.</p>
                  </div>
                </div>
                <Separator className="my-4 bg-neutral-50 dark:bg-neutral-600" />
                <div className="flex items-center h-5 space-x-4 text-sm">
                  <div>Blog</div>
                  <Separator orientation="vertical" />
                  <div>Docs</div>
                  <Separator orientation="vertical" />
                  <div>Source</div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Button variant={"outline"} onClick={() => handleAddToCart(service)} className="w-full h-full border-neutral-500">
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

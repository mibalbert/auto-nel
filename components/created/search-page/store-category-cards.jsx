/**
 * StoreCategoryCards.jsx
 */

import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";

const categories = [
  {
    id: 1,
    title: "First Category"
  },
  {
    id: 2,
    title: "First Category"
  },
  {
    id: 3,
    title: "First Category"
  },
  {
    id: 4,
    title: "First Category"
  }
];

const StoreCategoryCards = () => {
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    dragFree: true,
    align: "center",
    containScroll: "trimSnaps"
  });

  return (
    <section className="mx-auto ">
      <div className="relative h-full w-full overflow-hidden px-5">
        <div className="embla relative gap-10 " ref={emblaRef}>
          <div className="embla__container overflow-hidden pl-5">
            {categories.map((data, id) => (
              <motion.div key={id} initial={{ opacity: 0.3, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.1 * id }} className="embla__slide  max-w-[20%]">
                <div>
                  <div>{data.title}</div>
                  {/* <div>{serv.description}</div> */}
                </div>
                <div>
                  <p>Card Content</p>
                </div>
                <div>
                  <p>Card Footer</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreCategoryCards;

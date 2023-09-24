/**
 * Hero.jsx
 */

import Hero2 from "./Hero2";
import prisma from "@/lib/prisma";

const getCars = async () => {
  const data = await prisma.showcaseCar.findMany({
    select: {
      make: true,
      model: true,
      productionYears: true,
      image: {
        select: {
          filename: true,
          carPose: true,
          url: true
        }
      }
    }
  });

  let images = [];
  data.forEach((el) => {
    el.image.forEach((img) => {
      images.push(img);
    });
  });
  return { data, images };
};

const Hero = async () => {
  const cars = await getCars();

  return (
    <div>
      <Hero2 carsData={cars} />
    </div>
  );
};

export default Hero;

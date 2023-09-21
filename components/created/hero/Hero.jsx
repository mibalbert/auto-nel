import React from "react";
import Hero2 from "./Hero2";
import prisma from "@/lib/prisma";

const getCars = async () => {
  const data = await prisma.showcaseCar.findMany({
    select: {
      make: true,
      model: true,
      productionYears: true,
      sourceLink: true
    }
  });
  return data;
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

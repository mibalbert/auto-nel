/**
 * car/[carId]/page.jsx
 */

import UpdateCarForm from "@/components/created/admin-car/update-car-form";
import prisma from "@/lib/prisma";
import React from "react";

const Car = async ({ params }) => {
  const car = await prisma.car.findUnique({
    where: { id: +params.carId },
  });

  const carSpecs = car.specs || {};

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        {car.make} {car.model} ({car.year})
      </h1>
      <UpdateCarForm carId={car.id} carSpecs={carSpecs} />
    </div>
  );
};

export default Car;

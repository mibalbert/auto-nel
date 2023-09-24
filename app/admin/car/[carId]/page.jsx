/**
 * car/[carId]/page.jsx
 */

// import UpdateCarForm from "@/components/created/admin-car/update-car-form";
import prisma from "@/lib/prisma";
import React from "react";

const Car = async ({ params }) => {
  const car = await prisma.car.findUnique({
    where: { id: +params.carId }
  });

  const carSpecs = car.specs || {};

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">
        {car.make} {car.model} ({car.year})
      </h1>
      {/* <UpdateCarForm carId={car.id} carSpecs={carSpecs} /> */}
    </div>
  );
};

export default Car;

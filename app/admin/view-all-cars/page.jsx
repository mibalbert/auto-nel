/**
 * view-all-cars.jsx
 */

import prisma from "@/lib/prisma";

import { carColumns } from "@/components/table/columns";
import { CarDataTable } from "@/components/table/data-table";
import { allCarsSchema } from "@/components/table/data/schema";
import { z } from "zod";

import { ColumnsViewAllCars } from "@/components/created/new-table/column-view-all-cars";
import DataTableViewAllCars from "@/components/created/new-table/data-table-view-all-cars";

const getAllCars = async () => {
  const data = await prisma.car.findMany({
    // where: {
    // ownerId: {
    //   not: null,
    // },
    // },
    // include: {
    //   owner: {
    //     select: {
    //       firstName: true,
    //       lastName: true,
    //       name: true, // Include the 'name' field from the 'owner' relation
    //     },
    //   },
    // },
  });

  // clmar9vev0009urt4v24jpfd2 Mib
  // clm6adwd00000urz8y23vfusp Bit
  // clmar2id90001urt4kxrybbnv John

  // const cars = JSON.parse(data.toString());

  // const oo = data.map(({ specs, ...rest }) => rest);

  const oo = data.map((car, index) => {
    const { owner, ...restCar } = car; // Destructure 'owner' and capture the rest of the properties
    return {
      ...restCar,
      id: index + 1,
      CarId: car.id,
    };
  });

  console.log(oo);
  // return z.array(allCarsSchema).parse(oo);
  return oo;
};

const ViewAllCarsDB = async () => {
  const cars = await getAllCars();

  return (
    <div className="flex-col flex-1 hidden h-full p-8 space-y-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of your tasks for this month!
          </p>
        </div>
      </div>

      <DataTableViewAllCars columns={ColumnsViewAllCars} data={cars} />
    </div>
  );
};
export default ViewAllCarsDB;

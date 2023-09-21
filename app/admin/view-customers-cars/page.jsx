/**
 * view-all-cars/page.jsx
 */

import { promises as fs } from "fs";
import path from "path";
import { Metadata } from "next";
import Image from "next/image";
import { z } from "zod";

import { carColumns } from "@/components/table/columns";
import { CarDataTable } from "@/components/table/data-table";

import { carsSchema } from "@/components/table/data/schema";
import prisma from "@/lib/prisma";
import DataTableViewAllCars from "@/components/created/new-table/data-table-vieew-showcase-cars";
import { ColumnsViewAllCarsRegistered } from "@/components/created/new-table/column-view-all-cars-registered";
// export const metadata = {
//   title: "Tasks",
//   description: "A task and issue tracker build using Tanstack Table.",
// };

// Simulate a database read for tasks.
async function getAllCars() {
  const data = await prisma.customerCar.findMany({
    where: {
      ownerId: {
        not: null
      }
    },
    include: {
      owner: {
        select: {
          firstName: true,
          lastName: true,
          name: true // Include the 'name' field from the 'owner' relation
        }
      }
    }
  });

  // clmar9vev0009urt4v24jpfd2 Mib
  // clm6adwd00000urz8y23vfusp Bit
  // clmar2id90001urt4kxrybbnv John

  // const cars = JSON.parse(data.toString());

  // const oo = data.map(({ specs, ...rest }) => rest);

  console.log(data);

  const oo = data.map((car, index) => {
    const { owner, ...restCar } = car; // Destructure 'owner' and capture the rest of the properties
    const ownerName = owner ? (owner.name !== null && owner.name !== undefined ? owner.name : owner.firstName + " " + owner.lastName) : owner.name;

    return {
      ...restCar,
      id: index + 1,
      CarId: car.id,
      ownerName: ownerName
    };
  });

  console.log(oo);

  return z.array(carsSchema).parse(oo);
}

const ViewAllCars = async () => {
  const cars = await getAllCars();

  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Customers Cars</h2>
          <p className="text-muted-foreground">Here&apos;s a list of all the cars registerd by your customers</p>
        </div>
      </div>
      {/* <DataTableViewAllCars columns={ColumnsViewAllCars} data={cars} /> */}

      <DataTableViewAllCars columns={ColumnsViewAllCarsRegistered} data={cars} />
    </div>
  );
};

export default ViewAllCars;

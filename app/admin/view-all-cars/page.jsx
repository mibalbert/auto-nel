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

// export const metadata = {
//   title: "Tasks",
//   description: "A task and issue tracker build using Tanstack Table.",
// };

// Simulate a database read for tasks.
async function getAllCars() {
  const data = await prisma.car.findMany();

  // const cars = JSON.parse(data.toString());

  console.log("THE DATA", data);

  return z.array(carsSchema).parse(data);
}

const ViewAllCars = async () => {
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
      <CarDataTable data={cars} columns={carColumns} />
    </div>
  );
};

export default ViewAllCars;

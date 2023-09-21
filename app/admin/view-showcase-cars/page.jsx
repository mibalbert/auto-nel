// /**
//  * view-all-cars.jsx
//  */

// import prisma from "@/lib/prisma";

// // import { carColumns } from "@/components/table/columns";
// // import { CarDataTable } from "@/components/table/data-table";
// // import { allCarsSchema } from "@/components/table/data/schema";
// // import { z } from "zod";

// import { ColumnsViewAllCars } from "@/components/created/new-table/column-view-all-cars";
// import DataTableViewAllCars from "@/components/created/new-table/data-table-vieew-showcase-cars";

// const getAllCars = async () => {
//   const data = await prisma.showcaseCar.findMany({
//     select: {
//       id: true,
//       make: true,
//       model: true,
//       productionYears: true
//     }
//   });

//   const oo = data.map((car, index) => {
//     return {
//       ...car,
//       id: index + 1,
//       CarId: car.id
//     };
//   });

//   // return z.array(allCarsSchema).parse(oo);
//   return oo;
// };

// const ViewShowcaseCars = async () => {
//   console.log("asd");
//   const cars = await getAllCars();

//   return (
//     <div className="flex-col flex-1 hidden h-full p-8 space-y-8 md:flex">
//       <div className="flex items-center justify-between space-y-2">
//         <div>
//           <h2 className="text-2xl font-bold tracking-tight">Showcase Cars</h2>
//           <p className="text-muted-foreground">Here&apos;s a list of all the showcase cars</p>
//         </div>
//       </div>

//       <DataTableViewAllCars columns={ColumnsViewAllCars} data={cars} />
//     </div>
//   );
// };
// export default ViewShowcaseCars;

import { DataTable } from "@/components/created/shared/data-table";
import { columns } from "@/components/created/admin/view-showcase-cars/columns";
import prisma from "@/lib/prisma";

async function getData() {
  const data = await prisma.showcaseCar.findMany({
    select: {
      id: true,
      make: true,
      model: true
    }
  });

  const modifiedData = data.map((car, index) => ({
    ...car,
    id: index + 1,
    href: data.id
  }));

  return modifiedData;
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}

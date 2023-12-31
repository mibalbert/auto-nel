/**
 * jobs.jsx
 */

import prisma from "@/lib/prisma";

const Jobs = async () => {
  try {
    const data = await prisma.user.findMany();

    if (!data || data.length === 0) {
      // Handle the case where no quote was found
      return (
        <div>
          <p>No data found.</p>
        </div>
      );
    }

    return (
      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  } catch (error) {
    console.error(error);
    // Handle the error gracefully, e.g., show an error message
    return (
      <div>
        <p>There was an error fetching jobs.</p>
      </div>
    );
  }
};

export default Jobs;

// /**
//  * view-all-clients/page.jsx
//  */

// import { promises as fs } from "fs";
// import path from "path";
// import Image from "next/image";
// import { z } from "zod";

// import { columns } from "@/components/table/columns";
// import { DataTable } from "@/components/table/data-table";
// import { taskSchema } from "@/components/table/data/schema";
// import prisma from "@/lib/prisma";

// export const metadata = {
//   title: "Tasks",
//   description: "A task and issue tracker build using Tanstack Table.",
// };

// const getData = async () => {
//   const result = await prisma.job.findMany();
//   return result;
// };

// // Simulate a database read for tasks.
// async function getTasks() {
//   const datas = await getData();

//   console.log("THE DATAS", datas);

//   const data = await fs.readFile(
//     path.join(process.cwd(), "/components/table/data/task.json")
//   );

//   const tasks = JSON.parse(data.toString());

//   return z.array(taskSchema).parse(tasks);
// }

// export default async function TaskPage() {
//   const tasks = await getTasks();

//   return (
//     <div className="flex-col flex-1 hidden h-full p-8 space-y-8 md:flex">
//       <div className="flex items-center justify-between space-y-2">
//         <div>
//           <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
//           <p className="text-muted-foreground">
//             Here&apos;s a list of your tasks for this month!
//           </p>
//         </div>
//       </div>
//       <DataTable data={tasks} columns={columns} />
//     </div>
//   );
// }

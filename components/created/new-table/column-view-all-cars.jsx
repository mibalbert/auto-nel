"use client";
import { Button } from "@/components/ui/button";
// import { Person } from
import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

export const ColumnsViewAllCars = [
  // {
  //   id: "select",
  //   header: ({ table }) => {
  //     return (
  //       <Checkbox
  //         checked={table.getIsAllPageRowsSelected()}
  //         onCheckedChange={(value) => {
  //           table.toggleAllPageRowsSelected(!!value);
  //         }}
  //       />
  //     );
  //   },
  //   cell: ({ row }) => {
  //     return (
  //       <Checkbox
  //         checked={row.getIsSelected()}
  //         onCheckedChange={(value) => {
  //           row.toggleSelected(!!value);
  //         }}
  //       />
  //     );
  //   },
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  // {
  //   header: ({ column }) => {
  //     return (
  //       <Button
  //         variant="ghost"
  //         onClick={() => {
  //           column.toggleSorting(column.getIsSorted() === "asc");
  //         }}
  //       >
  //         Person ID
  //         <ArrowUpDown className="ml-2 h-4 w-4" />
  //       </Button>
  //     );
  //   },
  //   accessorKey: "id",
  // },

  {
    header: "#",
    accessorKey: "id",
  },
  {
    header: "Make",
    accessorKey: "make",
  },
  {
    header: "Model",
    accessorKey: "model",
  },
  {
    header: "Year",
    accessorKey: "year",
  },
  // {
  //   header: "Date of Birth",
  //   accessorKey: "date_of_birth",
  //   cell: ({ row }) => {
  //     const date_of_birth = row.getValue("date_of_birth");
  //     const formatted = new Date(date_of_birth).toLocaleDateString();
  //     return <div className="font-medium">{formatted}</div>;
  //   },
  // },
  {
    id: "actions",
    cell: ({ row }) => {
      const car = row.original;
      const carId = car.id;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-8 h-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                navigator.clipboard.writeText(person.first_name.toString());
              }}
            >
              Copy person name
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
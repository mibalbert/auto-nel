"use client";

import { ColumnDef } from "@tanstack/react-table";

export const columns = [
  {
    accessorKey: "id",
    header: "Id"
  },
  {
    accessorKey: "make",
    header: "Make"
  },
  {
    accessorKey: "model",
    header: "Model"
  }
];

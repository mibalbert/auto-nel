/**
 * clients/page.jsx
 */

"use client";

import React, { useState, useMemo, useEffect } from "react";
import ReactDOM from "react-dom";

import { makeData } from "./makeData";

import { Column, ColumnDef, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, Table, useReactTable } from "@tanstack/react-table";
import { redirect, useRouter } from "next/navigation";

///////////////////////////////////////////////////////////////////
/// Add the revalidate data function on any changes to the data, also revalidate after 3 sec,
/// also ADDDDDDDDDD the notifications

function App() {
  const rerender = useState({})[1];

  const [rowSelection, setRowSelection] = useState({});
  const [globalFilter, setGlobalFilter] = useState("");

  const columns = useMemo(
    () => [
      // {
      //   id: "select",
      //   header: ({ table }) => (
      //     <IndeterminateCheckbox
      //       {...{
      //         checked: table.getIsAllRowsSelected(),
      //         indeterminate: table.getIsSomeRowsSelected(),
      //         onChange: table.getToggleAllRowsSelectedHandler()
      //       }}
      //     />
      //   ),
      //   cell: ({ row }) => (
      //     <div className="px-1">
      //       <IndeterminateCheckbox
      //         {...{
      //           checked: row.getIsSelected(),
      //           disabled: !row.getCanSelect(),
      //           indeterminate: row.getIsSomeSelected(),
      //           onChange: row.getToggleSelectedHandler()
      //         }}
      //       />
      //     </div>
      //   )
      // },
      {
        header: "Id",
        columns: [
          {
            accessorKey: "id", // Add an accessor for the "id" field
            cell: (info) => info.getValue() // Cell renderer for the "id" column
          }
        ]
      },
      {
        header: "Name",
        footer: (props) => props.column.id,
        columns: [
          {
            accessorKey: "firstName",
            cell: (info) => info.getValue(),
            footer: (props) => props.column.id
          },
          {
            accessorFn: (row) => row.lastName,
            id: "lastName",
            cell: (info) => info.getValue(),
            header: () => <span>Last Name</span>,
            footer: (props) => props.column.id
          }
        ]
      },
      {
        header: "Info",
        footer: (props) => props.column.id,
        columns: [
          {
            accessorKey: "age",
            header: () => "Age",
            footer: (props) => props.column.id
          },
          {
            header: "More Info",
            columns: [
              {
                accessorKey: "visits",
                header: () => <span>Visits</span>,
                footer: (props) => props.column.id
              },
              {
                accessorKey: "status",
                header: "Status",
                footer: (props) => props.column.id
              },
              {
                accessorKey: "progress",
                header: "Profile Progress",
                footer: (props) => props.column.id
              }
            ]
          }
        ]
      }
    ],
    []
  );

  const router = useRouter();

  const [data, setData] = useState(makeData);
  const refreshData = () => setData(makeData);

  const table = useReactTable({
    data,
    columns,
    state: {
      rowSelection
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true
  });

  // Create a function to filter data based on globalFilter
  const filterData = (data, filterValue) => {
    return data.filter((row) => {
      // Check if any column contains the filterValue
      return Object.values(row).some((value) => String(value).toLowerCase().includes(filterValue.toLowerCase()));
    });
  };

  // Update data state based on globalFilter
  useEffect(() => {
    const filteredData = filterData(makeData, globalFilter);
    setData(filteredData);
  }, [globalFilter]);

  return (
    <div className="overflow-auto p-2">
      <div className="flex w-full justify-end">
        <input value={globalFilter ?? ""} onChange={(e) => setGlobalFilter(e.target.value)} className="font-lg border-block border p-2 shadow" placeholder="Search all columns..." />
      </div>
      <div className="h-2" />
      <table className="h-[500px] min-w-full border border-neutral-600	">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <>
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {header.column.getCanFilter() ? (
                          <div>
                            <Filter column={header.column} table={table} />
                          </div>
                        ) : null}
                      </>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody className="min-h-[500px]">
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id} onClick={() => router.push(`/admin/user/${row.original.id}`)} className=" hover:cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-600">
                {row.getVisibleCells().map((cell) => {
                  return (
                    // <td className={cell.id.includes("_select") ? "hover:cursor-default" : null} key={cell.id}>
                    <td className="" key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        {/* <tfoot>
          <tr>
            <td className="p-1">
              <IndeterminateCheckbox
                {...{
                  checked: table.getIsAllPageRowsSelected(),
                  indeterminate: table.getIsSomePageRowsSelected(),
                  onChange: table.getToggleAllPageRowsSelectedHandler()
                }}
              />
            </td>
            <td colSpan={20}>Page Rows ({table.getRowModel().rows.length})</td>
          </tr>
        </tfoot> */}
      </table>
      <div className="h-2" />
      <div className="flex items-center justify-end gap-2">
        <button className="rounded border p-1" onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()}>
          {"<<"}
        </button>
        <button className="rounded border p-1" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
          {"<"}
        </button>
        <button className="rounded border p-1" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
          {">"}
        </button>
        <button className="rounded border p-1" onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()}>
          {">>"}
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            className="w-16 rounded border p-1"
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      <br />
      <div>
        Showing {table.getRowModel().rows.length} of {table.getPreFilteredRowModel().rows.length} Total Rows
      </div>
      <hr />
      <br />
      {/* <div>
        <button className="p-2 mb-2 border rounded" onClick={() => rerender()}>
          Force Rerender
        </button>
      </div>
      <div>
        <button className="p-2 mb-2 border rounded" onClick={() => refreshData()}>
          Refresh Data
        </button>
      </div>
      <div>
        <button className="p-2 mb-2 border rounded" onClick={() => console.info("rowSelection", rowSelection)}>
          Log `rowSelection` state
        </button>
      </div>
      <div>
        <button className="p-2 mb-2 border rounded" onClick={() => console.info("table.getSelectedRowModel().flatRows", table.getSelectedRowModel().flatRows)}>
          Log table.getSelectedRowModel().flatRows
        </button>
      </div> */}
    </div>
  );
}

function Filter({ column, table }) {
  const firstValue = table.getPreFilteredRowModel().flatRows[0]?.getValue(column.id);

  return typeof firstValue === "number" ? (
    <div className="flex space-x-2">
      <input
        type="number"
        value={column.getFilterValue()?.[0] ?? ""}
        onChange={(e) => column.setFilterValue((old) => [e.target.value, old?.[1]])}
        placeholder={`Min`}
        className="w-24 rounded border shadow"
      />
      <input
        type="number"
        value={column.getFilterValue()?.[1] ?? ""}
        onChange={(e) => column.setFilterValue((old) => [old?.[0], e.target.value])}
        placeholder={`Max`}
        className="w-24 rounded border shadow"
      />
    </div>
  ) : (
    <input type="text" value={column.getFilterValue() ?? ""} onChange={(e) => column.setFilterValue(e.target.value)} placeholder={`Search...`} className="w-36 rounded border shadow" />
  );
}

function IndeterminateCheckbox({ indeterminate, className = "", ...rest }) {
  const ref = React.useRef(null);

  useEffect(() => {
    if (typeof indeterminate === "boolean") {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate]);

  return <input type="checkbox" ref={ref} className={className + " cursor-pointer"} {...rest} />;
}

export default App;

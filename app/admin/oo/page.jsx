/**
 * oo/page.jsx
 */

"use client";

import React from "react";
import PeopleDataTable from "@/components/created/new-table/data-table";
import { columns } from "@/components/created/new-table/column";
import { people } from "@/components/created/new-table/people";

const People = (props) => {
  return (
    <div className="container py-10 mx-auto">
      <PeopleDataTable columns={columns} data={people} />
    </div>
  );
};

export default People;

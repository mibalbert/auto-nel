/**
 * combobox-cars.jsx
 */

"use client";

import { useEffect, useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function CarsCombobox({ setFormData, users }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  // const [users, setUsers] = useState([]); // Declare users state

  // useEffect(() => {
  //   // Fetch users from the API route
  //   fetch("/api/admin/get-users", {
  //     method: "GET",
  //   })
  //     .then((response) => response.json())
  //     .then((result) => {
  //       setUsers(result);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching users:", error);
  //     });
  // }, []);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? users.find((user) => user.firstName === value)?.lastName
            : "Select user..."}
          <ChevronsUpDown className="w-4 h-4 ml-2 opacity-50 shrink-0" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search user..." />
          <CommandEmpty>No users found.</CommandEmpty>
          <CommandGroup>
            {users.map((user) => (
              <CommandItem
                key={user.id} // Use a unique key
                onSelect={() => {
                  setValue(user.firstName); // Set value to firstName
                  setFormData({ user: user.firstName });
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === user.firstName ? "opacity-100" : "opacity-0"
                  )}
                />
                {user.lastName}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

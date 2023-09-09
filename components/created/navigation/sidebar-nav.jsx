/**
 * sidebar-nav.jsx
 */

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { getNavigationConfig } from "@/config/navigation";

export function SidebarNav({ session }) {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(true);

  const { sideNav } = getNavigationConfig("ADMIN");

  const BigButton = ({ item }) => {
    return item.title && item.data ? (
      <CollapsibleTrigger>
        <span
          className={cn(
            "block text-lg text-gray-700 dark:text-gray-500 font-bold mb-1",
            {
              "text-neutral-900 dark:text-white ": pathname === item.href,
            }
          )}
        >
          {item.title}
        </span>
      </CollapsibleTrigger>
    ) : (
      <Link
        href={item.href}
        className={cn(
          "block text-lg text-gray-700 dark:text-gray-500 font-bold mb-1",
          {
            "text-neutral-900 dark:text-white ": pathname === item.href,
          }
        )}
      >
        {item.title}
      </Link>
    );
  };

  return (
    <section className="w-full h-fullbg-card/40 ">
      <div className="flex w-full px-6 py-6">
        <div className="grid w-full grid-flow-row gap-2 text-sm auto-rows-max">
          {sideNav?.map((item, index) => (
            <Collapsible open={isOpen} key={index}>
              <BigButton item={item} />
              <CollapsibleContent>
                {item.data && item.data.length > 0 ? (
                  <ul>
                    {item.data.map((subItem, subIndex) => (
                      // pathname === subItem.href ? setIsOpen(!isOpen) : null,
                      <li key={subIndex}>
                        <Link
                          type="outline"
                          href={subItem.href}
                          className={cn(
                            "flex w-full items-center rounded-md px-3 py-2 hover:outline-dashed",
                            {
                              "bg-neutral-100 outline dark:bg-card-darker":
                                pathname === subItem.href,
                            }
                          )}
                          target={subItem.external ? "_blank" : ""}
                          rel={subItem.external ? "noreferrer" : ""}
                        >
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
}

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

export function SidebarNav({ className, session }) {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(true);

  const { sideNav } = getNavigationConfig(session.user.role);

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
    <section className={cn("w-full h-full bg-card/40 ", className)}>
      <div className="flex w-full px-6 py-6">
        <div className="grid w-full grid-flow-row gap-2 text-sm auto-rows-max">
          {sideNav.map((item, index) => (
            // <Collapsible open={isOpen} key={index}>
            //   <BigButton item={item} />
            //   <CollapsibleContent>
              <div key={index}>
                <div className="text-xl font-semibold dark:text-neutral-400 text-neutral-800">{item.title}</div>
                {item.data && item.data.length > 0 ? (
                  <ul>
                    {item.data.map((subItem, subIndex) => (
                      // pathname === subItem.href ? setIsOpen(!isOpen) : null,
                      <li key={subIndex}>
                        <Link
                          href={subItem.href}
                          className={cn(
                            "relative flex w-full items-center  px-3 py-1.5 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-600",
                            // {
                            //   " ":
                            //     pathname === subItem.href,
                            // }
                          )}
                          target={subItem.external ? "_blank" : ""}
                          rel={subItem.external ? "noreferrer" : ""}
                        >
                          <div className={cn("absolute" , { "w-1 h-[70%]  left-0 rounded-md  bg-blue-600" :pathname === subItem.href})}></div>
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
                </div>
            //   </CollapsibleContent>
            // </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
}

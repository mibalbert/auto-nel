/**
 * sidebar-nav.jsx
 */

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { getNavigationConfig } from "@/config/navigation";

export function SidebarNav({ className, session }) {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(true);

  const { sideNav } = getNavigationConfig(session.user.role);
  const [padding, setPadding] = useState(true);
  const [oo, setOo] = useState(false);
  const [op, setOp] = useState(null);

  useEffect(() => {
    if (pathname.startsWith("/admin")) {
      setPadding(false);
    }

    if (pathname.startsWith("/user/cars/")) {
      let pp = pathname.split("/");
      console.log(pp);
      pp = pp[pp.length - 1].split("+");
      setOp(`${pp[1]} ${pp[2]}`);
      setOo(true);
    } else {
      setOo(false);
    }
  }, [pathname]);

  return (
    <section className={cn("h-full w-full  bg-card/40 ", className)}>
      <div className="flex w-full px-6 py-6">
        <div className="relative grid w-full grid-flow-row auto-rows-max gap-2 text-sm ">
          {oo ? (
            <Link href={pathname} className={cn("relative  flex w-full items-center overflow-hidden  whitespace-nowrap  rounded-md px-3 py-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-600")}>
              <div className={"absolute left-0 h-[70%]  w-0.5 rounded-md   bg-blue-600"}></div>
              {op.length > 13 ? `${op.substring(0, 13)}...` : op}
            </Link>
          ) : (
            <></>
          )}
          <div className={cn("absolute left-0 h-full w-full", padding ? "top-10" : "top-0")}>
            {sideNav.map((item, index) => (
              <div key={index}>
                <div className="text-xl font-semibold text-neutral-800 dark:text-neutral-400">{item.title}</div>
                {item.data && item.data.length > 0 ? (
                  <ul>
                    {item.data.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={subItem.href}
                          className={cn("relative flex w-full items-center  rounded-md px-3 py-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-600")}
                          // target={subItem.external ? "_blank" : ""}
                          // rel={subItem.external ? "noreferrer" : ""}
                        >
                          <div className={cn("absolute", { "left-0 h-[70%]  w-0.5 rounded-md  bg-blue-600": pathname === subItem.href })}></div>
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// const BigButton = ({ item }) => {
//   return item.title && item.data ? (
//     <CollapsibleTrigger>
//       <span
//         className={cn(
//           "block text-lg text-gray-700 dark:text-gray-500 font-bold mb-1",
//           {
//             "text-neutral-900 dark:text-white ": pathname === item.href,
//           }
//         )}
//       >
//         {item.title}
//       </span>
//     </CollapsibleTrigger>
//   ) : (
//     <Link
//       href={item.href}
//       className={cn(
//         "block text-lg text-gray-700 dark:text-gray-500 font-bold mb-1",
//         {
//           "text-neutral-900 dark:text-white ": pathname === item.href,
//         }
//       )}
//     >
//       {item.title}
//     </Link>
//   );
// };

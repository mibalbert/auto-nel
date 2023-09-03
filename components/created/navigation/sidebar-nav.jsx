"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"


export function SidebarNav({ items }) {
  const pathname = usePathname()

  return items.length ? (
    <section className="w-full h-full border-r bg-card/40">
    <div className="flex w-full px-6 py-6">
      <div className="grid w-full grid-flow-row gap-2 text-sm auto-rows-max">
      {items.map((item, index) =>
        !item.disabled && item.href ? (
          <Link
            type="outline"
            key={index}
            href={item.href}
            className={cn(
              "flex w-full items-center rounded-md px-3 py-2 hover:outline-dashed",
              {
                "bg-neutral-100 outline dark:bg-card-darker": pathname === item.href,
              }
            )}
            target={item.external ? "_blank" : ""}
            rel={item.external ? "noreferrer" : ""}
          >
            {item.title}
          </Link>
        ) : (
          <span key={index} className="flex items-center w-full p-2 rounded-md cursor-not-allowed opacity-60">
            {item.title}
          </span>
        )
      )}
    </div>
    </div>
    </section>
  ) : null
}

/**
 * main-nav.jsx
 */

"use client"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { ModeToggle } from "./theme-chooser"
import { useSelectedLayoutSegment } from "next/navigation"

import { Icons } from "@/components/ui/icons"
import { MobileNav } from "@/components/created/navigation/mobile-nav"
import { useState } from "react"


export function LinksNav({ items, children ,className,...props}) {
  const segment = useSelectedLayoutSegment()
  const [showMobileMenu, setShowMobileMenu] = useState(false)


  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
         {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                item.href.startsWith(`/${segment}`)
                  ? "text-foreground"
                  : "text-foreground/60",
                item.disabled && "cursor-not-allowed opacity-80"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
   
      <ModeToggle />
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.backArrow /> : <Icons.plusSign />}
        <span className="font-bold">Menu</span>
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </nav>
  )
}





// export function MainNav({ items, children }: MainNavProps) {
//   return (
//     <div className="flex gap-6 md:gap-10">
//       <Link href="/" className="hidden items-center space-x-2 md:flex">
//         <Icons.logo />
//         <span className="hidden font-bold sm:inline-block">
//           {siteConfig.name}
//         </span>
//       </Link>
//       {items?.length ? (
//         <nav className="hidden gap-6 md:flex">
//           {items?.map((item, index) => (
//             <Link
//               key={index}
//               href={item.disabled ? "#" : item.href}
//               className={cn(
//                 "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
//                 item.href.startsWith(`/${segment}`)
//                   ? "text-foreground"
//                   : "text-foreground/60",
//                 item.disabled && "cursor-not-allowed opacity-80"
//               )}
//             >
//               {item.title}
//             </Link>
//           ))}
//         </nav>
//       ) : null}
//       <button
//         className="flex items-center space-x-2 md:hidden"
//         onClick={() => setShowMobileMenu(!showMobileMenu)}
//       >
//         {showMobileMenu ? <Icons.close /> : <Icons.logo />}
//         <span className="font-bold">Menu</span>
//       </button>
//       {showMobileMenu && items && (
//         <MobileNav items={items}>{children}</MobileNav>
//       )}
//     </div>
//   )
// }

// ``
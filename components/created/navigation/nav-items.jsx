"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import { Badge } from "@/components/ui/badge";
import { getNavigationConfig } from "@/config/navigation";

export function NavItems({ session }) {
  const pathname = usePathname();

  const userRole = session?.user?.role || "GUEST";
  const { topNav } = getNavigationConfig(userRole);

  return (
    <div className="justify-end hidden w-full mr-4 md:flex">
      <nav className="flex items-center space-x-6 text-sm font-medium">
        {topNav.map((el, id) => {
          return (
            <Link
              key={id}
              href={el.href}
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname?.startsWith(el.href)
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              {el.title}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

// /**
//  * main-nav.jsx
//  */
// "use client";

// import { useState } from "react";
// import { usePathname, useSelectedLayoutSegments } from "next/navigation";
// import Link from "next/link";

// import { MobileNav } from "./mobile-nav";
// import { cn } from "@/lib/utils";
// import { ModeToggle } from "./nav-tings/theme-chooser";

// import UserDropdownMenu from "./nav-tings/user-dropdown";
// import SignInModal from "./nav-tings/sign-in-modal";
// import { getNavigationConfig } from "@/config/navigation";

// const MainNav = ({ children, className, session }) => {
//   const segment = useSelectedLayoutSegments();
//   const [showMobileMenu, setShowMobileMenu] = useState(false);
//   const path = usePathname();
//   const userRole = session?.user?.role || "USER";
//   const { topNav } = getNavigationConfig(userRole);

//   return (
//     <section className="relative ">
//       <nav
//         className={cn(
//           " bg-card/40",
//           path.includes("search") && "bg-gray-50 dark:bg-transparent"
//         )}
//       >
//         <div className="container px-4 mx-auto md:px-6">
//           <div className="flex items-center justify-between h-16">
//             <div className="flex items-center space-x-4 md:space-x-6">
//               <Link href="/" className="text-xl font-extrabold sm:inline-block">
//                 Auto Nel
//               </Link>
//               {topNav?.length && (
//                 <nav className="hidden space-x-6 md:flex">
//                   {topNav.map((item, index) => (
//                     <Link
//                       key={index}
//                       href={item.disabled ? "#" : item.href}
//                       className={cn(
//                         "text-lg font-medium transition-colors hover:text-foreground/80 dark:text-gray-100 sm:text-sm",
//                         item.href.startsWith(`/${segment}`)
//                           ? "text-foreground"
//                           : "text-foreground/60",
//                         item.disabled && "cursor-not-allowed opacity-80"
//                       )}
//                     >
//                       {item.title}
//                     </Link>
//                   ))}
//                 </nav>
//               )}
//             </div>
//             <div className="flex items-center space-x-4">
//               <ModeToggle />
//               {!session ? (
//                 <SignInModal />
//               ) : (
//                 <UserDropdownMenu session={session} />
//               )}
//               <button
//                 className="md:hidden"
//                 onClick={() => setShowMobileMenu(!showMobileMenu)}
//               >
//                 {showMobileMenu ? <div>X</div> : <div>Menu</div>}
//               </button>
//             </div>
//           </div>
//         </div>
//         {showMobileMenu && <MobileNav session={session} />}
//       </nav>
//     </section>
//   );
// };

// export default MainNav;

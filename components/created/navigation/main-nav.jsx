"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import { Badge } from "@/components/ui/badge";
import { getNavigationConfig } from "@/config/navigation";

export function MainNav({ session }) {
  const pathname = usePathname();

  const userRole = session?.user?.role || "USER";
  const { topNav } = getNavigationConfig(userRole);

  // console.log("The fucking session", session);

  // console.log("The fucking TopNav", topNav);

  return (
    <div className="justify-between hidden w-full mr-4 md:flex ">
      <Link href="/" className="flex items-center mr-6 space-x-2">
        <Icons.logo className="w-6 h-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/docs/components"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/docs/components")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Components
        </Link>
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

/**
 * main-nav.jsx
 */

"use client";

import { useState } from "react";
import Link from "next/link";
import { Icons } from "@/components/ui/icons";
import { MobileNav } from "./mobile-nav";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./theme-chooser";

import UserDropdownMenu from "./user-dropdown";
import SignInModal from "./sign-in-modal";
import { navigationConfig } from "@/config/navigation";

const MainNav = ({ children, className, session }) => {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const path = usePathname();
  const items = navigationConfig.guestTopNav;

  return (
    // <section className={cn("flex items-center w-full h-14 bg-card/40",className)}>
    <section
      className={cn(
        "flex items-center w-full h-14 ",
        path.includes("search") && "bg-gray-50 dark:bg-transparent"
      )}
    >
      <div className="flex items-center justify-between w-full gap-6 px-12 mx-auto md:gap-10">
        <Link href="/" className="items-center hidden space-x-2 md:flex">
          {/* <Icons.logo /> */}
          <span className="hidden text-xl font-extrabold sm:inline-block">
            Auto Nel
          </span>
        </Link>
        {items?.length ? (
          <nav className="hidden gap-6 md:flex items-center">
            {items?.map((item, index) => (
              <Link
                key={index}
                href={item.disabled ? "#" : item.href}
                className={cn(
                  "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 dark:text-gray-100 sm:text-sm",
                  item.href.startsWith(`/${segment}`)
                    ? "text-foreground"
                    : "text-foreground/60",
                  item.disabled && "cursor-not-allowed opacity-80"
                )}
              >
                {item.title}
              </Link>
            ))}
            <ModeToggle />
            <div>
              {!session ? (
                <SignInModal />
              ) : (
                <UserDropdownMenu session={session} />
              )}
            </div>
          </nav>
        ) : null}
        <button
          className="flex items-center space-x-2 md:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? <Icons.backArrow /> : <Icons.apple />}
          <span className="font-bold">Menu</span>
        </button>
        {showMobileMenu && items && (
          <MobileNav items={items}>{children}</MobileNav>
        )}
      </div>
    </section>
  );
};

export default MainNav;

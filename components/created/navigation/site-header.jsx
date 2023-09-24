/**
 * site-header.jsx
 */

import { ModeToggle } from "@/components/ui/mode-toggle";
import { NavItems } from "./nav-items";
import { MobileNav } from "./mobile-nav";
import SignInModal from "./nav-tings/sign-in-modal";
import Link from "next/link";
import { Icons } from "@/components/ui/icons";
import { siteConfig } from "@/config/site";

export async function SiteHeader({ session }) {
  return (
    <header className="flex h-14 w-full justify-center">
      <div className="flex w-full max-w-screen-2xl justify-between px-2 xl:px-[1%] 2xl:px-[3%]">
        <div className="relative flex h-full w-auto items-center">
          <Link href="/" className="flex w-full items-center justify-end space-x-2 pl-3">
            <Icons.logo className="h-5 w-5" />
            <span className="whitespace-nowrap font-bold sm:inline-block">{siteConfig.name}</span>
          </Link>
        </div>
        <div className="flex h-full items-center justify-end gap-3">
          <NavItems session={session} />
          <MobileNav session={session} />
          <ModeToggle />
          <SignInModal session={session} />
        </div>
      </div>

      {/* <header className="sticky top-0 z-50 w-full supports-backdrop-blur:bg-background/60 bg-background/95 backdrop-blur">
        <div className="flex items-center px-10 md:flex-row-reverse h-14 ">
          <div className="flex items-center justify-between flex-1 space-x-2 md:justify-end">
            <nav className="flex items-center">
              <ModeToggle />
              <SignInModal session={session} />
            </nav>
          </div>
          <NavItems session={session} />
          <MobileNav session={session} />
        </div>
      </header> */}
    </header>
  );
}

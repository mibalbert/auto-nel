/**
 * site-header.jsx
 */

import { ModeToggle } from "@/components/ui/mode-toggle";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import SignInModal from "./nav-tings/sign-in-modal";

export async function SiteHeader({ session }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b supports-backdrop-blur:bg-background/60 bg-background/95 backdrop-blur">
      <div className="flex items-center px-10 md:flex-row-reverse h-14">
        <div className="flex items-center justify-between flex-1 space-x-2 md:justify-end">
          {/* <div className="flex-1 w-full md:w-auto md:flex-none"> */}
          {/* <CommandMenu /> */}
          {/* </div> */}
          <nav className="flex items-center">
            <ModeToggle />
            {/* <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <Icons.gitHub className="w-4 h-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link> */}
            <SignInModal session={session} />
          </nav>
        </div>
        <MainNav session={session} />
        <MobileNav session={session} />
      </div>
    </header>
  );
}

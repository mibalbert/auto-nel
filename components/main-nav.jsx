/**
 * main-nav.jsx
 */

import Link from "next/link"

import { cn } from "@/lib/utils"
import { ModeToggle } from "./created/theme-chooser"
import SignInModal from "./created/sign-in-modal"

export function MainNav({className,...props}) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/examples/dashboard"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Overview
      </Link>
      <Link
        href="/examples/dashboard"
        className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
      >
        Customers
      </Link>
      <Link
        href="/examples/dashboard"
        className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
      >
        Products
      </Link>
      <Link
        href="/examples/dashboard"
        className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
      >
        Settings
      </Link>
      <ModeToggle />
      <SignInModal />
    </nav>
  )
}
/**
 * admin/dashboard/layout.jsx
 */

import { ScrollArea } from "@/components/ui/scroll-area";
import { getServerSession } from "next-auth";
import { SidebarNav } from "@/components/created/navigation/sidebar-nav";
import { authOptions } from "@/lib/auth";

export default async function DashboardLayout({ children }) {
  const session = await getServerSession(authOptions);

  return (
    <div className="mx-auto w-full max-w-[90%] ">
      <div className="flex-1 grid-cols-[250px_minmax(0,1fr)]  items-start md:grid md:gap-0">
        <aside className="fixed z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 lg:sticky lg:block">
          <ScrollArea className="relative h-full px-2 pt-3 xl:px-4">
            <div className="absolute right-0 top-0 h-full w-[50%] bg-gradient-to-r from-transparent via-transparent to-[#F9FAFC] dark:to-[#2b2b2b]"></div>
            <div className="absolute right-0 top-0 h-[15%] w-full bg-gradient-to-t from-transparent via-transparent to-[#FFFFFF] dark:to-[#2e2e2e]"></div>
            <SidebarNav session={session} className="relative z-50" />
          </ScrollArea>
        </aside>
        <div className="px-10 py-5">{children}</div>
      </div>
    </div>
  );
}

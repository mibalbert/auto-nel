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
    <div className="border-b">
      <div className=" flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-0 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-0 ">
        <aside className="fixed  z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block border-r ">
          <ScrollArea className="h-full pl-8 pr-6 ">
            <SidebarNav session={session} />
          </ScrollArea>
        </aside>
        {children}
      </div>
    </div>
  );
}

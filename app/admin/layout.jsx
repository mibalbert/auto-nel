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
    // <div className="">
    //   <div className="flex-1 items-start md:grid md:grid-cols-[200px_minmax(0,1fr)] md:gap-0 xl:grid-cols-[270px_minmax(0,1fr)]  2xl:grid-cols-[350px_minmax(0,1fr)] lg:gap-0">
    //     <aside className="fixed z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 lg:sticky lg:block">
    //       <ScrollArea className="h-full xl:pl-[10%] 2xl:pl-[30%] pr-6 relative">
    //         <div className="absolute top-0 right-0 h-full w-[50%] bg-gradient-to-r from-transparent via-transparent to-[#f9fafc] dark:to-[#2b2b2b]"></div>
    //         <div className="absolute top-0 right-0 w-full h-[15%] bg-gradient-to-t from-transparent via-transparent to-[#FFFFFF] dark:to-[#2e2e2e]"></div>
    //         <SidebarNav session={session} className="relative z-50" />
    //       </ScrollArea>
    //     </aside>
    //     {children}
    //   </div>
    // </div>

    <div className="">
      <div className="flex-1 items-start md:grid md:grid-cols-[200px_minmax(0,1fr)] md:gap-0 lg:gap-0  xl:grid-cols-[300px_minmax(0,1fr)] 2xl:grid-cols-[400px_minmax(0,1fr)]">
        <aside className="fixed z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 lg:sticky lg:block">
          <ScrollArea className="relative h-full pr-6 xl:pl-[20%] 2xl:pl-[50%]">
            <div className="absolute right-0 top-0 h-full w-[50%] bg-gradient-to-r from-transparent via-transparent to-[#F9FAFC] dark:to-[#2b2b2b]"></div>
            <div className="absolute right-0 top-0 h-[15%] w-full bg-gradient-to-t from-transparent via-transparent to-[#FFFFFF] dark:to-[#2e2e2e]"></div>
            <SidebarNav session={session} className="relative z-50" />
          </ScrollArea>
        </aside>
        {children}
      </div>
    </div>
  );
}

// /**
//  * admin/dashboard/layout.jsx
//  */

// import { ScrollArea } from "@/components/ui/scroll-area";
// import { getServerSession } from "next-auth";
// import { SidebarNav } from "@/components/created/navigation/sidebar-nav";
// import { authOptions } from "@/lib/auth";

// export default async function DashboardLayout({ children }) {
//   const session = await getServerSession(authOptions);

//   return (
//     <div className="border-b">
//       <div className=" flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-0 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-0 ">
//         <aside className="fixed  z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block border-r ">
//           <ScrollArea className="h-full pl-8 pr-6 ">
//             <SidebarNav session={session} />
//           </ScrollArea>
//         </aside>
//         {children}
//       </div>
//     </div>
//   );
// }

// /**
//  * admin/dashboard/layout.jsx
//  */

// import { navigationConfig } from "@/config/navigation";
// import { SiteFooter } from "@/components/created/footer/site-footer";
// import { SidebarNav } from "@/components/created/navigation/sidebar-nav";

// export default async function DashboardLayout({ children }) {
//   return (
//     <div className="relative flex-col min-h-screen relativeflex">
//       <div class="absolute  left-0 top-0 w-full h-[35rem]  dark:[mask-image:linear-gradient(white,transparent)]">
//         <div class="absolute inset-0 bg-gradient-to-r from-[#36b456] to-[#75c8ff] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#36b49f]/30 dark:to-[#DBFF75]/30 dark:opacity-100">
//           <svg
//             aria-hidden="true"
//             class="absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black/40 stroke-black/50 mix-blend-overlay dark:fill-white/2.5 dark:stroke-white/5"
//           >
//             <defs>
//               <pattern
//                 id=":S2:"
//                 width="72"
//                 height="56"
//                 patternUnits="userSpaceOnUse"
//                 x="-12"
//                 y="4"
//               >
//                 <path d="M.5 56V.5H72" fill="none"></path>
//               </pattern>
//             </defs>
//             <rect
//               width="100%"
//               height="100%"
//               stroke-width="0"
//               fill="url(#:S2:)"
//             ></rect>
//             <svg x="-12" y="4" class="overflow-visible">
//               <rect
//                 stroke-width="0"
//                 width="73"
//                 height="57"
//                 x="288"
//                 y="168"
//               ></rect>
//               <rect
//                 stroke-width="0"
//                 width="73"
//                 height="57"
//                 x="144"
//                 y="56"
//               ></rect>
//               <rect
//                 stroke-width="0"
//                 width="73"
//                 height="57"
//                 x="504"
//                 y="168"
//               ></rect>
//               <rect
//                 stroke-width="0"
//                 width="73"
//                 height="57"
//                 x="720"
//                 y="336"
//               ></rect>
//             </svg>
//           </svg>
//         </div>
//         <svg
//           viewBox="0 0 1113 440"
//           aria-hidden="true"
//           class="absolute left-1/2 top-0 ml-[-19rem] w-[69.5625rem] fill-white blur-[26px] dark:hidden"
//         >
//           <path d="M.016 439.5s-9.5-300 434-300S882.516 20 882.516 20V0h230.004v439.5H.016Z"></path>
//         </svg>
//       </div>
//       <div className="relative z-10 grid flex-1 md:grid-cols-[200px_1fr]">
//         <aside className="hidden w-[200px] flex-col md:flex">
//           <SidebarNav items={navigationConfig.adminSideNav} />
//         </aside>
//         <main className="relative z-10 flex flex-col flex-1 w-full pt-3 overflow-hidden">
//           {children}
//         </main>
//       </div>
//       <SiteFooter className="border-t" />
//     </div>
//   );
// }
// import { docsConfig } from "@/config/docs";

import { ScrollArea } from "@/components/ui/scroll-area";
import { getServerSession } from "next-auth";
import { SidebarNav } from "@/components/created/navigation/sidebar-nav";
import authOptions from "@/lib/auth";

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

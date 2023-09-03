/**
 * app/page.jsx
 */

import Hero from "@/components/created/hero/Hero";
import MainNav from "@/components/created/navigation/main-nav";

import { navigationConfig } from "@/config/navigation";
export default  function DashboardPage() {
  return (
    <>
    <MainNav items={navigationConfig.guestNav} />
    <Hero />
   
   </>
  )
}
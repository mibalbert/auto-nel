/**
 * app/page.jsx
 */

import Hero from "@/components/created/hero/Hero";
// import NavBar from "@/components/created/navigation/nav-bar";
// import { navigationConfig } from "@/config/navigation";

export default async function DashboardPage() {
  return (
    <>
      {/* <NavBar navigationConfig={navigationConfig.guestTopNav} /> */}
      <Hero />
    </>
  );
}

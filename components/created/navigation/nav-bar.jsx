/**
 * nav-bar.jsx
 */

import MainNav from "@/components/created/navigation/main-nav";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

const NavBar = async () => {
  const session = await getServerSession(authOptions);
  return <MainNav session={session} />;
};

export default NavBar;

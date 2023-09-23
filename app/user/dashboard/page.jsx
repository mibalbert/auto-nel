/**
 * user/dashboard/page.jsx
 */

"use client";
import UserDashboardCard from "@/components/created/user/user-dashboard-card";
import { useSession } from "next-auth/react";

const Dashboard = () => {
  const session = useSession();

  console.log(session);

  return (
    <section className="h-full w-full">
      <div className="">
        <div className="text-lg font-semibold">Hi, {session.data.user.name}!</div>
      </div>
      <UserDashboardCard />

      <div>aslansldnl</div>
    </section>
  );
};

export default Dashboard;

/**
 * user/dashboard/page.jsx
 */

import UserDashboard from "@/components/created/user/dashboard/user-dashboard";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const getData = async (email) => {
  const data = await fetch("http://localhost:3000/api/user/get-user-full-data", {
    method: "POST",
    headers: {
      // Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    // body: JSON.stringify(email)
    body: JSON.stringify({ email: email })
  });

  return await data.json();
};
const Dashboard = async () => {
  const session = await getServerSession(authOptions);
  const { userData } = await getData(session.user.email);

  return (
    <section>
      <UserDashboard data={userData} session={session} />
    </section>
  );
};

export default Dashboard;

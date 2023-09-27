/**
 * view-current-jobs/page.jsx
 */

import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";

const Jobs = async () => {
  const session = await getServerSession();

  try {
    const data = await prisma.user.findMany({
      where: {
        email: session.user.email
      },
      select: {
        jobs: true
      }
    });

    if (!data || !data.jobs || data.jobs.length === 0) {
      // Handle the case where no quote was found
      return (
        <div>
          <p>No jobs found for this user.</p>
        </div>
      );
    }

    return (
      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  } catch (error) {
    console.error(error);
    // Handle the error gracefully, e.g., show an error message
    return (
      <div>
        <p>There was an error fetching the jobs.</p>
      </div>
    );
  }
};

export default Jobs;

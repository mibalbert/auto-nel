/**
 * tasks/page.jsx
 */

import prisma from "@/lib/prisma";

const Tasks = async () => {
  try {
    const data = await prisma.task.findMany();

    if (!data || data.length === 0) {
      // Handle the case where no quote was found
      return (
        <div>
          <p>No tasks found.</p>
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
        <p>There was an error fetching tasks.</p>
      </div>
    );
  }
};

export default Tasks;

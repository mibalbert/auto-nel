/**
 * view-current-jobs/[jobId]/page.jsx
 */

import prisma from "@/lib/prisma";

const ViewIndvJob = async ({ params }) => {
  try {
    const { jobId } = params;
    const data = await prisma.job.findUnique({
      where: {
        // userId: session.user.id,
        id: jobId // Filter by jobId
      },
      select: {
        car: true,
        AvailableService: true,
        Quote: true,
        Invoice: true,
        Payment: true
      }
    });

    if (!data) {
      // Handle the case where no quote was found
      return (
        <div>
          <p>No jobs found for this ID.</p>
        </div>
      );
    }

    return (
      <div className="mx-auto max-w-3xl rounded-lg  p-6 shadow-md">
        <h1 className="mb-4 text-2xl font-semibold">Job Details</h1>
        <table className="w-full table-auto">
          <tbody>
            <tr>
              <td className="font-semibold">Job Name:</td>
              <td>{data.name}</td>
            </tr>
            <tr>
              <td className="font-semibold">Category:</td>
              <td>{data.category}</td>
            </tr>
            <tr>
              <td className="font-semibold">Time:</td>
              <td>{data.time} minutes</td>
            </tr>
            <tr>
              <td className="font-semibold">Price:</td>
              <td>${data.price}</td>
            </tr>
            <tr>
              <td className="font-semibold">Car:</td>
              <td>{data.car.make}</td>
            </tr>
            <tr>
              <td className="font-semibold">Tasks:</td>
              <td>
                <ul>
                  {data.tasks.map((task) => (
                    <li key={task.id}>
                      <strong>{task.title}</strong> - {task.description}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
            {/* Add similar rows for Quote, Invoice, and Payment */}
          </tbody>
        </table>
      </div>
    );
  } catch (error) {
    console.error(error);
    // Handle the error gracefully, e.g., show an error message
    return (
      <div>
        <p>There was an error fetching the job.</p>
      </div>
    );
  }
};

export default ViewIndvJob;

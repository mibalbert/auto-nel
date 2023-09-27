/**
 * services/[serviceId]/page.jsx
 */

import prisma from "@/lib/prisma";

const OneService = async ({ params }) => {
  const { serviceId } = params;

  try {
    const data = await prisma.availableService.findUnique({
      where: {
        id: serviceId
      }
    });

    if (!data || data.length === 0) {
      // Handle the case where no quote was found
      return (
        <div>
          <p>No service found for this ID.</p>
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
        <p>There was an error fetching the service.</p>
      </div>
    );
  }
};

export default OneService;

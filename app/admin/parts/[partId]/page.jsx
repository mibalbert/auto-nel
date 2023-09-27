/**
 * parts/[id]/page.jsx
 */

import prisma from "@/lib/prisma";

const OnePart = async ({ params }) => {
  const { carId } = params;

  try {
    const data = await prisma.customerCar.findUnique({
      where: {
        id: carId
      }
    });

    if (!data || data.length === 0) {
      // Handle the case where no quote was found
      return (
        <div>
          <p>No part found for this ID.</p>
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
        <p>There was an error fetching the part.</p>
      </div>
    );
  }
};

export default OnePart;

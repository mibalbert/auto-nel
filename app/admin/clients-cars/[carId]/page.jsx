/**
 * client-car/[id]/page.jsx
 */

import prisma from "@/lib/prisma";

const OneCar = async ({ params }) => {
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
          <p>No car found for this ID.</p>
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
        <p>There was an error fetching the car.</p>
      </div>
    );
  }
};

export default OneCar;

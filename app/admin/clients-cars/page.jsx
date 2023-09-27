/**
 * clients-cars/page.jsx
 */

import prisma from "@/lib/prisma";

const ClientsCars = async () => {
  try {
    const data = await prisma.customerCar.findMany();

    if (!data || data.length === 0) {
      // Handle the case where no quote was found
      return (
        <div>
          <p>No cars found.</p>
        </div>
      );
    }

    return (
      <div className="max-h-[calc(100vh-6rem)] overflow-y-auto">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  } catch (error) {
    console.error(error);
    // Handle the error gracefully, e.g., show an error message
    return (
      <div>
        <p>There was an error fetching clients cars.</p>
      </div>
    );
  }
};

export default ClientsCars;

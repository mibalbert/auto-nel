/**
 * create-service
 */

import CreateNewService from "@/components/created/admin/create-new-service/create-new-service";
import prisma from "@/lib/prisma";

const CreateService = async () => {
  try {
    const data = await prisma.availableService.findMany();
    if (!data || data.length === 0) {
      // Handle the case where no quote was found
      return (
        <div>
          <p>No sevices found.</p>
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
        <p>There was an error fetching services.</p>
      </div>
    );
  }

  // const getAllCars = await prisma.showcaseCar.findMany({
  //   select: {
  //     id: true,
  //     make: true,
  //     model: true,
  //     productionYears: true
  //   }
  // });

  // return (
  //   <div>
  //     <CreateNewService allCars={getAllCars} />
  //   </div>
  // );
};

export default CreateService;

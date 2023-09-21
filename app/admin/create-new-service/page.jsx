/**
 * create-new-service
 */

import CreateNewService from "@/components/created/admin/create-new-service/create-new-service";
import prisma from "@/lib/prisma";

const CreateNewServicePage = async () => {
  const getAllCars = await prisma.showcaseCar.findMany({
    select: {
      id: true,
      make: true,
      model: true,
      productionYears: true
    }
  });

  return (
    <div>
      <CreateNewService allCars={getAllCars} />
    </div>
  );
};

export default CreateNewServicePage;

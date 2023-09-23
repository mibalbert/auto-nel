/**
 * search/page.jsx
 */

import SearchPage from "@/components/created/search-page/search-page";
import prisma from "@/lib/prisma";

const getCarsData = async () => {
  const res = await prisma.showcaseCar.findMany({
    select: {
      make: true,
      model: true,
      productionYears: true,
      availableServices: {
        select: {
          category: true,
          title: true
        }
      }
    }
  });

  let services = {};
  res.forEach((car) => {
    car.availableServices.forEach((service) => {
      services = {
        ...services,
        category: service.category,
        title: service.title
      };
    });
  });

  console.log("services", services);

  return { carsData: res, services };
};

const ShopServices = async () => {
  const data = await getCarsData();

  return (
    <div>
      <SearchPage carsData={data.carsData} services={data.services} />
    </div>
  );
};

export default ShopServices;

/**
 * search/page.jsx
 */

import SearchPage from "@/components/created/search-page/search-page";
import prisma from "@/lib/prisma";

const getCarsData = async () => {
  const data = await prisma.showcaseCar.findMany({
    select: {
      make: true,
      model: true,
      productionYears: true,
      availableServices: {
        select: {
          id: true,
          category: true,
          title: true
        }
      },
      image: {
        select: {
          filename: true,
          carPose: true,
          url: true
        }
      }
    }
  });

  let services = [];
  data.forEach((car) => {
    car.availableServices.forEach((service) => {
      services.push(service);
    });
  });

  let images = [];
  data.forEach((el) => {
    el.image.forEach((img) => {
      images.push(img);
    });
  });
  return { data, services, images };
};

const ShopServices = async () => {
  const data = await getCarsData();

  return (
    <div>
      <SearchPage carsData={data.data} services={data.services} />
    </div>
  );
};

export default ShopServices;

/////////////////////////////////////////////////////////////// Add the user's car to the thnig, when the user is logged in, the user can choose

/**
 * cars/[carId]/page.jsx
 */

import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";

const OneCar = async ({ params }) => {
  const session = await getServerSession();

  const carId = params.carId.split("%")[0];
  const car = await prisma.user.findUniqueOrThrow({
    where: {
      email: session.user.email
    },
    select: {
      name: true,
      cars: {
        where: {
          id: carId
        }
      }
    }
  });

  return (
    <div>
      <pre>{JSON.stringify(car, null, 2)}</pre>
    </div>
  );
};

export default OneCar;

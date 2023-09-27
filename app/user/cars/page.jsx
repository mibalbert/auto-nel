/**
 * cars/[carId]/page.jsx
 */

import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";

const Cars = async () => {
  const session = await getServerSession();

  const cars = await prisma.user.findUniqueOrThrow({
    where: {
      email: session.user.email
    },
    select: {
      cars: true
    }
  });

  return (
    <div>
      <pre>{JSON.stringify(cars, null, 2)}</pre>
    </div>
  );
};

export default Cars;

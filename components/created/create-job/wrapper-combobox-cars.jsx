/**
 * wrapper-combobox-cars.jsx
 */

import prisma from "@/lib/prisma";
import { CarsCombobox } from "./combobox-cars";

const WrapperCarsCombobox = async () => {
  const users = await prisma.user.findMany();

  return <CarsCombobox users={users} />;
};

export default WrapperCarsCombobox;

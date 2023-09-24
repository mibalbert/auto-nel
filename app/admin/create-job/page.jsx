/**
 * create-job/page.jsx
 */

// import WrapperCarsCombobox from "@/components/created/create-job/wrapper-combobox-cars";
import prisma from "@/lib/prisma";

const CreateNewJob = async () => {
  const users = await prisma.user.findMany();
  console.log(users[0].id);
  const cars = await prisma.car.findMany({
    where: {
      ownerId: "1"
    }
  });

  console.log(cars);
  /////////////////////////////////////////////////////TO DO

  // wrap the client components in a server component and pass down the necessary data: Users (send back up the user id to later search it's car), and cars (based on the user id)

  return <section>{/* <WrapperCarsCombobox users={users} /> */}</section>;
};

export default CreateNewJob;

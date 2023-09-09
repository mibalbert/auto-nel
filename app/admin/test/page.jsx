/**
 * test/page.jsx
 */

import prisma from "@/lib/prisma";

const Test = async () => {
  // try {
  //   // Create a new car
  //   const car1 = await prisma.car.create({
  //     data: {
  //       make: "Toyota",
  //       model: "Camry",
  //       year: 2022,
  //       ownerId: "1", // Replace with the actual user ID
  //       specs: {
  //         engine: "V6",
  //         color: "Blue",
  //         transmission: "Automatic",
  //       },
  //       picture: "car1.jpg",
  //     },
  //   });

  //   // Create another car
  //   const car2 = await prisma.car.create({
  //     data: {
  //       make: "Honda",
  //       model: "Civic",
  //       year: 2020,
  //       ownerId: "2", // Replace with the actual user ID
  //       specs: {
  //         engine: "Inline-4",
  //         color: "Red",
  //         transmission: "Manual",
  //       },
  //       picture: "car2.jpg",
  //     },
  //   });

  //   // Add more cars as needed
  //   console.log(first);
  //   console.log("Cars have been populated successfully:", car1, car2);
  // } catch (error) {
  //   console.error("Error populating cars:", error);
  // }

  return <div>Test</div>;
};

export default Test;

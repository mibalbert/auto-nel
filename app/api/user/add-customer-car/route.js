

/**
 * api/user/add-customer-car/route.js
 */

import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma';

export async function GET() {
  try {


    const data = await prisma.user.findFirst({
      where: {
        email: "mib.albert@gmail.com"
      },
      include: {
        cars: {
          include: {
            ShdowcaseCar: true
          }
        }
      }
      // include: {
      //   cars: {
      //     select: {
      //       make: true,
      //       model: true,
      //       year: true,
      //       vin: true,
      //       mileage: true,
      //       gearType: true,
      //       color: true
      //       // ShowcaseCar: true
      //       // showcaseCar: {
      //       //   select: {
      //       // Specify the showcaseCar fields you want to include
      //       // make: true,
      //       // model: true,
      //       // bodyType: true,
      //       // seats: true,
      //       // doors: true,
      //       // combinedFuelConsumption: true,
      //       // co2EmissionsWLTP: true
      //       // Add more fields as needed
      //       // }
      //       // }
      //     }
      //   }
      // }
    });

    // const getAllCars = await prisma.customerCar.findMany({})

    // const removeCar = await prisma.customerCar.delete({
    //   where: {
    //     id: "clmxmyl820001ur0ggl09oe45"

    //   }
    // })

    // const newCustomerCar = await prisma.customerCar.create({
    //   data: {
    //     make: "Audi",
    //     model: "A4",
    //     year: 2020,
    //     vin: "1234567890", // Make sure it's a unique value if required
    //     mileage: 151300.5,
    //     gearType: "Automatic",
    //     color: "Blue",
    //     licensePlate: "SB 12 AWB",
    //     registrationDate: new Date(),
    //     insuranceCompany: "Example Insurance",
    //     insurancePolicy: "Policy123",
    //     insuranceExpiry: new Date(),
    //     featuresAndOptions: "Sunroof, Leather Seats",
    //     fuelType: "Diesel",
    //     // Add other fields and their values here
    //     ownerId: "clmar9vev0009urt4v24jpfd2", // Specify the owner ID
    //     showcaseCarId: "clmsbjy510000urzwsos29hof", // Specify the showcase car ID
    //   },
    //   // include: {
    //   //   // If you want to include the entire related ShowcaseCar object
    //   //   showcaseCar: true,
    //   // },
    // });



    // return NextResponse.json(newCustomerCar, { status: 200 });
    return NextResponse.json(data, { status: 200 });
    // return NextResponse.json(removeCar, { status: 200 });

  } catch (error) {
    console.error('Error adding new car:', error);
    return NextResponse.json({ message: 'Unable to add new car' }, { status: 500 });
  }
}

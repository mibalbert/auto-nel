/**
 * api/user/get-customer-car/route.js
 */

import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma';

export async function POST(request) {
  try {
    const { carId } = await request.json()

    const carData = await prisma.customerCar.findFirst({
      where: {
        id: carId
      },
      // include: {
      //   cars: {
      //     include: {
      //       ShowcaseCar: {
      //         include: {
      //           image: true
      //         }
      //       }
      //     }
      //   }
      // }
    });

    return NextResponse.json({ message: "Here's your customer car", carData }, { status: 200 });

  } catch (error) {
    console.error('Error fetching car data:', error);
    return NextResponse.json({ message: 'Unable to fetch car data' }, { status: 500 });
  }
}


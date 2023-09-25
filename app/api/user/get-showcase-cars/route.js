/**
 * api/user/get-showcase-car/route.js
 */

import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma';

export async function GET() {
  try {

    const showcaseCarData = await prisma.showcaseCar.findMany({

      select: {
        id: true,
        make: true,
        model: true,
        productionYears: true,
      }

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

    // return NextResponse.json({ message: "Here's your userData", userData }, { status: 200 });
    return NextResponse.json({ message: "Here's your showcase cars data", showcaseCarData }, { status: 200 });

  } catch (error) {
    console.error('Error fetching showcase cars data:', error);
    return NextResponse.json({ message: 'Unable to fetch  showcase cars data' }, { status: 500 });
  }
}


/**
 * api/user/get-car-make/route.js
 */

import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma';

export async function POST(request) {
  try {

    const make = await request.json()

    const carMake = await prisma.showcaseCar.findMany({
      where: {
        make: make
      },
      select: {
        model: true
      }
    });


    return NextResponse.json({ model }, { status: 200 });

  } catch (error) {
    console.error('Error fetching car model:', error);
    return NextResponse.json({ message: 'Unable to fetch car model' }, { status: 500 });
  }
}


/**
 * api/user/get-car-make/route.js
 */

import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const carMake = await prisma.showcaseCar.findMany({
      select: {
        make: true
      }
    });
    return NextResponse.json(carMake, { status: 200 });

  } catch (error) {
    console.error('Error fetching car make:', error);
    return NextResponse.json({ message: 'Unable to fetch car make' }, { status: 500 });
  }
}


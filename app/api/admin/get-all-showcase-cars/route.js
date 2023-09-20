/**
 * createJob / route.js
 */


import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const allShowcaseCars = await prisma.showcaseCar.findMany({
      select: {
        make: true,
        model: true,
        productionYears: true
      }
    }
    )
    return NextResponse.json({ message: 'All Showcase Cars', allShowcaseCars }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Unable to retrieve Showcase Cars' }, { status: 500 });
  }
}



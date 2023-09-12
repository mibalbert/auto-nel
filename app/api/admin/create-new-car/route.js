/**
 * createJob / route.js
 */


import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request) {
  try {


    const data = await request.json()

    console.log(data)

    const car = await prisma.car.create({
      data: { ...data, year: +data.year },
    });
    return NextResponse.json({ message: 'Car created successfully', car }, { status: 200 });
  } catch (error) {
    console.error('Error creating job:', error);
    return NextResponse.json({ message: 'Unable to create Car' }, { status: 500 });
  }
}



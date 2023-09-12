// createJob/route.js
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request) {
  try {
    const data = await request.json();

    // Create a new job in the database using Prisma
    const car = await prisma.car.update({
      where: {
        id: data.carId
      },
      data: {
        specs: data.specs
      },

    });

    // Return a success response
    return NextResponse.json({ message: 'Job created successfully', car }, { status: 201 });
  } catch (error) {
    // Handle errors and return an error response
    console.error('Error creating job:', error);
    return NextResponse.json({ message: 'Unable to create job' }, { status: 500 });
  }
}

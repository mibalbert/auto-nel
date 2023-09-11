// createJob/route.js
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request) {
  try {
    const data = await request.json();
    // Extract job data from the request
    const { name, category, time, price, carId, userId } = data;

    // Create a new job in the database using Prisma
    const job = await prisma.job.create({
      data: {
        name,
        category,
        time,
        price,
        carId,
        userId,
      },
    });

    // Return a success response
    return NextResponse.json({ message: 'Job created successfully', job }, { status: 201 });
  } catch (error) {
    // Handle errors and return an error response
    console.error('Error creating job:', error);
    return NextResponse.json({ message: 'Unable to create job' }, { status: 500 });
  }
}

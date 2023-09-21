/**
 * create-new-service/route.js
 */

import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request) {
  try {
    const data = await request.json();

    const {
      category,
      serviceName,
      servicePrice,
      selectedCars,
      carPrices,
    } = data;

    // Create a new service entry in the database
    const service = await prisma.service.create({
      data: {
        category,
        serviceName,
        servicePrice,
      },
    });

    // Add selected cars to the service
    for (const carId of selectedCars) {
      await prisma.serviceToCar.create({
        data: {
          carId,
          serviceId: service.id,
          price: carPrices[carId],
        },
      });
    }

    return NextResponse.json({ message: 'Service created successfully', service }, { status: 201 });
  } catch (error) {
    console.error('Error creating service:', error);
    return NextResponse.json({ message: 'Error creating service' }, { status: 500 });
  }
}

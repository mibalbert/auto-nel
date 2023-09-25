/**
 * api/user/get-car-make/route.js
 */

import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma';

export async function POST(request) {
  try {

    const { email } = await request.json()

    const userData = await prisma.user.findUnique({
      where: {
        email: email
      },
      include: {
        cars: {
          include: {
            ShowcaseCar: {
              include: {
                image: true
              }
            }
          }
        }
      }
    });

    // return NextResponse.json({ message: "Here's your userData", userData }, { status: 200 });
    return NextResponse.json({ message: "Here's your userData", userData }, { status: 200 });

  } catch (error) {
    console.error('Error fetching car model:', error);
    return NextResponse.json({ message: 'Unable to fetch car model' }, { status: 500 });
  }
}


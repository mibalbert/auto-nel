/**
 * api/admin/get-cars/route.js
 */

import prisma from '@/lib/prisma';

// export default async function handler(req, res) {
//   if (req.method === 'GET') {
//     try {
//       const users = await prisma.user.findMany();
//       return NextResponse.json({ users }, { status: 200 });

//     } catch (error) {
//       console.error('Error fetching users:', error);
//       return NextResponse.json({ message: 'Unable to fetch users' }, { status: 500 });
//     }
//   } else {
//     res.status(405).json({ error: 'Method not allowed' });
//   }
// }


import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json({ users }, { status: 200 });

  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ message: 'Unable to fetch users' }, { status: 500 });
  }
}


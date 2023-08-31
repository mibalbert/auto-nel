/**
 * register/route.js
 */

import { NextResponse } from 'next/server'

import createNewUser from './createNewUser'

export async function POST(request) {
  const data = await request.json()
  const result = await createNewUser(data)
  return NextResponse.json({ message: result.message }, { status: result.status })
}
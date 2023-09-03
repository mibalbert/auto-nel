/**
 * update/route.js
 * 
 * This page handles the scenario when the user tries to
 * log-in with an account that was already used by google log-in. 
 * 
 * The sign-in modal asks the user if they want to register 
 * the already recorded email (google sign-in), by asking them for a password.
 * 
 * If user provides a password, the email is updated with the pass
 * and the account with provider="credentials" is created
 * 
 * User is now able to log-in with both google and credentials for that email.
 * 
 */

import { NextResponse } from 'next/server'
import prisma from "@/lib/prisma"
import { generateHash, resMessage } from "@/lib/helpers/helpers"


export async function POST(request) {

  console.log("update")


  const data = await request.json()
  const { email, password } = data

  if (!password) {
    return NextResponse.json({ message: "Missing password to update user" }, { status: 404 })
  }

  const dbUser = await prisma.user.findFirst({
    where: {
      email: email,
    },
    include: {
      accounts: {
        select: {
          provider: true,
        },
      },
    },
  });

  if (!dbUser) {
    return NextResponse.json({ message: "User doesn't exists!" }, { status: 404 })
  }

  const user = await prisma.user.update({
    data: {
      password: generateHash(password),
    },
  })


  console.log("THE", user)
  if (!user) {
    return NextResponse.json({ message: 'Unable to update user with password' }, { status: 500 })
  }

  const account = await prisma.account.create({
    data: {
      userId: user.id,
      type: 'credentials',
      provider: 'credentials',
      providerAccountId: user.id,
      access_token: generateAccessToken(),
      expires_at: generateExpirationTimestamp(),
      token_type: 'Bearer',
      id_token: signJwtAccessToken()
    },
  })

  console.log("account", account)

  if (user && account) return NextResponse.json({ message: { message: "User updated succesfully", user, account } }, { status: 200 })

  return NextResponse.json({ message: 'Unable to link account to created user' }, { status: 500 })
}


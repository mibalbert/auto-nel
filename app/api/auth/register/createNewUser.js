/**
 * createNewUser.js
 */


import prisma from "@/lib/prisma"
import { generateAccessToken, generateExpirationTimestamp, generateHash, generateJWT, generateRandToken, generateRandomBigIntAsString, resMessage, signJwtAccessToken } from "@/lib/helpers/helpers"

const createNewUser = async (credentials) => {

  if (!{ ...credentials }) {
    return resMessage('Missing required elements to register user!', 409)
  }

  const { firstName, lastName, password, email } = credentials

  if (!firstName || !lastName || !email || !password) {
    return resMessage('Missing required elements to register user!', 409)
  }

  //Put it here as well to prevent api calls 
  if (password.length < 5) {
    return resMessage('Password must be at least 5 characters long', 409)
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

  console.log(dbUser)

  if (dbUser) {
    return resMessage('User already exists!', 409)
  } else if (dbUser && dbUser.accounts[0]?.provider !== "credentials") {
    return resMessage('You have already logged-in/registered with Google, use that to log-in!', 409)
  }

  const avatar = `https://ui-avatars.com/api/?background=random&bold=true&name=${firstName + " " + lastName}&length=1`
  const user = await prisma.user.create({
    data: {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: generateHash(password),
      image: avatar,
      role: 'USER'
    },
  })
  if (!user) return resMessage('Unable to create new user', 500)

  const account = await prisma.account.create({
    data: {
      userId: user.id,
      type: 'credentials',
      provider: 'credentials',
      providerAccountId: user.id,
      access_token: generateAccessToken(),
      expires_at: new Date.now(),
      token_type: 'Bearer',
      id_token: generateRandToken()
    },
  })

  if (user && account) return resMessage(account, 200)
  return resMessage('Unable to link account to created user', 500)
}


export default createNewUser
/**
 * createNewUser.js
 */

import prisma from "@/lib/prisma"
import { resMessage } from "./helpers"

const helperCreateGoogleAccount = async (credentials) => {

  if (!{ ...credentials }) {
    return resMessage('Missing required elements to register user!', 409)
  }


  console.log("The fucking credentials", credentials)

  const { email, picture, access_token,
    type, provider, expires_at,
    token_type, scope, id_token } = credentials

  const user = await prisma.user.update({
    where: {
      email: email
    },
    data: {
      image: picture,
    },
  })

  if (!user) return resMessage('Unable to create new user', 500)

  const account = await prisma.account.create({
    data: {
      userId: user.id,
      type: type,
      provider: provider,
      providerAccountId: user.id,
      access_token: access_token,
      expires_at: expires_at,
      token_type: token_type,
      scope: scope,
      id_token: id_token
    },
  })

  if (user && account) return resMessage("All good", 200)
  return resMessage('Unable to link account to created user', 500)
}
export default helperCreateGoogleAccount

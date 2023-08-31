/**
 * helperCreateGOOGLESession.js
 */
import prisma from "@/lib/prisma";
import { generateAccessToken, generateExpirationTimestamp, resMessage } from "./helpers";

const helperCreateGoogleSession = async (credentials) => {
  try {

    if (!credentials) {
      return resMessage('Missing required elements to register user!', 409);
    }
    const { email } = credentials;

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },

    });

    const session = await prisma.session.create({
      data: {
        userId: user.id,
        sessionToken: generateAccessToken(),
        expires: getDateTimeWithDaysOffset(30)
      }
    });


    console.log(session)

    if (session) {
      return resMessage("All good", 200);
    }

    return resMessage('Unable to create a new session', 500);

  } catch (error) {
    throw new Error(error)
  }
};

export default helperCreateGoogleSession;

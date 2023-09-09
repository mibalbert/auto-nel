import prisma from "@/lib/prisma";
import { generateAccessToken, getDateTimeWithDaysOffset, resMessage } from "./helpers";

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

    if (!user) {
      console.error("User not found");
      return resMessage('User not found', 404);
    }

    const sessionExists = await prisma.session.findUnique({
      where: {
        userId: user.id,
      },
    });


    const session = await prisma.session.create({
      data: {
        userId: user.id,
        sessionToken: generateAccessToken(),
        expires: getDateTimeWithDaysOffset(30),
      },
    });

    if (session) {
      console.log(session);
      return resMessage("Session created successfully", 200);
    }

    console.error("Unable to create a new session");
    return resMessage('Unable to create a new session', 500);
  } catch (error) {
    console.error("An error occurred:", error);
    return resMessage('An error occurred while creating a session', 500);
  }
};

export default helperCreateGoogleSession;

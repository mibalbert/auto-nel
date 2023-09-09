import prisma from "@/lib/prisma";
import { resMessage } from "./helpers";

const helperCreateNewGoogleUserAndAccount = async (credentials) => {
  try {
    if (!credentials) {
      return resMessage('Missing required elements to register user!', 409);
    }


    const {
      given_name,
      family_name,
      email,
      picture,
      access_token,
      type,
      provider,
      expires_at,
      token_type,
      scope,
      id_token,
    } = credentials;

    console.log(email)
    console.log(given_name)
    console.log(family_name)
    console.log("picture", picture)



    const user = await prisma.user.create({
      data: {
        firstName: given_name,
        lastName: family_name,
        name: given_name + " " + family_name,
        emailVerifiedDate: new Date(),
        email: email,
        image: picture,
        emailVerified: true,
        password: null,
        address: null,
        active: true,
        balance: 0,
      }
    });


    console.log("The user", user)

    if (!user) {
      console.error("Unable to create new user");
      return resMessage('Unable to create new user', 500);
    }


    console.log("THE USER ID", user.id)

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
    });

    console.log(account)


    if (!account) {
      console.error("Unable to create new account");
      return resMessage('Unable to link account to created user', 500);
    }

    console.log("ALL GOOD");
    return resMessage("All good", 200);
  } catch (error) {
    console.error("An error occurred:", error);
    return resMessage('An error occurred while creating user or account', 500);
  }
};

export default helperCreateNewGoogleUserAndAccount;

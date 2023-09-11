import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'
import { randomUUID } from 'crypto'

import { generateHash, compareHash, signJwtAccessToken, calculateExpiration } from './helpers/helpers'

import prisma from '@/lib/prisma'

import helperCreateNewGoogleUserAndAccount from './helpers/helperCreateNewGoogleUserAndAccount'
import helperCreateGoogleAccount from './helpers/helperCreateGoogleAccount'
import helperCreateSession from './helpers/helperCreateSession'

// const role = generateHash('USER')
const ROLE = 'USER'

export const authOptions = {
  // session: {
  //   strategy: "jwt"
  // },
  pages: {
    login: '/signin',
    error: '/signin', //If an error occurs when sigin-in, the user is redirected to the signIn page and the error can be displayed from the url params.
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
  // adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      checks: ["none"],
      async profile(profile) {


        const user = await prisma.user.findUniqueOrThrow({
          where: {

            email: profile.email
          }
        })

        if (!user) {
          return {
            ...profile,
            id: randomUUID(),
            role: ROLE,
            image: profile.picture
          }
        } else {
          return user
        }

      }
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        try {
          const user = await prisma.user.findUnique({
            where: {
              email: credentials?.email,
            },
            include: {
              accounts: {
                select: {
                  provider: true
                }
              }
            },
          });

          if (!user) {
            throw new Error('User not in db')
          }

          // if (user.accounts[0].provider && user.accounts[0].provider !== "credentials") {
          //   throw new Error('Email already in use by Signing in with Google')
          // }


          return {
            ...user,
            role: user.role ?? ROLE,
            provider: user.provider ?? "credentials"
          }
        } catch (error) {
          throw new Error(error)
        }
      }
    })
  ],
  callbacks: {
    async signIn({ user, account }) {
      try {

        const dbUser = await prisma.user.findUnique({
          where: {
            email: user.email
          },
          include: {
            accounts: {
              select: {
                provider: true
              }
            }
          }
        })

        const credentials = { ...user, ...account }
        if (!dbUser && account.provider === "google") {

          const result = await helperCreateNewGoogleUserAndAccount(credentials)


          if (!result.status === 200) return false
          return true
        }
        if (dbUser && dbUser.accounts[0].provider !== "google" && account.provider === "google") {



          const accountResult = await helperCreateGoogleAccount(credentials)
          // const sessionResult = await helperCreateGoogleSession(credentials) //DB session


          if (accountResult.status !== 200) return false
          return true
        }
        // if (dbUser && dbUser.accounts[0].provider !== "credentials" && account.provider === "credentials") {
        //     Already handled by the signin modal
        // }


        // To do:
        // const sessionResult = await helperCreateSession(credentials) //DB session

        // console.log(sessionResult)

        // if (sessionResult.status !== 200) return false
        return true

      } catch (error) {
        return false
      }

    },
    async jwt({ token, user }) {


      // console.log("THE FUCKING TOKEN", token)
      // console.log("THE FUCKING USER", user)

      if (!token.role) {
        token.role = user.role ?? ROLE
      }
      // if (!token.accessToken) {
      //   console.log("Thhhe user i wnt", user)
      //   token.accessToken = signJwtAccessToken('somePayload')
      // }
      return token
    },
    // If you want to use the role in client components
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role

      return session
    }
  },
}


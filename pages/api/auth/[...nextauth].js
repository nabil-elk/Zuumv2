import NextAuth from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import * as Prisma from "@prisma/client"
import GoogleProvider from "next-auth/providers/google"

const prisma = new Prisma.PrismaClient()
export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: 'database',
  },
  secret: process.env.JWT_SECRET,
  theme: {
    colorScheme: "light", // "auto" | "dark" | "light"

  }

})




import NextAuth, {NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import {PrismaAdapter} from '@next-auth/prisma-adapter'
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/prisma/client";
import bcrypt from 'bcrypt'

export const authOptions: NextAuthOptions = {
  providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!
      }),
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          email: {label: 'email', type: 'email', placeholder: 'name@gmail.com'},
          password: {label: 'password', type: 'password', placeholder: '******'}
        },
        async authorize(credentials, req) {

          if(!credentials?.email || !credentials?.password) return null;

          const user = await prisma.user.findUnique({
            where: {email: credentials.email}
          })

          if(!user) return null;

          const passwordMatch = await bcrypt.compare(credentials.password, user.hashedPassword!)

          return passwordMatch ? user : null;
            
        },
      })
    ],
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt'
  }

}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
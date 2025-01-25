// import NextAuth from 'next-auth';
// import GoogleProvider from 'next-auth/providers/google';
// import CredentialsProvider from 'next-auth/providers/credentials';
// import MicrosoftProvider from 'next-auth/providers/azure-ad';
// import { PrismaClient } from '@prisma/client';
// import { verifyPassword } from '../../../lib/auth'; // Ensure this path is correct

// const prisma = new PrismaClient();

// export default NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//     MicrosoftProvider({
//       clientId: process.env.MICROSOFT_CLIENT_ID,
//       clientSecret: process.env.MICROSOFT_CLIENT_SECRET,
//     }),
//     CredentialsProvider({
//       credentials: {
//         username: { label: "Username", type: "text" },
//         password: { label: "Password", type: "password" }
//       },
//       authorize: async (credentials) => {
//         const user = await prisma.user.findUnique({
//           where: { email: credentials.username }
//         });

//         if (!user) {
//           throw new Error('No user found with the given email');
//         }

//         const isValid = await verifyPassword(credentials.password, user.password);

//         if (!isValid) {
//           throw new Error('Incorrect password');
//         }

//         return { id: user.id, name: user.name, email: user.email };
//       }
//     })
//   ],
//   database: process.env.DATABASE_URL,
//   callbacks: {
//     async session({ session, token }) {
//       session.user.id = token.id;
//       return session;
//     },
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id;
//       }
//       return token;
//     }
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// });

import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import pool from '../../../lib/db'; // Import your MySQL connection pool

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          // Find the user by email
          const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [credentials.email]);

          if (rows.length === 0) {
            throw new Error('User not found');
          }

          const user = rows[0];

          // Compare the provided password with the hashed password in the database
          const isValidPassword = await bcrypt.compare(credentials.password, user.password);
          if (!isValidPassword) {
            throw new Error('Invalid password');
          }

          // Return the user object if valid
          return { id: user.id, email: user.email, name: user.name };
        } catch (error) {
          throw new Error(error.message);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.email = token.email;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
});
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  pages: {
    signIn: "/auth/signin",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials || !credentials.username || !credentials.password)
          return null;

        try {
          const res = await fetch("http://app:5000/core/auth", {
            method: "POST",
            body: new URLSearchParams(
              `username=${credentials.username}&password=${credentials.password}`
            ),
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
          });
          const user = await res.json();
          if (res.ok && user) {
            return user;
          }
        } catch (error) {
          console.log("ERROR: ", error);
          throw error;
        }
      },
    }),
  ],
  callbacks: {
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
        },
      };
    },
  },
};

import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import prisma from "@/lib/db";
import { compare } from "bcryptjs";
import { signinSchema } from "./lib/schema/UserSchema";
import db from "./database/db";

export const authConfig: NextAuthConfig = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Github({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Check if credentials are present
        if (!credentials) throw new Error("Credentials are required");

        const result = signinSchema.safeParse(credentials);

        if (result.success) {
          const { email, password } = result.data;

          // Check user exists
          const user = await db.query.users.findFirst({
            where: (fields, operators) => operators.eq(fields.email, email),
          });

          if (!user) return null;

          // Check password
          const checkPassword =
            user.password && (await compare(password, user.password));

          if (checkPassword) return user;
        }

        return null;
      },
    }),
  ],
};

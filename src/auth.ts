export const runtime = "nodejs";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { db, users } from "./db/schema";
import { eq } from "drizzle-orm";

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [GitHub],
	callbacks: {
		async signIn({ user }) {
			const userEmail = user.email;
			if (!userEmail) {
				return false; // Don't allow sign in without email
			}
			const existingUsers = await db
				.select()
				.from(users)
				.where(eq(users.email, userEmail));

			if (existingUsers.length === 0) {
				await db.insert(users).values({
					name: user.name || "",
					email: userEmail,
					profile_pic: user.image,
				});
			}

			return true; // allow sign-in
		},
	},
	secret: process.env.NEXTAUTH_SECRET,
});

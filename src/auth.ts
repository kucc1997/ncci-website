export const runtime = "nodejs";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { db, users } from "./db/schema";
import { eq } from "drizzle-orm";

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [
		GitHub,
		Google({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
		})

	],
	trustHost: true,
	callbacks: {
		async signIn({ user }) {
			const userEmail = user.email;
			if (!userEmail) {
				return false;
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

			return true;
		},
		async jwt({ token, user }) {
			if (user?.email) {
				const dbUser = await db
					.select()
					.from(users)
					.where(eq(users.email, user.email))
					.then(rows => rows[0]);

				if (dbUser) {
					token.role = dbUser.role;
				}
			}
			return token;
		},
		async session({ session, token }) {
			if (session.user) {
				session.user.role = token.role;
			}
			return session;
		}
	},
	secret: process.env.NEXTAUTH_SECRET,
});


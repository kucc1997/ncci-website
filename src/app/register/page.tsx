'use client'
import SignIn from "@/components/sign-in";
import SignOut from "@/components/sign-out";
import { useSession } from "next-auth/react";

export default function Register() {
	const session = useSession();
	console.log(session)

	if (session.status === "unauthenticated")
		return <div className="container">
			<div className="grid place-items-center my-12 gap-4">
				<h1 className="text-2xl">Not signed in yet? Sign in to continue.</h1>
				<div className="mx-auto"><SignIn /></div>
			</div>
		</div>;

	return <div className="container">
		<div className="flex justify-end mt-4">
			<SignOut />
		</div>
	</div>;
}

"use client"
import { TabsContent } from "@/components/ui/tabs";
import { getIsAdmin } from "@/lib/api/user";
import { AxiosError } from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function ReviewsTab() {
	const { data: session, status } = useSession();
	const [isLoadingAdmin, setIsLoadingAdmin] = useState(true);
	const [isAdmin, setIsAdmin] = useState(false)

	useEffect(() => {
		(async function() {
			try {
				const res = await getIsAdmin(session?.user?.email || '')
				console.log(res.data)
				setIsAdmin(res.data.data)
				setIsLoadingAdmin(false)
			} catch (error) {
				if (error instanceof AxiosError) {
					toast.error(error.response?.data.data)
				}
				else if (error instanceof Error) {
					toast.error(error.message)
				} else {
					toast.error("An unexpected error occurred")
				}
			}
		})()
	}, [session])

	if (status === "loading" || isLoadingAdmin) {
		return (
			<div className="container py-12">
				<div className="flex justify-center items-center min-h-[50vh]">
					<div className="animate-pulse text-xl">Loading...</div>
				</div>
			</div>
		)
	}

	if (status === "unauthenticated") return

	return <TabsContent value="reviews">
		hello world
	</TabsContent>
}

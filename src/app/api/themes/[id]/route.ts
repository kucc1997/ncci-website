import { db, themes as themesSchema } from '@/db/schema'
import { eq } from 'drizzle-orm';

export async function GET(
	request: Request,
	{ params }: { params: Promise<{ id: string }> }
) {
	const { id } = await params;

	const themeArr = await db.select().from(themesSchema)
		.where(eq(themesSchema.id, id))

	if (themeArr[0]) {
		return Response.json({
			success: true,
			data: themeArr[0]
		})
	}

	return Response.json({
		success: false,
		data: "Theme not found."
	}, { status: 404 })
}

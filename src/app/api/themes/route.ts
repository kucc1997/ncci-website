import { ThemeApiResponse } from '@/app'
import { db, themes as themesSchema } from '@/db/schema'

export async function GET() {
	const themes = await db.select().from(themesSchema)
  if ( themes.length <= 0 ) {
    return Response.error() 
  }
	const res: ThemeApiResponse = { success: true, data: themes }
	return Response.json(res)
}

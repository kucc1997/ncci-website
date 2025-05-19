import { InferSelectModel } from "drizzle-orm";
import { themes } from "./db/schema";

type Theme = InferSelectModel<typeof themes>

type ThemeApiResponse = { success: true; data: Theme[] }

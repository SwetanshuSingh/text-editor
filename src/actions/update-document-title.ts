import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { document } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";

export const updateDocumentTitle = async (id: string, title: string) => {
  if (id.trim() === "") return {};

  if (title.trim() === "") return {};

  const session = await auth.api.getSession({ headers: headers() });

  if (!session)
    return {
      status: "error",
      type: "session",
      message: "Session does not exists",
    };

  const userId = session.user.id;

  const isExistingDoc = await db.query.document.findFirst({
    where: eq(document.id, id),
  });

  // If document does not exists
};

"use server";

"use server"

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { document, user } from "@/lib/schema";
import { and, eq } from "drizzle-orm";
import { headers } from "next/headers";

interface GetDocumentByIdResponse extends ServerActionResponse {
  data?: typeof document.$inferSelect;
}

export const getDocumentById = async (
  id: string
): Promise<GetDocumentByIdResponse> => {
  const session = await auth.api.getSession({ headers: headers() });

  if (!session)
    return {
      status: "error",
      type: "session",
      message: "Session does not exists",
    };

  const userId = session.user.id;

  const doc = await db.query.document.findFirst({
    where: and(eq(document.userId, userId), eq(document.id, id)),
  });

  return {
    status: "success",
    type: "query",
    message: "Successfully fetched user docs data",
    data: doc,
  };
};

"use server";

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { document, user } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";

interface GetDocumentsResponse extends ServerActionResponse {
  data?: (typeof document.$inferSelect)[];
}

export const getDocuments = async (): Promise<GetDocumentsResponse> => {
  const session = await auth.api.getSession({ headers: headers() });

  if (!session)
    return {
      status: "error",
      type: "session",
      message: "Session does not exists",
    };

  const userId = session.user.id;

  const docs = await db.query.document.findMany({
    where: eq(document.userId, userId),
  });

  return {
    status: "success",
    type: "query",
    message: "Successfully fetched user docs",
    data: docs,
  };
};

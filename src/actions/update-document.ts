"use server"

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { document } from "@/lib/schema";
import { and, eq } from "drizzle-orm";
import { headers } from "next/headers";

interface UpdateDocumentResponse extends ServerActionResponse {
  data?: typeof document.$inferSelect;
}

export const updateDocumentTitle = async (
  id: string,
  title: string
): Promise<UpdateDocumentResponse> => {
  if (id.trim() === "")
    return {
      status: "error",
      type: "validation",
      message: "Please provide a valid id",
    };

  if (title.trim() === "")
    return {
      status: "error",
      type: "validation",
      message: "Please provide a valid title",
    };

  const session = await auth.api.getSession({ headers: headers() });

  if (!session)
    return {
      status: "error",
      type: "session",
      message: "Session does not exists",
    };

  const userId = session.user.id;

  const data = await db
    .update(document)
    .set({ title })
    .where(and(eq(document.id, id), eq(document.userId, userId)))
    .returning();

  return {
    status: "success",
    type: "mutation",
    message: "Successfully updated document title",
    data: data[0],
  };
};

export const updateDocumentContent = async (
  id: string,
  content: string
): Promise<UpdateDocumentResponse> => {
  if (id.trim() === "")
    return {
      status: "error",
      type: "validation",
      message: "Please provide a valid id",
    };

  if (content.trim() === "")
    return {
      status: "error",
      type: "validation",
      message: "Please provide a valid content body",
    };

  const session = await auth.api.getSession({ headers: headers() });

  if (!session)
    return {
      status: "error",
      type: "session",
      message: "Session does not exists",
    };

  const userId = session.user.id;

  const data = await db
    .update(document)
    .set({ content })
    .where(and(eq(document.id, id), eq(document.userId, userId)))
    .returning();

  return {
    status: "success",
    type: "mutation",
    message: "Successfully updated document content",
    data: data[0],
  };
};

"use server";

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { document } from "@/lib/schema";
import { headers } from "next/headers";

interface CreateDocumentResponse extends ServerActionResponse {
  data?: typeof document.$inferSelect;
}

export const createDocumentWithTitle = async (
  id: string,
  title: string
): Promise<CreateDocumentResponse> => {
  // TODO: Add validation with zod.

  if (id.trim() === "") {
    return {
      status: "error",
      type: "validation",
      message: "Please provide an valid id",
    };
  }

  if (title.trim() === "") {
    return {
      status: "error",
      type: "validation",
      message: "Please provide an valid title",
    };
  }

  const session = await auth.api.getSession({ headers: headers() });

  if (!session)
    return {
      status: "error",
      type: "session",
      message: "Session does not exists",
    };

  const userId = session.user.id;

  const data = await db
    .insert(document)
    .values({
      id,
      title,
      summary: "",
      content: "",
      userId,
    })
    .returning();

  return {
    status: "success",
    type: "mutation",
    message: "Successfully created new document with title",
    data: data[0],
  };
};

export const createDocumentWithContent = async (
  id: string,
  content: string
): Promise<CreateDocumentResponse> => {
  if (id.trim() === "") {
    return {
      status: "error",
      type: "validation",
      message: "Please provide an valid id",
    };
  }

  if (content.trim() === "") {
    return {
      status: "error",
      type: "validation",
      message: "Please provide an valid content body",
    };
  }

  const session = await auth.api.getSession({ headers: headers() });

  if (!session)
    return {
      status: "error",
      type: "session",
      message: "Session does not exists",
    };

  const userId = session.user.id;

  const data = await db
    .insert(document)
    .values({
      id,
      title: "",
      summary: "",
      content: "",
      userId,
    })
    .returning();

  return {
    status: "success",
    type: "mutation",
    message: "Succesfully created document with content",
    data: data[0],
  };
};

"use server";

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { document } from "@/lib/schema";
import { headers } from "next/headers";

export const createDocument = async (title: string) => {
  // TODO: Add validation with zod.

  if (title.trim() === "")
    return {
      status: "error",
      type: "validation",
      message: "Please provide an valid title",
    };

  const session = await auth.api.getSession({ headers: headers() });

  if (!session)
    return {
      status: "error",
      type: "session",
      message: "Session does not exists",
    };

  const userId = session.user.id;

  const [newDoc] = await db
    .insert(document)
    .values({ title, userId })
    .returning();
};

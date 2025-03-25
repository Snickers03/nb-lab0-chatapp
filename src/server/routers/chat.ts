import { prisma } from "@/lib/prisma";

import { z } from "zod";
import { publicProcedure, router } from "../trpc";

export const chatRouter = router({
  getAll: publicProcedure
    .query(async () => {
      const chats =  await prisma.chat.findMany()
      return chats
    }),
  add: publicProcedure.input(z.string()).mutation(async (opts) => {
      const chat = await prisma.chat.create({
        data: {
          topic: opts.input,
        }
      })
      return chat
    }
  ),
  getById: publicProcedure.input(z.number()).query(async (opts) => {
    const chat = await prisma.chat.findUnique({
      where: {
        id: opts.input
      },
      include: {
        messages: true
      }
    })
    if (!chat) {
      return null
    }
    return chat
  })
});
import { prisma } from "@/lib/prisma";

import { z } from "zod";
import { publicProcedure, router } from "../trpc";

export const messageRouter = router({
  getAllByChatId: publicProcedure
    .input(z.number())
    .query(async (opts) => {


      const chats =  await prisma.message.findMany({
        where: {
          chatId: opts.input
        }
      })
      if (!chats) {
        return []
      }
      return chats
    }),
  add: publicProcedure.input(z.object({
    chatId: z.number(),
    sender: z.string(),
    content: z.string()
  })).mutation(async (opts) => {
      await prisma.message.create({
        data: {
          chatId: opts.input.chatId,
          sender: opts.input.sender,
          content: opts.input.content
        }
      })
    }
  )
});
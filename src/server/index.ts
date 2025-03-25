import { chatRouter } from "./routers/chat";
import { messageRouter } from "./routers/message";
import { router } from "./trpc";

export const appRouter = router({
  chat: chatRouter,
  message: messageRouter
});

export type AppRouter = typeof appRouter;
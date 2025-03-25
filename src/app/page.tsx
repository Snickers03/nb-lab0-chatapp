"use client"

import { ChatList } from "@/components/chat-list"
import { CreateChatForm } from "@/components/create-chat-form"
import SocketStatus from "@/components/socket-status"
import { socket } from "@/socket"
import { MessageCircleIcon } from "lucide-react"
import { useEffect } from "react"
import { trpc } from "./_trpc/client"

export default function Home() {

  const { data: chats, refetch } = trpc.chat.getAll.useQuery()
  const { mutate: addChat } = trpc.chat.add.useMutation({
    onSuccess: () => {
      refetch()
    }
  })

  useEffect(() => {
    // When any client emits "newChat", refetch the chats from the DB.
    const handleNewChat = () => {
      console.log("New chat received from socket, refetching...");
      refetch();
    };

    socket.on("newChat", handleNewChat);

    return () => {
      socket.off("newChat", handleNewChat);
    };
  }, [refetch]);

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <MessageCircleIcon className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-bold">lab0: ChatApp</h1>
        </div>
        <SocketStatus />
      </div>

      <div className="grid gap-6 md:grid-cols-[1fr_300px]">
        <div className="order-2 md:order-1">
          <h2 className="text-xl font-semibold mb-4">Chats</h2>
          <ChatList chats={chats ?? []} />
        </div>

        <div className="order-1 md:order-2">
          <h2 className="text-xl font-semibold mb-4">Create New Chat</h2>
          <CreateChatForm addChat={addChat} />
        </div>
      </div>
    </div>
  )
}


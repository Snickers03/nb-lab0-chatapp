import { ChatList } from "@/components/chat-list"
import { CreateChatForm } from "@/components/create-chat-form"

export default function Home() {
  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">ChatApp</h1>

      <div className="grid gap-6 md:grid-cols-[1fr_300px]">
        <div className="order-2 md:order-1">
          <h2 className="text-xl font-semibold mb-4">Your Chats</h2>
          <ChatList />
        </div>

        <div className="order-1 md:order-2">
          <h2 className="text-xl font-semibold mb-4">Create New Chat</h2>
          <CreateChatForm />
        </div>
      </div>
    </div>
  )
}


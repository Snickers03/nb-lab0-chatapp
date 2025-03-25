import Link from "next/link"
import { MessageTable } from "@/components/message-table"
import { MessageForm } from "@/components/message-form"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

// This would normally come from a database
const getChatById = (id: string) => {
  const chats = {
    "1": { id: "1", topic: "General Discussion" },
    "2": { id: "2", topic: "Technical Support" },
    "3": { id: "3", topic: "Random Chat" },
  }

  return chats[id as keyof typeof chats] || { id, topic: `Chat ${id}` }
}

export default function ChatPage({ params }: { params: { id: string } }) {
  const chat = getChatById(params.id)

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="mb-6">
        <Link href="/">
          <Button variant="ghost" size="sm" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Chats
          </Button>
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-6">{chat.topic}</h1>

      <div className="space-y-6">
        <MessageTable chatId={params.id} />
        <MessageForm chatId={params.id} />
      </div>
    </div>
  )
}


"use client"

import { trpc } from "@/app/_trpc/client"
import { MessageForm } from "@/components/message-form"
import { MessageTable } from "@/components/message-table"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { use } from "react"

export default function ChatPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = use(props.params);

  const { data: chat, refetch } = trpc.chat.getById.useQuery(Number(params.id))
 const { mutate: addMessage } = trpc.message.add.useMutation({
    onSuccess: () => {
      refetch()
    }
  })

  if (!chat) {
    return <div className="container mx-auto p-4 max-w-4xl">
      <Link className="underline" href="/">Go back</Link>
      <p>Chat not found</p>
    </div>
  }

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
        <MessageTable messages={chat.messages ?? []} />
        <MessageForm addMessage={addMessage} chatId={params.id} />
      </div>
    </div>
  )
}


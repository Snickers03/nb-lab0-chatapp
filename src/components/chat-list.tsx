"use client"

import { Chat } from "@prisma/client"
import { MessageSquare } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "./ui/card"
interface Props {
  chats: Chat[]
}
export function ChatList({chats}: Props) {
  return (
    <div className="grid grid-cols-1 gap-3">
{chats && chats.length === 0 ? (
        <p className="text-muted-foreground">No chats yet. Create one to get started!</p>
      ) : (
        chats.map((chat) => (
          <Link key={chat.id} href={`/chat/${chat.id}`}>
            <Card className="hover:bg-accent transition-colors cursor-pointer">
              <CardContent className="p-4 flex items-center gap-3">
                <MessageSquare className="h-5 w-5 text-primary" />
                <span className="font-medium">{chat.topic}</span>
              </CardContent>
            </Card>
          </Link>
        ))
      )} 
    </div>
  )
}


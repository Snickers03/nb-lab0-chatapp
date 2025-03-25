"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare } from "lucide-react"

// Mock data for demonstration
const initialChats = [
  { id: "1", topic: "General Discussion" },
  { id: "2", topic: "Technical Support" },
  { id: "3", topic: "Random Chat" },
]

export function ChatList() {
  const [chats, setChats] = useState(initialChats)

  return (
    <div className="space-y-3">
      {chats.length === 0 ? (
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


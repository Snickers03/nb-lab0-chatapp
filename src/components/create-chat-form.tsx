"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { useState } from "react"

interface Props {
  addChat: (topic: string) => void
}

export function CreateChatForm({addChat}: Props) {
  const [chatTopic, setChatTopic] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!chatTopic.trim()) return

    // In a real app, you would create the chat on the server
    // For now, we'll just navigate to a new chat with a random ID
    const newChatId = Math.random().toString(36).substring(2, 9)
    router.push(`/chat/${newChatId}`)
  }

  return (
    <Card>
      <CardContent className="p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="chatTopic" className="text-sm font-medium">
              Chat Topic
            </label>
            <Input
              id="chatTopic"
              placeholder="Enter chat topic..."
              value={chatTopic}
              onChange={(e) => setChatTopic(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Create Chat
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}


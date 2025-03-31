"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { socket } from "@/socket"
import { useState } from "react"

interface Props {
  chatId: string
  addMessage: (content: any) => void
}
export function MessageForm({ chatId, addMessage }: Props) {
  const [sender, setSender] = useState("")
  const [content, setContent] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!sender.trim() || !content.trim()) return

    addMessage({ chatId: Number(chatId), sender, content })

    console.log("Emitting newChat:", content, "Connected:", socket.connected);
    socket.emit("newMessage", content);

    setContent("")
  }

  return (
    <Card>
      <CardContent className="p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="sender">Your Name</Label>
            <Input
              id="sender"
              placeholder="Enter your name"
              value={sender}
              onChange={(e) => setSender(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="content">Message</Label>
            <Textarea
              id="content"
              placeholder="Type your message here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={3}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function MessageForm({ chatId }: { chatId: string }) {
  const [sender, setSender] = useState("")
  const [content, setContent] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!sender.trim() || !content.trim()) return

    // In a real app, you would send the message to the server
    // For now, we'll just clear the form
    console.log("Message sent:", { chatId, sender, content })
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


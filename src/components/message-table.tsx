"use client"

import { useState, useEffect } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card } from "@/components/ui/card"

// Mock data for demonstration
const initialMessages = {
  "1": [
    { id: "1", sender: "Alice", content: "Hello everyone!" },
    { id: "2", sender: "Bob", content: "Hi Alice, how are you?" },
    { id: "3", sender: "Charlie", content: "Hey folks, what's up?" },
  ],
  "2": [
    { id: "1", sender: "Support", content: "How can I help you today?" },
    { id: "2", sender: "User", content: "I'm having trouble with my account" },
    { id: "3", sender: "Support", content: "Let me look into that for you" },
  ],
  "3": [
    { id: "1", sender: "David", content: "Anyone watching the game tonight?" },
    { id: "2", sender: "Eva", content: "Yes! Can't wait!" },
  ],
}

export function MessageTable({ chatId }: { chatId: string }) {
  const [messages, setMessages] = useState<Array<{ id: string; sender: string; content: string }>>([])

  useEffect(() => {
    // In a real app, you would fetch messages from an API
    setMessages(initialMessages[chatId as keyof typeof initialMessages] || [])
  }, [chatId])

  return (
    <Card className="overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Sender</TableHead>
            <TableHead>Content</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {messages.length === 0 ? (
            <TableRow>
              <TableCell colSpan={2} className="text-center py-6 text-muted-foreground">
                No messages yet. Be the first to send one!
              </TableCell>
            </TableRow>
          ) : (
            messages.map((message) => (
              <TableRow key={message.id}>
                <TableCell className="font-medium">{message.sender}</TableCell>
                <TableCell>{message.content}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </Card>
  )
}


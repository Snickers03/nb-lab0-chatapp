"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import type React from "react";
import { useState } from "react";
import { socket } from "../socket"; // adjust the import path as needed

interface Props {
  addChat: (topic: string) => void;
}

export function CreateChatForm({ addChat }: Props) {
  const [chatTopic, setChatTopic] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatTopic.trim()) return;

    // Emit the newChat event on the shared socket instance
    console.log("Emitting newChat:", chatTopic, "Connected:", socket.connected);

    socket.emit("newChat", chatTopic);

    // add to db
    addChat(chatTopic);
    setChatTopic("");
  };

  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-3">
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
  );
}

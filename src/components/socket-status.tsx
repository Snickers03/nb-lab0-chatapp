"use client";

import { Badge } from "@/components/ui/badge";
import { Truck, Wifi, WifiOff } from "lucide-react";
import { useEffect, useState } from "react";
import { socket } from "../socket";
export default function SocketStatus() {
  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState("N/A");

  useEffect(() => {
    if (socket.connected) {
      onConnect();
    }

    function onConnect() {
      setIsConnected(true);
      setTransport(socket.io.engine.transport.name);

      socket.io.engine.on("upgrade", (transport: any) => {
        setTransport(transport.name);
      });
    }

    function onDisconnect() {
      setIsConnected(false);
      setTransport("N/A");
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, []);

  return (
    <div>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex items-center gap-1.5">
          {isConnected ? (
            <Wifi className="h-3.5 w-3.5 text-green-500" />
          ) : (
            <WifiOff className="h-3.5 w-3.5 text-red-500" />
          )}
          <span>Status:</span>
        </div>
        <Badge variant={isConnected ? "default" : "destructive"} className="text-xs h-5">
          {isConnected ? "Connected" : "Disconnected"}
        </Badge>
      </div>

      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-1.5">
          <Truck className="h-3.5 w-3.5 text-muted-foreground" />
          <span>Transport:</span>
        </div>
        <Badge variant="outline" className="text-xs py-0 h-5">
          {transport}
        </Badge>
      </div>
    </div>
  );
}
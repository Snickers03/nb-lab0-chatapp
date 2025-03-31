import TrpcProvider from "@/components/providers/TrpcProvider";
import SocketStatus from "@/components/socket-status";
import { MessageCircleIcon } from "lucide-react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "lab0: ChatApp",
  description: "A simple chat application built with Next.js, Prisma, and Socket.io",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased grainy`}>
        <TrpcProvider>
          <div className="container mx-auto p-4 max-w-4xl">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <MessageCircleIcon className="h-8 w-8 text-primary" />
                <h1 className="text-2xl font-bold">lab0: ChatApp</h1>
              </div>
              <SocketStatus />
            </div>
            {children}
          </div>
        </TrpcProvider>
      </body>
    </html>
  );
}
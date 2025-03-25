import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquareOff, MoveLeft } from "lucide-react"
import Link from "next/link"

export function ChatNotFound() {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="flex justify-center mb-2">
            <MessageSquareOff className="h-12 w-12 text-muted-foreground" />
          </div>
          <CardTitle className="text-2xl">Chat Not Found</CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-muted-foreground">The chat you're looking for doesn't exist or may have been removed.</p>
        </CardContent>

        <CardFooter className="flex justify-center">
          <Link href="/">
            <Button className="gap-2">
              <MoveLeft className="h-4 w-4" />
              Go back
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}


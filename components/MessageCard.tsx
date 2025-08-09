"use client";

import { useState, useEffect } from "react";
import { content } from "@/app/content";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart } from "lucide-react";

export default function MessageCard() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [displayedMessage, setDisplayedMessage] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (isTyping) {
      if (displayedMessage.length < content.message.length) {
        const timeoutId = setTimeout(() => {
          setDisplayedMessage(
            content.message.substring(0, displayedMessage.length + 1)
          );
        }, 50);
        return () => clearTimeout(timeoutId);
      } else {
        setIsTyping(false);
      }
    }
  }, [displayedMessage, isTyping]);

  const handleReveal = () => {
    setIsRevealed(true);
  };

  return (
    <Card className="w-11/12 max-w-2xl bg-card/70 backdrop-blur-sm border-2 border-white/20 shadow-2xl rounded-lg animate-fade-in opacity-0 [--animation-delay:200ms]">
      <div className="notepad rounded-md">
        <CardHeader>
          <CardTitle className="font-headline text-4xl md:text-5xl text-center text-card-foreground drop-shadow-lg pt-4">
            {content.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-left text-lg md:text-xl font-body text-card-foreground/90 leading-9 drop-shadow-md px-16 pb-8 min-h-[220px]">
          <p>
            {displayedMessage}
            <span className={isTyping ? "animate-blink" : "hidden"}>|</span>
          </p>
        </CardContent>
      </div>
      <CardFooter className="flex flex-col items-center gap-4 pt-6 pb-4">
        <Button
          onClick={handleReveal}
          className="font-body text-lg rounded-full px-8 py-6 shadow-lg transition-transform transform hover:scale-105"
          variant="default"
          disabled={isTyping || isRevealed}
        >
          <Heart className="mr-2 h-5 w-5 fill-current text-primary-foreground" />
          {content.buttonText}
        </Button>
        {isRevealed && (
          <div className="mt-4 text-center font-body text-xl md:text-2xl font-bold text-primary animate-fade-in drop-shadow-lg">
            <p>{content.hiddenMessage}</p>
          </div>
        )}
        <div className="flex-grow" />
        <p className="font-body text-sm text-muted-foreground mt-4">
          {content.footerText}
        </p>
      </CardFooter>
    </Card>
  );
}

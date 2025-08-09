"use client";

import { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import HeartParticles from "@/components/HeartParticles";
import MessageCard from "@/components/MessageCard";
import Envelope from '@/components/Envelope';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleOpenEnvelope = () => {
    setIsEnvelopeOpen(true);
    if (audioRef.current) {
      audioRef.current.play().catch(error => console.error("Audio play failed:", error));
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };
  
  return (
    <main className="relative w-full min-h-screen flex items-center justify-center p-4 overflow-hidden">
      {!isEnvelopeOpen ? (
        <div className="text-center">
          <h1 className="font-headline text-3xl md:text-4xl text-primary mb-8 animate-fade-in">
            Tap to open
          </h1>
          <Envelope onClick={handleOpenEnvelope} />
        </div>
      ) : (
        <>
          <HeartParticles />
          <MessageCard />
          <audio ref={audioRef} src="https://actions.google.com/sounds/v1/human_sounds/female_singing_a_cappella.ogg" loop muted={isMuted} />
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMute}
            className="fixed bottom-4 right-4 z-50 bg-card/50 hover:bg-card/80 backdrop-blur-sm"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX /> : <Volume2 />}
          </Button>
        </>
      )}
    </main>
  );
}

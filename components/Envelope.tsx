"use client";

import { useState } from 'react';
import { Mail } from 'lucide-react';

interface EnvelopeProps {
  onClick: () => void;
}

export default function Envelope({ onClick }: EnvelopeProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
    setTimeout(onClick, 1000); // Delay to allow animation to play
  };

  return (
    <div className="envelope" onClick={handleClick}>
      <div className={`envelope-wrapper ${isOpen ? 'open' : ''}`}>
        <div className="envelope-back"></div>
        <div className="envelope-card">
           <p className="font-headline text-2xl text-card-foreground"><span className="text-primary">❤️</span></p>
        </div>
        <div className="envelope-flap"></div>
      </div>
    </div>
  );
}

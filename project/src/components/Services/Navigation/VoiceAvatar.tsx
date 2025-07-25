import React, { useState, useEffect } from 'react';
import { Mic, Volume2 } from 'lucide-react';

interface VoiceAvatarProps {
  isListening: boolean;
  transcript: string;
  confidence: number;
}

export const VoiceAvatar: React.FC<VoiceAvatarProps> = ({
  isListening,
  transcript,
  confidence
}) => {
  const [eyesBlink, setEyesBlink] = useState(false);
  const [mouthMovement, setMouthMovement] = useState(0);

  // Blinking animation
  useEffect(() => {
    if (!isListening) return;

    const blinkInterval = setInterval(() => {
      setEyesBlink(true);
      setTimeout(() => setEyesBlink(false), 150);
    }, 2000 + Math.random() * 3000);

    return () => clearInterval(blinkInterval);
  }, [isListening]);

  // Mouth movement based on speech
  useEffect(() => {
    if (!isListening) {
      setMouthMovement(0);
      return;
    }

    const interval = setInterval(() => {
      setMouthMovement(Math.random() * confidence * 10);
    }, 100);

    return () => clearInterval(interval);
  }, [isListening, confidence]);

  if (!isListening) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-in fade-in duration-500">
      <div className="relative">
        {/* Background glow */}
        <div className="absolute -inset-8 bg-gradient-to-r from-purple-600/30 via-blue-600/30 to-teal-600/30 rounded-full blur-xl animate-pulse"></div>
        
        {/* Main avatar container */}
        <div className="relative w-64 h-64 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full border-4 border-white/20 flex items-center justify-center animate-in zoom-in duration-700">
          {/* Outer ring animation */}
          <div className="absolute inset-0 rounded-full border-2 border-purple-400/50 animate-ping"></div>
          <div className="absolute inset-2 rounded-full border border-blue-400/30 animate-pulse"></div>
          
          {/* Avatar face */}
          <div className="relative w-48 h-48 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex flex-col items-center justify-center">
            {/* Eyes */}
            <div className="flex space-x-8 mb-4">
              <div className={`w-6 h-6 bg-slate-800 rounded-full transition-all duration-150 ${
                eyesBlink ? 'scale-y-0' : 'scale-y-100'
              }`}>
                <div className="w-2 h-2 bg-white rounded-full mt-1 ml-1 animate-pulse"></div>
              </div>
              <div className={`w-6 h-6 bg-slate-800 rounded-full transition-all duration-150 ${
                eyesBlink ? 'scale-y-0' : 'scale-y-100'
              }`}>
                <div className="w-2 h-2 bg-white rounded-full mt-1 ml-1 animate-pulse"></div>
              </div>
            </div>
            
            {/* Mouth */}
            <div 
              className="w-8 bg-slate-800 rounded-full transition-all duration-100"
              style={{ 
                height: `${Math.max(2, 4 + mouthMovement)}px`,
                transform: `scaleY(${1 + mouthMovement / 20})`
              }}
            ></div>
            
            {/* Microphone icon */}
            <div className="absolute bottom-4">
              <Mic className="w-6 h-6 text-purple-600 animate-pulse" />
            </div>
          </div>
          
          {/* Sound waves */}
          <div className="absolute inset-0 flex items-center justify-center">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute border-2 border-purple-400/30 rounded-full animate-ping"
                style={{
                  width: `${120 + i * 40}px`,
                  height: `${120 + i * 40}px`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: '2s'
                }}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Status text */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-3 border border-white/20">
            <div className="flex items-center space-x-2 mb-2">
              <Volume2 className="w-4 h-4 text-purple-400" />
              <span className="text-white font-medium">Listening...</span>
            </div>
            {transcript && (
              <p className="text-slate-300 text-sm max-w-xs truncate">
                "{transcript}"
              </p>
            )}
            <div className="flex items-center justify-center space-x-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-1 h-3 bg-purple-400 rounded-full transition-all duration-150 ${
                    confidence > (i + 1) * 0.2 ? 'opacity-100 animate-pulse' : 'opacity-30'
                  }`}
                  style={{
                    animationDelay: `${i * 100}ms`
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Close hint */}
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
          <p className="text-slate-400 text-sm text-center">
            Speak clearly • Auto-stops after silence
          </p>
        </div>
      </div>
    </div>
  );
};
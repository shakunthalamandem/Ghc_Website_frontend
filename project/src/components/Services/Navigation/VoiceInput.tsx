import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Mic, MicOff, Volume2, X } from 'lucide-react';

interface VoiceInputProps {
  onTranscript: (text: string) => void;
  onFinalTranscript: (text: string) => void;
  isDisabled?: boolean;
  onListeningChange?: (isListening: boolean) => void;
}

export const VoiceInput: React.FC<VoiceInputProps> = ({
  onTranscript,
  onFinalTranscript,
  isDisabled = false,
  onListeningChange
}) => {
  const [isListening, setIsListening] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [, setTranscript] = useState('');
  const [confidence, setConfidence] = useState(0);
  const [permissionError, setPermissionError] = useState<string | null>(null);
  const [showPermissionError, setShowPermissionError] = useState(false);

  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const silenceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const restartTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    setIsSupported(!!SpeechRecognition);
  }, []);

  useEffect(() => {
    if (showPermissionError) {
      const timer = setTimeout(() => {
        setShowPermissionError(false);
      }, 10000); // auto-hide after 10s

      return () => clearTimeout(timer);
    }
  }, [showPermissionError]);

  const initializeRecognition = useCallback(() => {
    if (!isSupported) return null;

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setIsListening(true);
      onListeningChange?.(true);
      console.log('Voice recognition started');
    };

    recognition.onresult = (event) => {
      let interimTranscript = '';
      let finalTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        const confidence = result[0].confidence;

        if (result.isFinal) {
          finalTranscript += result[0].transcript;
          setConfidence(confidence);
        } else {
          interimTranscript += result[0].transcript;
        }
      }

      const fullTranscript = finalTranscript || interimTranscript;
      setTranscript(fullTranscript);
      onTranscript(fullTranscript);

      if (finalTranscript) {
        onFinalTranscript(finalTranscript);
        resetSilenceTimer();
      } else {
        resetSilenceTimer();
      }
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);

      if (event.error === 'not-allowed') {
        setPermissionError('Microphone access denied. Please allow microphone access in your browser settings.');
        setShowPermissionError(true);
        stopListening();
      } else if (event.error === 'no-speech' || event.error === 'audio-capture') {
        stopListening();
      } else if (event.error === 'network') {
        setPermissionError('Network error. Please check your internet connection.');
        setShowPermissionError(true);
        stopListening();
      } else {
        console.log('Other speech error:', event.error);
      }
    };

    recognition.onend = () => {
      setIsListening(false);
      onListeningChange?.(false);
      if (recognitionRef.current && isListening) {
        restartTimerRef.current = setTimeout(() => {
          try {
            recognitionRef.current?.start();
          } catch (error) {
            console.log('Recognition restart failed:', error);
          }
        }, 100);
      }
    };

    return recognition;
  }, [isSupported, onTranscript, onFinalTranscript, isListening]);

  const resetSilenceTimer = useCallback(() => {
    if (silenceTimerRef.current) {
      clearTimeout(silenceTimerRef.current);
    }

    silenceTimerRef.current = setTimeout(() => {
      stopListening();
    }, 10000);
  }, []);

  const startListening = useCallback(() => {
    if (!isSupported || isDisabled || isListening) return;

    setPermissionError(null);
    setShowPermissionError(false);

    const recognition = initializeRecognition();
    if (!recognition) return;

    recognitionRef.current = recognition;
    setTranscript('');
    setConfidence(0);

    try {
      recognition.start();
      resetSilenceTimer();
    } catch (error) {
      console.error('Failed to start recognition:', error);
      setPermissionError('Failed to start voice recognition. Please try again.');
      setShowPermissionError(true);
    }
  }, [isSupported, isDisabled, isListening, initializeRecognition, resetSilenceTimer]);

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      recognitionRef.current = null;
    }

    if (silenceTimerRef.current) {
      clearTimeout(silenceTimerRef.current);
      silenceTimerRef.current = null;
    }

    if (restartTimerRef.current) {
      clearTimeout(restartTimerRef.current);
      restartTimerRef.current = null;
    }

    setIsListening(false);
  }, []);

  const toggleListening = useCallback(() => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  }, [isListening, startListening, stopListening]);

  useEffect(() => {
    return () => {
      stopListening();
    };
  }, [stopListening]);

  if (!isSupported) return null;

  return (
    <div className="flex items-center space-x-2 relative">
      <button
        onClick={toggleListening}
        disabled={isDisabled}
        className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
          isListening
            ? 'bg-red-600 hover:bg-red-700 animate-pulse'
            : permissionError
            ? 'bg-orange-600 hover:bg-orange-700'
            : 'bg-purple-600 hover:bg-purple-700'
        } ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        title={isListening ? 'Stop listening' : 'Start voice input'}
      >
        {isListening ? (
          <MicOff className="w-5 h-5 text-white" />
        ) : (
          <Mic className="w-5 h-5 text-white" />
        )}

        {isListening && (
          <div className="absolute -inset-1 border-2 border-red-400 rounded-full animate-ping"></div>
        )}
      </button>

      {showPermissionError && permissionError && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-orange-100 text-orange-800 border border-orange-300 px-4 py-2 shadow-md text-sm rounded-lg flex items-center space-x-4 max-w-md">
          <div>
            <span className="font-medium">Permission Required:</span> {permissionError}
          </div>
          <button
            onClick={() => setShowPermissionError(false)}
            className="text-orange-600 hover:text-orange-800 transition"
            title="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {isListening && (
        <div className="flex items-center space-x-1">
          <Volume2 className="w-4 h-4 text-purple-400" />
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-1 h-4 bg-purple-400 rounded-full transition-all duration-150 ${
                  confidence > (i + 1) * 0.2 ? 'opacity-100' : 'opacity-30'
                }`}
                style={{
                  animationDelay: `${i * 100}ms`,
                  animation: isListening ? 'pulse 1s infinite' : 'none'
                }}
              ></div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

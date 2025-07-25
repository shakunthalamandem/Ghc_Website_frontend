import React, { useState, useEffect } from 'react';
import { Search, Sparkles,  Clock, MessageSquare, Building2, HelpCircle, Star, ArrowUp } from 'lucide-react';
import { AboutPortal } from '../Services/Navigation/AboutPortal';
import FeedbackPopup from '../Services/Navigation/FeedbackPopup';
import { HistorySidebar } from '../Services/Navigation/HistorySidebar';
import { VoiceAvatar } from '../Services/Navigation/VoiceAvatar';
import { VoiceInput } from '../Services/Navigation/VoiceInput';
import { WhoAmIPopup } from '../Services/Navigation/WhoAmIPopup';
import Footer from '../Pages/Footer';
import Logo from '../Assets/Images/Color logo - no background.png'; 

interface QueryResponse {
  id: string;
  query: string;
  optimizedQuery: string;
  response: string;
  timestamp: Date;
  processingTime: number;
}

function GhcMain() {
  const [query, setQuery] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentResponse, setCurrentResponse] = useState<QueryResponse | null>(null);
  const [queryHistory, setQueryHistory] = useState<QueryResponse[]>([]);
  const [showWhoAmI, setShowWhoAmI] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [logoAnimated, setLogoAnimated] = useState(false);
  const [isVoiceListening, setIsVoiceListening] = useState(false);
  const [voiceTranscript, setVoiceTranscript] = useState('');
  const typingText = "Search company policies, procedures, benefits, or resources...";

  const [placeholder, setPlaceholder] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < typingText.length) {
      const timeout = setTimeout(() => {
        setPlaceholder((prev) => prev + typingText.charAt(index));
        setIndex(index + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLogoAnimated(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleSearch = async () => {
    if (!query.trim()) return;

    setIsProcessing(true);

    try {
      const response = await fetch('http://192.168.1.43:8000/api/assistant_query/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: query }),
      });

      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();

      const newResponse: QueryResponse = {
        id: Date.now().toString(),
        query,
        optimizedQuery: query,
        response: data.message,
        timestamp: new Date(),
        processingTime: 1.5,
      };

      setCurrentResponse(newResponse);
      setQueryHistory(prev => [newResponse, ...prev.slice(0, 4)]);
      setQuery('');
    } catch (error) {
      console.error('Error fetching from backend:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleVoiceTranscript = (transcript: string) => {
    setQuery(transcript);
    setVoiceTranscript(transcript);
    setIsVoiceListening(true);
  };

  const handleFinalVoiceTranscript = (transcript: string) => {
    setQuery(transcript);
    setVoiceTranscript(transcript);
    setIsVoiceListening(false);
    setTimeout(() => {
      if (transcript.trim()) handleSearch();
    }, 500);
  };

  const handleSelectHistoryQuery = (selectedQuery: string) => {
    setQuery(selectedQuery);
    setShowHistory(false);
  };

  const handleClearHistory = () => setQueryHistory([]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#045d78] to-slate-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-6xl">
        <nav className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className={`relative transition-all duration-1500 ease-out ${logoAnimated ? 'transform scale-100 opacity-100' : 'transform scale-0 opacity-0'}`}>
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-xl blur-lg opacity-70 animate-pulse"></div>
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 shadow-xl flex items-center space-x-3">
                <img src={Logo} alt="Golden Hills Logo" className={`w-36 h-auto transition-all duration-1000 ${logoAnimated ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {queryHistory.length > 0 && (
              <button onClick={() => setShowHistory(true)} className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 flex items-center space-x-2 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <Clock className="w-4 h-4" />
                <span className="hidden sm:inline">History</span>
                <span className="bg-purple-600/50 text-xs px-2 py-1 rounded-full">{queryHistory.length}</span>
              </button>
            )}
            <button onClick={() => setShowAbout(true)} className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 flex items-center space-x-2 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Building2 className="w-4 h-4" />
              <span className="hidden sm:inline">About Portal</span>
            </button>
            <button onClick={() => setShowFeedback(true)} className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 flex items-center space-x-2 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Star className="w-4 h-4" />
              <span className="hidden sm:inline">Feedback</span>
            </button>
          </div>
        </nav>

        <header className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-75 animate-pulse"></div>
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-6 py-3 flex items-center space-x-3">
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Golden Hills Capital India
                </span>
                <Sparkles className="w-6 h-6 text-blue-400 animate-pulse" />
              </div>
            </div>
          </div>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We are dedicated to delivering innovative fin-Tech solutions that empower growth and long-term value. Our services include investment management, strategic advisory, and solutions for businesses and investors.
          </p>
        </header>

        <div className="mb-12">
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 rounded-2xl blur opacity-75"></div>
            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-1">
              <div className="flex items-center space-x-4 p-4">
                <Search className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <button onClick={() => setShowWhoAmI(true)} className="text-slate-400 hover:text-purple-400 transition-colors duration-200 flex items-center space-x-1 text-sm">
                  <HelpCircle className="w-4 h-4" />
                  <span>Who am I?</span>
                </button>
                <div className="w-px h-6 bg-slate-600"></div>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={placeholder}
                  className="flex-1 bg-transparent text-white placeholder-slate-400 border-none outline-none text-lg"
                  disabled={isProcessing}
                />
                <VoiceInput
                  onTranscript={handleVoiceTranscript}
                  onFinalTranscript={handleFinalVoiceTranscript}
                  isDisabled={isProcessing}
                  onListeningChange={setIsVoiceListening}
                />
                <button
                  onClick={handleSearch}
                  disabled={!query.trim() || isProcessing}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
                >
                  {isProcessing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Processing...</span>
                    </>
                  ) : (
                    <ArrowUp className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {isProcessing && (
          <div className="mb-12 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="w-8 h-8 border-2 border-purple-400/30 border-t-purple-400 rounded-full animate-spin"></div>
                <span className="text-white text-lg">Processing your query...</span>
              </div>
              <div className="text-center">
                <div className="w-full bg-slate-700/50 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full animate-pulse" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentResponse && !isProcessing && (
          <div className="mb-12 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-4 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                    <MessageSquare className="w-5 h-5 text-purple-400" />
                    <span> Response</span>
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-slate-400">
                    <span className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{currentResponse.processingTime}s</span>
                    </span>
                    <span>{currentResponse.timestamp.toLocaleTimeString()}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <p className="text-slate-400 text-sm mb-2">Original Query:</p>
                  <p className="text-white bg-slate-800/50 rounded-lg p-3">{currentResponse.query}</p>
                </div>
                <div className="mb-4">
                  <p className="text-slate-400 text-sm mb-2">Optimized Query:</p>
                  <p className="text-blue-300 bg-blue-900/20 rounded-lg p-3 italic">{currentResponse.optimizedQuery}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-2">Response:</p>
                  <div className="text-white bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-lg p-4 whitespace-pre-line">
                    {currentResponse.response}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {queryHistory.length > 0 && (
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-white mb-6 text-center flex items-center justify-center space-x-2">
              <Clock className="w-5 h-5 text-slate-400" />
              <span>Recent Queries</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
              {queryHistory.slice(1).map((item) => (
                <div key={item.id} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-slate-400">{item.timestamp.toLocaleTimeString()}</span>
                    <span className="text-xs text-purple-400">{item.processingTime}s</span>
                  </div>
                  <p className="text-white text-sm line-clamp-2">{item.query}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <Footer />
      </div>

      <WhoAmIPopup isOpen={showWhoAmI} onClose={() => setShowWhoAmI(false)} />
      <FeedbackPopup isOpen={showFeedback} onClose={() => setShowFeedback(false)} />
      <AboutPortal isOpen={showAbout} onClose={() => setShowAbout(false)} />
      <HistorySidebar
        isOpen={showHistory}
        onClose={() => setShowHistory(false)}
        queryHistory={queryHistory}
        onSelectQuery={handleSelectHistoryQuery}
        onClearHistory={handleClearHistory}
      />
      <VoiceAvatar isListening={isVoiceListening} transcript={voiceTranscript} confidence={1} />
    </div>
  );
}

export default GhcMain;
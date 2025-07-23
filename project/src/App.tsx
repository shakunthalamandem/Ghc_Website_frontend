import React, { useState, useEffect } from 'react';
import { Search, Sparkles, Brain, ChevronRight, Clock, TrendingUp, Users, FileText, Zap, Lightbulb, MessageSquare, ArrowRight, Building2, HelpCircle, Star, RefreshCw } from 'lucide-react';
import { WhoAmIPopup } from './components/WhoAmIPopup';
import FeedbackPopup from './components/FeedbackPopup';
import { AboutPortal } from './components/AboutPortal';
import { HistorySidebar } from './components/HistorySidebar';

interface QuerySuggestion {
  id: string;
  text: string;
  category: string;
  icon: React.ReactNode;
}

interface QueryResponse {
  id: string;
  query: string;
  optimizedQuery: string;
  response: string;
  timestamp: Date;
  processingTime: number;
}

function App() {
  const [query, setQuery] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentResponse, setCurrentResponse] = useState<QueryResponse | null>(null);
  const [queryHistory, setQueryHistory] = useState<QueryResponse[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [showWhoAmI, setShowWhoAmI] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [postSearchSuggestions, setPostSearchSuggestions] = useState<QuerySuggestion[]>([]);
  const [logoAnimated, setLogoAnimated] = useState(false);

  useEffect(() => {
    // Trigger logo animation after component mounts
    const timer = setTimeout(() => {
      setLogoAnimated(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const suggestions: QuerySuggestion[] = [
    {
      id: '1',
      text: 'What are our company values and mission?',
      category: 'Company Culture',
      icon: <Users className="w-4 h-4" />
    },
    {
      id: '2',
      text: 'How do I submit a vacation request?',
      category: 'HR Policies',
      icon: <FileText className="w-4 h-4" />
    },
    {
      id: '3',
      text: 'What benefits are available to employees?',
      category: 'Benefits',
      icon: <Zap className="w-4 h-4" />
    },
    {
      id: '4',
      text: 'Who should I contact for IT support?',
      category: 'Support',
      icon: <MessageSquare className="w-4 h-4" />
    },
    {
      id: '5',
      text: 'What is our remote work policy?',
      category: 'Policies',
      icon: <TrendingUp className="w-4 h-4" />
    },
    {
      id: '6',
      text: 'How can I access the employee handbook?',
      category: 'Resources',
      icon: <FileText className="w-4 h-4" />
    }
  ];

  const getRelatedSuggestions = (query: string): QuerySuggestion[] => {
    const keywords = query.toLowerCase();
    
    if (keywords.includes('vacation') || keywords.includes('leave')) {
      return [
        { id: 'r1', text: 'What is the sick leave policy?', category: 'HR Policies', icon: <FileText className="w-4 h-4" /> },
        { id: 'r2', text: 'How do I check my remaining vacation days?', category: 'HR Policies', icon: <Clock className="w-4 h-4" /> },
        { id: 'r3', text: 'What is the parental leave policy?', category: 'Benefits', icon: <Users className="w-4 h-4" /> }
      ];
    }
    
    if (keywords.includes('benefits') || keywords.includes('insurance')) {
      return [
        { id: 'r4', text: 'How do I enroll in health insurance?', category: 'Benefits', icon: <Zap className="w-4 h-4" /> },
        { id: 'r5', text: 'What is our 401k matching policy?', category: 'Benefits', icon: <TrendingUp className="w-4 h-4" /> },
        { id: 'r6', text: 'Are there wellness programs available?', category: 'Benefits', icon: <Users className="w-4 h-4" /> }
      ];
    }
    
    if (keywords.includes('support') || keywords.includes('help') || keywords.includes('contact')) {
      return [
        { id: 'r7', text: 'How do I reset my password?', category: 'IT Support', icon: <MessageSquare className="w-4 h-4" /> },
        { id: 'r8', text: 'Who handles equipment requests?', category: 'IT Support', icon: <Zap className="w-4 h-4" /> },
        { id: 'r9', text: 'What are the HR contact hours?', category: 'Support', icon: <Clock className="w-4 h-4" /> }
      ];
    }
    
    // Default related suggestions
    return [
      { id: 'r10', text: 'What training programs are available?', category: 'Development', icon: <Lightbulb className="w-4 h-4" /> },
      { id: 'r11', text: 'How do I update my personal information?', category: 'HR Policies', icon: <Users className="w-4 h-4" /> },
      { id: 'r12', text: 'What is our code of conduct?', category: 'Policies', icon: <FileText className="w-4 h-4" /> }
    ];
  };

  const optimizeQuery = (originalQuery: string): string => {
    // Simulate query optimization logic
    const keywords = originalQuery.toLowerCase();
    
    if (keywords.includes('vacation') || keywords.includes('time off') || keywords.includes('leave')) {
      return `Employee leave policies and vacation request procedures for: "${originalQuery}"`;
    }
    if (keywords.includes('benefits') || keywords.includes('insurance') || keywords.includes('health')) {
      return `Employee benefits information and eligibility details for: "${originalQuery}"`;
    }
    if (keywords.includes('policy') || keywords.includes('rule') || keywords.includes('procedure')) {
      return `Company policies and procedures documentation for: "${originalQuery}"`;
    }
    if (keywords.includes('contact') || keywords.includes('support') || keywords.includes('help')) {
      return `Contact information and support resources for: "${originalQuery}"`;
    }
    
    return `Company portal information search for: "${originalQuery}" - provide comprehensive and relevant details`;
  };

  const simulateAIResponse = (optimizedQuery: string): string => {
    // Simulate AI response based on optimized query
    if (optimizedQuery.includes('leave policies')) {
      return `Our company offers flexible time-off policies including:\n\n• Annual Leave: 20 days per year (prorated for new hires)\n• Sick Leave: 10 days per year with rollover option\n• Personal Days: 3 floating days annually\n• Parental Leave: 12 weeks paid leave for new parents\n\nTo request time off, please use the HR portal or contact your manager at least 2 weeks in advance. All requests require supervisor approval and are subject to business needs and scheduling requirements.`;
    }
    
    if (optimizedQuery.includes('benefits information')) {
      return `We provide comprehensive benefits to support your well-being:\n\n• Health Insurance: Premium medical, dental, and vision coverage\n• Retirement: 401(k) with 4% company matching\n• Wellness: On-site gym, mental health support, annual health screenings\n• Professional Development: $2,000 annual learning budget\n• Flexible Work: Remote work options and flexible scheduling\n• Additional: Life insurance, disability coverage, employee assistance program\n\nEnrollment periods occur annually in November. Contact HR for detailed plan information and eligibility requirements.`;
    }
    
    if (optimizedQuery.includes('company values')) {
      return `Our company is built on five core values that guide everything we do:\n\n• Innovation: We embrace creativity and continuously seek better solutions\n• Integrity: We act with honesty, transparency, and ethical responsibility\n• Collaboration: We work together to achieve shared goals and success\n• Excellence: We strive for the highest quality in everything we deliver\n• Growth: We invest in our people and foster continuous learning\n\nOur mission is to empower teams with cutting-edge technology solutions while maintaining our commitment to sustainable business practices and positive community impact.`;
    }
    
    return `Thank you for your query. Based on your question "${optimizedQuery}", I've searched our company portal database. While I don't have specific information readily available for this particular query, I recommend:\n\n• Checking the employee handbook in the resources section\n• Contacting HR at hr@company.com or ext. 2100\n• Visiting the IT help desk for technical questions\n• Reaching out to your direct supervisor for department-specific policies\n\nIs there anything else I can help you find in our company portal?`;
  };

  const handleSearch = async () => {
    if (!query.trim()) return;

    setIsProcessing(true);
    setShowSuggestions(false);
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const optimizedQuery = optimizeQuery(query);
    const response = simulateAIResponse(optimizedQuery);
    
    const newResponse: QueryResponse = {
      id: Date.now().toString(),
      query,
      optimizedQuery,
      response,
      timestamp: new Date(),
      processingTime: 1.5
    };
    
    setCurrentResponse(newResponse);
    setQueryHistory(prev => [newResponse, ...prev.slice(0, 4)]); // Keep last 5
    setPostSearchSuggestions(getRelatedSuggestions(query));
    setIsProcessing(false);
    setQuery('');
  };

  const handleSelectHistoryQuery = (selectedQuery: string) => {
    setQuery(selectedQuery);
    setShowHistory(false);
    setShowSuggestions(false);
  };

  const handleClearHistory = () => {
    setQueryHistory([]);
  };

  const handleSuggestionClick = (suggestion: QuerySuggestion) => {
    setQuery(suggestion.text);
    setShowSuggestions(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black-900 to-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-8 max-w-6xl">
        {/* Top Navigation */}
        <nav className="flex items-center justify-between mb-8">
          {/* GHC Logo */}
          <div className="flex items-center space-x-3">
            <div className={`relative transition-all duration-2000 ease-out ${
              logoAnimated 
                ? 'transform translate-x-0 translate-y-0 rotate-0 scale-100 opacity-100' 
                : 'transform -translate-x-32 translate-y-16 rotate-45 scale-0 opacity-0'
            }`}>
              <div className={`absolute -inset-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg blur transition-all duration-2000 ${
                logoAnimated ? 'opacity-75 animate-pulse' : 'opacity-0'
              }`}></div>
              <div className={`relative bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 flex items-center space-x-3 transition-all duration-1500 delay-300 ${
                logoAnimated ? 'shadow-2xl shadow-blue-500/25' : ''
              }`}>
                <div className={`transition-all duration-1000 delay-700 ${
                  logoAnimated ? 'rotate-0 scale-100' : 'rotate-180 scale-0'
                }`}>
                  <Building2 className={`w-8 h-8 transition-all duration-1000 delay-1000 ${
                    logoAnimated ? 'text-blue-400' : 'text-transparent'
                  }`} />
                </div>
                <div>
                  <div className={`text-xl font-bold transition-all duration-800 delay-1200 ${
                    logoAnimated ? 'text-white translate-x-0' : 'text-transparent translate-x-4'
                  }`}>GHC</div>
                  <div className={`text-xs transition-all duration-800 delay-1400 ${
                    logoAnimated ? 'text-slate-400 translate-x-0' : 'text-transparent translate-x-4'
                  }`}>Golden Hills Capital</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center space-x-4">
            {queryHistory.length > 0 && (
              <button
                onClick={() => setShowHistory(true)}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 flex items-center space-x-2 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Clock className="w-4 h-4" />
                <span className="hidden sm:inline">History</span>
                <span className="bg-purple-600/50 text-xs px-2 py-1 rounded-full">
                  {queryHistory.length}
                </span>
              </button>
            )}
            <button
              onClick={() => setShowAbout(true)}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 flex items-center space-x-2 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Building2 className="w-4 h-4" />
              <span className="hidden sm:inline">About Portal</span>
            </button>
            <button
              onClick={() => setShowFeedback(true)}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 flex items-center space-x-2 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Star className="w-4 h-4" />
              <span className="hidden sm:inline">Feedback</span>
            </button>
          </div>
        </nav>

        {/* Header */}
        <header className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-75 animate-pulse"></div>
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-6 py-3 flex items-center space-x-3">
                <Brain className="w-8 h-8 text-purple-400" />
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Golden Hills Capital India 
                </span>
                <Sparkles className="w-6 h-6 text-blue-400 animate-pulse" />
              </div>
            </div>
          </div>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
We are dedicated to delivering innovative fin-Tech solutions that empower growth and long-term value.
Our services include investment management, strategic advisory, and solutions for businesses and investors.


          </p>
        </header>

        {/* Search Interface */}
        <div className="mb-12">
          <div className="relative max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 rounded-2xl blur opacity-75"></div>
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-1">
                <div className="flex items-center space-x-4 p-4">
                  <Search className="w-6 h-6 text-slate-400 flex-shrink-0" />
                  <button
                    onClick={() => setShowWhoAmI(true)}
                    className="text-slate-400 hover:text-purple-400 transition-colors duration-200 flex items-center space-x-1 text-sm"
                  >
                    <HelpCircle className="w-4 h-4" />
                    <span>Who am I?</span>
                  </button>
                  <div className="w-px h-6 bg-slate-600"></div>
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Search company policies, procedures, benefits, or resources..."
                    className="flex-1 bg-transparent text-white placeholder-slate-400 border-none outline-none text-lg"
                    disabled={isProcessing}
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
                      <>
                        <span>Search</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Suggestions */}
        {showSuggestions && !currentResponse && (
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-white mb-6 text-center flex items-center justify-center space-x-2">
              <Lightbulb className="w-5 h-5 text-yellow-400" />
              <span>Popular Questions</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion.id}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="group bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-400/50 rounded-xl p-4 text-left transition-all duration-200 hover:bg-white/10 hover:transform hover:scale-105"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="text-purple-400 group-hover:text-purple-300">
                      {suggestion.icon}
                    </div>
                    <span className="text-xs text-slate-400 uppercase tracking-wider">
                      {suggestion.category}
                    </span>
                  </div>
                  <p className="text-white group-hover:text-purple-100 transition-colors duration-200">
                    {suggestion.text}
                  </p>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-purple-400 ml-auto mt-2 transition-colors duration-200" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Processing Animation */}
        {isProcessing && (
          <div className="mb-12">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div className="w-8 h-8 border-2 border-purple-400/30 border-t-purple-400 rounded-full animate-spin"></div>
                  <span className="text-white text-lg">Processing your query...</span>
                </div>
                <div className="text-center">
                  <p className="text-slate-400 mb-4">Optimizing query for better results</p>
                  <div className="w-full bg-slate-700/50 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full animate-pulse" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Current Response */}
        {currentResponse && !isProcessing && (
          <div className="mb-12">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-4 border-b border-white/10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                      <MessageSquare className="w-5 h-5 text-purple-400" />
                      <span>AI Response</span>
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
          </div>
        )}

        {/* Post-Search Suggestions */}
        {currentResponse && postSearchSuggestions.length > 0 && (
          <div className="mb-12 animate-in slide-in-from-bottom duration-500">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-lg font-semibold text-white mb-6 text-center flex items-center justify-center space-x-2">
                <RefreshCw className="w-5 h-5 text-green-400" />
                <span>Related Questions</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {postSearchSuggestions.map((suggestion) => (
                  <button
                    key={suggestion.id}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="group bg-gradient-to-br from-green-900/20 to-teal-900/20 backdrop-blur-md border border-green-500/20 hover:border-green-400/50 rounded-xl p-4 text-left transition-all duration-300 hover:bg-green-900/30 hover:transform hover:scale-105 hover:shadow-lg"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="text-green-400 group-hover:text-green-300">
                        {suggestion.icon}
                      </div>
                      <span className="text-xs text-green-300/70 uppercase tracking-wider">
                        {suggestion.category}
                      </span>
                    </div>
                    <p className="text-white group-hover:text-green-100 transition-colors duration-200 text-sm">
                      {suggestion.text}
                    </p>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-green-400 ml-auto mt-2 transition-colors duration-200" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
        {/* Query History */}
        {queryHistory.length > 0 && (
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-white mb-6 text-center flex items-center justify-center space-x-2">
              <Clock className="w-5 h-5 text-slate-400" />
              <span>Recent Queries</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
              {queryHistory.slice(1).map((item) => (
                <div
                  key={item.id}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-slate-400">
                      {item.timestamp.toLocaleTimeString()}
                    </span>
                    <span className="text-xs text-purple-400">{item.processingTime}s</span>
                  </div>
                  <p className="text-white text-sm line-clamp-2">{item.query}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Building2 className="w-6 h-6 text-blue-400" />
                <span className="text-xl font-bold text-white">Golden Hills Capital</span>
              </div>
              <p className="text-slate-400 mb-4 leading-relaxed">Revolutionizing finance with AI and ML-driven solutions for smarter, faster, and secure financial services.  
              </p>
              <div className="flex items-center space-x-4">
                <div className="text-sm text-slate-500">
                  <span className="text-white font-semibold">24/7</span> Support
                </div>
     

              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Access</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-slate-400 hover:text-purple-400 transition-colors duration-200">Employee Handbook</a></li>
                <li><a href="#" className="text-slate-400 hover:text-purple-400 transition-colors duration-200">Benefits Portal</a></li>
                <li><a href="#" className="text-slate-400 hover:text-purple-400 transition-colors duration-200">IT Support</a></li>
                <li><a href="#" className="text-slate-400 hover:text-purple-400 transition-colors duration-200">Training Center</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-slate-400">HR: <span className="text-white">ext. 2100</span></li>
                <li className="text-slate-400">IT: <span className="text-white">ext. 3000</span></li>
                <li className="text-slate-400">Portal: <span className="text-white">ext. 4500</span></li>
                <li>
                  <button 
                    onClick={() => setShowFeedback(true)}
                    className="text-purple-400 hover:text-purple-300 transition-colors duration-200"
                  >
                    Send Feedback
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between">
            <div className="text-slate-500 text-sm mb-4 md:mb-0">
              © 2025 Golden Hills Capital. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors duration-200">Security</a>
            </div>
          </div>
        </footer>

        <div className="text-center text-slate-500 text-sm mt-8">
          <p>
            Powered by GHC • Company Portal Assistant • 
            <span className="text-purple-400 ml-1">Always learning, always improving</span>
          </p>
        </div>
      </div>

      {/* Popups */}
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
    </div>
  );
}

export default App;
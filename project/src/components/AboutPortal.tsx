import React, { useState, useEffect } from 'react';
import { X, Brain, Zap, Shield, Users, Globe, Award, TrendingUp, Clock, Search, MessageSquare, Star, ArrowRight, Sparkles } from 'lucide-react';

interface AboutPortalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutPortal: React.FC<AboutPortalProps> = ({ isOpen, onClose }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto animate-in fade-in duration-500">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      ></div>
      
      {/* Content */}
      <div className="relative min-h-screen flex items-center justify-center p-4 animate-in slide-in-from-bottom duration-700">
        <div className={`relative w-full max-w-7xl transform transition-all duration-700 ${
          isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 rounded-3xl blur opacity-75 animate-pulse"></div>
            <div className="relative bg-slate-900/95 backdrop-blur-md border border-white/20 rounded-3xl overflow-hidden">
              {/* Header */}
              <div className="relative bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-8 border-b border-white/10">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h1 className={`text-4xl font-bold text-white mb-2 transition-all duration-1000 ${
                        isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`}>
                        About GHC Portal
                      </h1>
                      <p className={`text-xl text-purple-200 transition-all duration-1000 delay-300 ${
                        isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`}>
Golden Hills Capital India 
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-12">
                {/* Hero Section */}
                <section className="text-center">
                  <div className="flex items-center justify-center mb-6">
                    <div className={`relative transition-all duration-1000 delay-500 ${
                      isAnimating ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
                    }`}>
                      <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-75 animate-pulse"></div>
                      <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-6">
                        <Sparkles className="w-12 h-12 text-purple-400" />
                      </div>
                    </div>
                  </div>
                  <h2 className={`text-3xl font-bold text-white mb-4 transition-all duration-1000 delay-700 ${
                    isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}>
                    Welcome to the Future of Corporate Knowledge
                  </h2>
                  <p className={`text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-1000 ${
                    isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}>
                    The GHC Portal represents a revolutionary approach to accessing company information. 
                    Powered by advanced AI technology, it transforms how employees interact with corporate 
                    knowledge, making information discovery intuitive, fast, and incredibly accurate.
                  </p>
                </section>

                {/* Key Features */}
                <section>
                  <h3 className={`text-2xl font-bold text-white mb-8 text-center transition-all duration-1000 delay-1200 ${
                    isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}>
                    Intelligent Features
                  </h3>
                  <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-1400 ${
                    isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}>
                    <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-2xl p-6 border border-purple-500/20">
                      <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mb-4">
                        <Brain className="w-6 h-6 text-purple-400" />
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-3">Smart Query Processing</h4>
                      <p className="text-slate-300 text-sm">
                        Advanced AI analyzes and optimizes your questions to deliver the most relevant 
                        and comprehensive answers from our knowledge base.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-900/30 to-teal-900/30 rounded-2xl p-6 border border-blue-500/20">
                      <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-4">
                        <Zap className="w-6 h-6 text-blue-400" />
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-3">Instant Responses</h4>
                      <p className="text-slate-300 text-sm">
                        Get immediate answers to your questions with lightning-fast processing 
                        and real-time response generation.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-teal-900/30 to-green-900/30 rounded-2xl p-6 border border-teal-500/20">
                      <div className="w-12 h-12 bg-teal-600/20 rounded-xl flex items-center justify-center mb-4">
                        <Search className="w-6 h-6 text-teal-400" />
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-3">Contextual Suggestions</h4>
                      <p className="text-slate-300 text-sm">
                        Discover relevant information with intelligent suggestions based on 
                        popular queries and your search patterns.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-2xl p-6 border border-orange-500/20">
                      <div className="w-12 h-12 bg-orange-600/20 rounded-xl flex items-center justify-center mb-4">
                        <Shield className="w-6 h-6 text-orange-400" />
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-3">Secure & Private</h4>
                      <p className="text-slate-300 text-sm">
                        Enterprise-grade security ensures your queries and company information 
                        remain protected and confidential.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-pink-900/30 to-purple-900/30 rounded-2xl p-6 border border-pink-500/20">
                      <div className="w-12 h-12 bg-pink-600/20 rounded-xl flex items-center justify-center mb-4">
                        <Clock className="w-6 h-6 text-pink-400" />
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-3">Query History</h4>
                      <p className="text-slate-300 text-sm">
                        Access your recent searches and build upon previous queries for 
                        deeper exploration of topics.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-2xl p-6 border border-indigo-500/20">
                      <div className="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center mb-4">
                        <MessageSquare className="w-6 h-6 text-indigo-400" />
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-3">Continuous Learning</h4>
                      <p className="text-slate-300 text-sm">
                        The AI continuously improves through feedback and usage patterns, 
                        becoming more accurate and helpful over time.
                      </p>
                    </div>
                  </div>
                </section>

                {/* How It Works */}
                <section>
                  <h3 className={`text-2xl font-bold text-white mb-8 text-center transition-all duration-1000 delay-1600 ${
                    isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}>
                    How It Works
                  </h3>
                  <div className={`space-y-6 transition-all duration-1000 delay-1800 ${
                    isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}>
                    <div className="flex items-start space-x-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-2">Ask Your Question</h4>
                        <p className="text-slate-300">
                          Type your question in natural language. Our AI understands context and intent, 
                          so you can ask questions just like you would to a colleague.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-2">Query Optimization</h4>
                        <p className="text-slate-300">
                          The system analyzes and optimizes your query, adding relevant context and 
                          keywords to ensure the most accurate and comprehensive results.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">3</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-2">AI Processing</h4>
                        <p className="text-slate-300">
                          Advanced AI models trained on GHC's knowledge base process your optimized 
                          query and generate accurate, relevant responses.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">4</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-2">Intelligent Response</h4>
                        <p className="text-slate-300">
                          Receive comprehensive, well-structured answers with relevant details, 
                          links to additional resources, and actionable next steps.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Statistics */}
                <section>
                  <h3 className={`text-2xl font-bold text-white mb-8 text-center transition-all duration-1000 delay-2000 ${
                    isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}>
                    Portal Impact
                  </h3>
                  <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-2200 ${
                    isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-white mb-2">15,000+</div>
                      <div className="text-slate-400 text-sm">Active Users</div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Search className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-white mb-2">1M+</div>
                      <div className="text-slate-400 text-sm">Queries Processed</div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <TrendingUp className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-white mb-2">98.5%</div>
                      <div className="text-slate-400 text-sm">Accuracy Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Clock className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-white mb-2">1.2s</div>
                      <div className="text-slate-400 text-sm">Avg Response Time</div>
                    </div>
                  </div>
                </section>

                {/* Awards & Recognition */}
                <section>
                  <h3 className={`text-2xl font-bold text-white mb-8 text-center transition-all duration-1000 delay-2400 ${
                    isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}>
                    Awards & Recognition
                  </h3>
                  <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 delay-2600 ${
                    isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}>
                    <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 rounded-2xl p-6 border border-yellow-500/20 text-center">
                      <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                      <h4 className="text-lg font-semibold text-white mb-2">Best AI Innovation</h4>
                      <p className="text-slate-300 text-sm">Healthcare Technology Awards 2024</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl p-6 border border-blue-500/20 text-center">
                      <Star className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                      <h4 className="text-lg font-semibold text-white mb-2">Excellence in UX</h4>
                      <p className="text-slate-300 text-sm">Corporate Portal Design 2024</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-900/30 to-teal-900/30 rounded-2xl p-6 border border-green-500/20 text-center">
                      <Globe className="w-12 h-12 text-green-400 mx-auto mb-4" />
                      <h4 className="text-lg font-semibold text-white mb-2">Global Impact</h4>
                      <p className="text-slate-300 text-sm">Digital Transformation Leaders 2024</p>
                    </div>
                  </div>
                </section>

                {/* Call to Action */}
                <section className={`text-center transition-all duration-1000 delay-2800 ${
                  isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}>
                  <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-8 border border-purple-500/20">
                    <h3 className="text-2xl font-bold text-white mb-4">Ready to Explore?</h3>
                    <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                      Start your journey with the GHC Portal today. Ask any question about our company, 
                      policies, benefits, or procedures, and experience the power of AI-driven knowledge discovery.
                    </p>
                    <button
                      onClick={onClose}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 flex items-center space-x-2 mx-auto"
                    >
                      <span>Start Exploring</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
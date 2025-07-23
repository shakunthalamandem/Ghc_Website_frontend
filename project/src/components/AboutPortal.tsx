import React, { useState, useEffect } from 'react';
import { motion,  } from 'framer-motion';
import { X, Brain, Zap, Shield, Users, Globe, TrendingUp, Clock, Search, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';
import { CountUpAnimation } from './CountUpAnimation';

interface AboutPortalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutPortal: React.FC<AboutPortalProps> = ({ isOpen, onClose }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setIsAnimating(true), 100);
      return () => clearTimeout(timer);
    } else {
      setIsAnimating(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className={`bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-purple-500/20 shadow-2xl transition-all duration-700 ${
        isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
      }`}>
        <div className="sticky top-0 bg-gradient-to-r from-slate-900/95 to-purple-900/95 backdrop-blur-sm p-6 border-b border-purple-500/20 z-10">
          <div className="flex items-center justify-between">
            <div className={`transition-all duration-1000 delay-300 ${
              isAnimating ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'
            }`}>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                About GHC Portal
              </h2>
              <p className="text-slate-400 mt-2">Revolutionizing Financial Intelligence with AI</p>
            </div>
            <button
              onClick={onClose}
              className={`p-2 hover:bg-purple-600/20 rounded-xl transition-all duration-300 hover:scale-110 ${
                isAnimating ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'
              }`}
            >
              <X className="w-6 h-6 text-slate-400 hover:text-white" />
            </button>
          </div>
        </div>

        <div className="p-8 space-y-12">
          {/* Hero Section */}
          <section className="text-center">
            <div className={`inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full px-6 py-3 border border-purple-500/30 mb-8 transition-all duration-1000 delay-500 ${
              isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300 font-medium">Next-Generation Fintech Platform</span>
            </div>
            <h1 className={`text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6 transition-all duration-1000 delay-700 ${
              isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              GHC Portal
            </h1>
            <p className={`text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-900 ${
              isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}>
              An advanced AI-powered financial intelligence platform that transforms complex data into actionable insights, 
              enabling smarter decisions and accelerating business growth in the digital economy.
            </p>
          </section>

          {/* Key Features */}
          <section>
            <h3 className={`text-2xl font-bold text-white mb-8 text-center transition-all duration-1000 delay-1200 ${
              isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}>
              GHC Portal Features
            </h3>
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-1400 ${
              isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <div className={`bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-2xl p-6 border border-purple-500/20 transform transition-all duration-700 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 ${
                isAnimating ? 'animate-in slide-in-from-left delay-1600' : ''
              }`}>
                <div className={`w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 hover:scale-110 hover:rotate-12 ${
                  isAnimating ? 'animate-in zoom-in delay-1800' : ''
                }`}>
                  <Brain className="w-6 h-6 text-purple-400" />
                </div>
                <h4 className={`text-lg font-semibold text-white mb-3 transition-all duration-500 ${
                  isAnimating ? 'animate-in slide-in-from-bottom delay-2000' : ''
                }`}>Software Product Development</h4>
                <p className={`text-slate-300 text-sm transition-all duration-500 ${
                  isAnimating ? 'animate-in slide-in-from-bottom delay-2200' : ''
                }`}>
We design and develop robust fintech platforms using AI and ML technologies to deliver personalized financial services and seamless digital experiences.
                </p>
              </div>
              <div className={`bg-gradient-to-br from-blue-900/30 to-teal-900/30 rounded-2xl p-6 border border-blue-500/20 transform transition-all duration-700 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 ${
                isAnimating ? 'animate-in slide-in-from-bottom delay-1700' : ''
              }`}>
                <div className={`w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 hover:scale-110 hover:rotate-12 ${
                  isAnimating ? 'animate-in zoom-in delay-1900' : ''
                }`}>
                  <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <h4 className={`text-lg font-semibold text-white mb-3 transition-all duration-500 ${
                  isAnimating ? 'animate-in slide-in-from-bottom delay-2100' : ''
                }`}>Decision Making Analytics</h4>
                <p className={`text-slate-300 text-sm transition-all duration-500 ${
                  isAnimating ? 'animate-in slide-in-from-bottom delay-2300' : ''
                }`}>
Our analytics tools provide real-time insights and data-driven intelligence to support faster, more accurate financial decision-making.
                </p>
              </div>
              <div className={`bg-gradient-to-br from-teal-900/30 to-green-900/30 rounded-2xl p-6 border border-teal-500/20 transform transition-all duration-700 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/20 ${
                isAnimating ? 'animate-in slide-in-from-right delay-1800' : ''
              }`}>
                <div className={`w-12 h-12 bg-teal-600/20 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 hover:scale-110 hover:rotate-12 ${
                  isAnimating ? 'animate-in zoom-in delay-2000' : ''
                }`}>
                  <Search className="w-6 h-6 text-teal-400" />
                </div>
                <h4 className={`text-lg font-semibold text-white mb-3 transition-all duration-500 ${
                  isAnimating ? 'animate-in slide-in-from-bottom delay-2200' : ''
                }`}>Research & Analytics</h4>
                <p className={`text-slate-300 text-sm transition-all duration-500 ${
                  isAnimating ? 'animate-in slide-in-from-bottom delay-2400' : ''
                }`}>
     Access deep market insights, trend analysis, and intelligent recommendations powered by machine learning and big data.
                </p>
              </div>
              <div className={`bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-2xl p-6 border border-orange-500/20 transform transition-all duration-700 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20 ${
                isAnimating ? 'animate-in slide-in-from-left delay-1900' : ''
              }`}>
                <div className={`w-12 h-12 bg-orange-600/20 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 hover:scale-110 hover:rotate-12 ${
                  isAnimating ? 'animate-in zoom-in delay-2100' : ''
                }`}>
                  <Shield className="w-6 h-6 text-orange-400" />
                </div>
                <h4 className={`text-lg font-semibold text-white mb-3 transition-all duration-500 ${
                  isAnimating ? 'animate-in slide-in-from-bottom delay-2300' : ''
                }`}>Visualization Insights</h4>
                <p className={`text-slate-300 text-sm transition-all duration-500 ${
                  isAnimating ? 'animate-in slide-in-from-bottom delay-2500' : ''
                }`}>
  Transform complex financial data into intuitive visual dashboards that help stakeholders analyze, interpret, and act with clarity.
                </p>
              </div>
              <div className={`bg-gradient-to-br from-pink-900/30 to-purple-900/30 rounded-2xl p-6 border border-pink-500/20 transform transition-all duration-700 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-500/20 ${
                isAnimating ? 'animate-in slide-in-from-bottom delay-2000' : ''
              }`}>
                <div className={`w-12 h-12 bg-pink-600/20 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 hover:scale-110 hover:rotate-12 ${
                  isAnimating ? 'animate-in zoom-in delay-2200' : ''
                }`}>
                  <Clock className="w-6 h-6 text-pink-400" />
                </div>
                <h4 className={`text-lg font-semibold text-white mb-3 transition-all duration-500 ${
                  isAnimating ? 'animate-in slide-in-from-bottom delay-2400' : ''
                }`}>Data Management & RPA</h4>
                <p className={`text-slate-300 text-sm transition-all duration-500 ${
                  isAnimating ? 'animate-in slide-in-from-bottom delay-2600' : ''
                }`}>
            Automate routine financial operations and ensure secure, structured data flow using robotic process automation and smart data pipelines.
                </p>
              </div>
              <div className={`bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-2xl p-6 border border-indigo-500/20 transform transition-all duration-700 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20 ${
                isAnimating ? 'animate-in slide-in-from-right delay-2100' : ''
              }`}>
                <div className={`w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 hover:scale-110 hover:rotate-12 ${
                  isAnimating ? 'animate-in zoom-in delay-2300' : ''
                }`}>
                  <MessageSquare className="w-6 h-6 text-indigo-400" />
                </div>
                <h4 className={`text-lg font-semibold text-white mb-3 transition-all duration-500 ${
                  isAnimating ? 'animate-in slide-in-from-bottom delay-2500' : ''
                }`}>Continuous Learning</h4>
                <p className={`text-slate-300 text-sm transition-all duration-500 ${
                  isAnimating ? 'animate-in slide-in-from-bottom delay-2700' : ''
                }`}>
Our AI models continuously evolve through usage and feedback, delivering increasingly relevant financial insights over time.
                </p>
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
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={isAnimating ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: 2.4, duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Users className="w-8 h-8 text-white" />
                </motion.div>
                <div className="text-3xl font-bold text-white mb-2">
                  <CountUpAnimation end={15000} suffix="+" duration={2.5} />
                </div>
                <div className="text-slate-400 text-sm">Active Users</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={isAnimating ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: 2.6, duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Search className="w-8 h-8 text-white" />
                </motion.div>
                <div className="text-3xl font-bold text-white mb-2">
                  <CountUpAnimation end={1000000} suffix="+" duration={2.8} />
                </div>
                <div className="text-slate-400 text-sm">Queries Processed</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={isAnimating ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: 2.8, duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-r from-teal-600 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <TrendingUp className="w-8 h-8 text-white" />
                </motion.div>
                <div className="text-3xl font-bold text-white mb-2">
                  <CountUpAnimation end={98.5} suffix="%" duration={2.2} />
                </div>
                <div className="text-slate-400 text-sm">Accuracy Rate</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={isAnimating ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: 3.0, duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-r from-green-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Clock className="w-8 h-8 text-white" />
                </motion.div>
                <div className="text-3xl font-bold text-white mb-2">
                  <CountUpAnimation end={1.2} suffix="s" duration={1.8} />
                </div>
                <div className="text-slate-400 text-sm">Avg Response Time</div>
              </motion.div>
            </div>
          </section>

          {/* Technology Stack */}
          <section>
            <h3 className={`text-2xl font-bold text-white mb-8 text-center transition-all duration-1000 delay-2800 ${
              isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}>
              Technology Stack
            </h3>
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-1000 delay-3000 ${
              isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              {[
                { name: 'Machine Learning', icon: Brain, color: 'from-purple-500 to-pink-500' },
                { name: 'Cloud Computing', icon: Globe, color: 'from-blue-500 to-cyan-500' },
                { name: 'Real-time Analytics', icon: TrendingUp, color: 'from-green-500 to-teal-500' },
                { name: 'Security First', icon: Shield, color: 'from-orange-500 to-red-500' }
              ].map((tech, index) => (
                <div key={tech.name} className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-4 border border-slate-700/50 text-center hover:border-purple-500/30 transition-all duration-500 hover:scale-105 ${
                  isAnimating ? `animate-in slide-in-from-bottom delay-${3200 + index * 100}` : ''
                }`}>
                  <div className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center mx-auto mb-3 opacity-80`}>
                    <tech.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-white font-medium text-sm">{tech.name}</h4>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <div className={`bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-3xl p-8 border border-purple-500/20 transition-all duration-1000 delay-3600 ${
              isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Financial Operations?</h3>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Join thousands of financial professionals who trust GHC Portal for intelligent insights and automated solutions.
              </p>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center gap-2 mx-auto">
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
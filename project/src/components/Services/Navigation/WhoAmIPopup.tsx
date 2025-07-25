import React from 'react';
import { X, Building2, Users, Shield, Lightbulb, MessageSquare, Search, Clock, TrendingUp, CheckCircle } from 'lucide-react';

interface WhoAmIPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WhoAmIPopup: React.FC<WhoAmIPopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 rounded-2xl blur opacity-75"></div>
          <div className="relative bg-slate-900/95 backdrop-blur-md border border-white/20 rounded-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">About GHC Portal</h2>
                  <p className="text-slate-400">Your AI-powered company assistant</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-8">
              {/* About GHC */}
              <section>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
                  <Building2 className="w-5 h-5 text-purple-400" />
                  <span>About GHC</span>
                </h3>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Global Healthcare Corporation (GHC) is a leading healthcare technology company dedicated to 
                    transforming patient care through innovative solutions. Founded in 1995, we've been at the 
                    forefront of medical technology, serving over 10,000 healthcare facilities worldwide.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    Our mission is to improve healthcare outcomes by providing cutting-edge technology solutions 
                    that empower healthcare professionals and enhance patient experiences. We believe in the power 
                    of AI and data-driven insights to revolutionize healthcare delivery.
                  </p>
                </div>
              </section>

              {/* How to Use This Portal */}
              <section>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
                  <Lightbulb className="w-5 h-5 text-yellow-400" />
                  <span>How to Use This Portal</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center space-x-3 mb-3">
                      <Search className="w-5 h-5 text-blue-400" />
                      <h4 className="font-semibold text-white">Ask Questions</h4>
                    </div>
                    <p className="text-slate-300 text-sm">
                      Type your questions in natural language. Our AI will understand and provide relevant answers 
                      about company policies, procedures, and resources.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center space-x-3 mb-3">
                      <TrendingUp className="w-5 h-5 text-green-400" />
                      <h4 className="font-semibold text-white">Smart Suggestions</h4>
                    </div>
                    <p className="text-slate-300 text-sm">
                      Browse popular questions or click on suggested queries to quickly find information 
                      about common topics and frequently asked questions.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center space-x-3 mb-3">
                      <Clock className="w-5 h-5 text-purple-400" />
                      <h4 className="font-semibold text-white">Query History</h4>
                    </div>
                    <p className="text-slate-300 text-sm">
                      Access your recent searches to quickly revisit information or build upon previous queries 
                      for more detailed exploration.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center space-x-3 mb-3">
                      <MessageSquare className="w-5 h-5 text-teal-400" />
                      <h4 className="font-semibold text-white">Feedback</h4>
                    </div>
                    <p className="text-slate-300 text-sm">
                      Help us improve by providing feedback on responses. Your input helps train our AI 
                      to provide better, more accurate information.
                    </p>
                  </div>
                </div>
              </section>

              {/* Available Information */}
              <section>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
                  <Users className="w-5 h-5 text-green-400" />
                  <span>What You Can Find Here</span>
                </h3>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-white flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>HR & Benefits</span>
                      </h4>
                      <ul className="text-slate-300 text-sm space-y-1 ml-6">
                        <li>• Employee benefits and insurance</li>
                        <li>• Vacation and leave policies</li>
                        <li>• Performance review processes</li>
                        <li>• Career development programs</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-white flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-blue-400" />
                        <span>Company Policies</span>
                      </h4>
                      <ul className="text-slate-300 text-sm space-y-1 ml-6">
                        <li>• Code of conduct and ethics</li>
                        <li>• Remote work guidelines</li>
                        <li>• Security and compliance</li>
                        <li>• Expense and travel policies</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-white flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-purple-400" />
                        <span>IT & Support</span>
                      </h4>
                      <ul className="text-slate-300 text-sm space-y-1 ml-6">
                        <li>• Technical support contacts</li>
                        <li>• Software access and licenses</li>
                        <li>• Equipment requests</li>
                        <li>• Security protocols</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-white flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-teal-400" />
                        <span>Resources</span>
                      </h4>
                      <ul className="text-slate-300 text-sm space-y-1 ml-6">
                        <li>• Employee handbook</li>
                        <li>• Training materials</li>
                        <li>• Company directory</li>
                        <li>• News and announcements</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Usage Guidelines */}
              <section>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-red-400" />
                  <span>Usage Guidelines</span>
                </h3>
                <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-xl p-6 border border-red-500/20">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-slate-300 text-sm">
                        <strong className="text-white">Confidentiality:</strong> Do not share sensitive company information 
                        or personal employee data through this portal. All queries are logged for improvement purposes.
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-slate-300 text-sm">
                        <strong className="text-white">Accuracy:</strong> While our AI strives for accuracy, always verify 
                        critical information with HR or your supervisor for important decisions.
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-slate-300 text-sm">
                        <strong className="text-white">Feedback:</strong> Help us improve by rating responses and providing 
                        feedback. Your input directly contributes to better AI performance.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact Information */}
              <section>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
                  <MessageSquare className="w-5 h-5 text-blue-400" />
                  <span>Need Additional Help?</span>
                </h3>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <Users className="w-6 h-6 text-blue-400" />
                      </div>
                      <h4 className="font-semibold text-white mb-2">HR Department</h4>
                      <p className="text-slate-300 text-sm">hr@ghc.com</p>
                      <p className="text-slate-300 text-sm">Ext: 2100</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <MessageSquare className="w-6 h-6 text-purple-400" />
                      </div>
                      <h4 className="font-semibold text-white mb-2">IT Support</h4>
                      <p className="text-slate-300 text-sm">support@ghc.com</p>
                      <p className="text-slate-300 text-sm">Ext: 3000</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-teal-600/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <Lightbulb className="w-6 h-6 text-teal-400" />
                      </div>
                      <h4 className="font-semibold text-white mb-2">Portal Feedback</h4>
                      <p className="text-slate-300 text-sm">portal@ghc.com</p>
                      <p className="text-slate-300 text-sm">Ext: 4500</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};